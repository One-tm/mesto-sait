"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Info, ListFilter, PawPrint, Search, Sparkles } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  additionalPriceItems,
  catPriceGroups,
  dogPriceGroups,
  priorityBreedSections,
  serviceDescriptions,
  serviceNote
} from "@/data/price";
import { BookingButton } from "@/components/BookingButton";

type DogPriceGroup = (typeof dogPriceGroups)[number];
type GenericPriceGroup = {
  id: string;
  breed: string;
  services: readonly {
    name: string;
    price: number;
    hasNote?: boolean;
  }[];
};
type PrioritySection = (typeof priorityBreedSections)[number];

const formatRub = (value: number) => `${value.toLocaleString("ru-RU")} ₽`;
const normalize = (value: string) => value.toLowerCase().replace("ё", "е").trim();

const priorityBreedNames = priorityBreedSections.flatMap((section) => section.breedNames);
const priorityOrder = new Map<string, number>(priorityBreedNames.map((breed, index) => [breed, index]));
const filterControlClass =
  "focus-ring min-h-12 w-full appearance-none rounded-full border border-mint/35 bg-white py-3 pl-12 pr-12 text-left text-sm font-semibold text-ink shadow-sm outline-none transition hover:border-mint";

function displayBreedTitle(title: string) {
  return title === "Папильон" ? "Папийон" : title;
}

function displayBreedName(breed: string) {
  return breed === "Папийон (Папильон)" ? "Папийон" : breed;
}

function getMinPrice(group: GenericPriceGroup) {
  return Math.min(...group.services.map((service) => service.price));
}

function getTopBreedService(groups: DogPriceGroup[], featuredBreedName?: string) {
  const targetGroups = featuredBreedName ? groups.filter((group) => group.breed === featuredBreedName) : groups;

  return targetGroups
    .flatMap((group) => group.services.map((service) => ({ group, service })))
    .sort((a, b) => b.service.price - a.service.price)[0];
}

function getFeaturedBreedName(section: PrioritySection) {
  return "featuredBreedName" in section ? section.featuredBreedName : undefined;
}

function serviceLabel(name: string, hasNote?: boolean) {
  return `${name}${hasNote ? "*" : ""}`;
}

function getBreedCardId(group: GenericPriceGroup) {
  return `breed-${group.id}`;
}

function BreedServiceRows({ group }: { group: GenericPriceGroup }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      {group.services.map((service) => (
        <div
          key={`${group.id}-${service.name}-${service.price}`}
          className="grid grid-cols-[1fr_auto] gap-4 border-b border-line px-4 py-3 last:border-b-0"
        >
          <span className="text-sm font-medium text-ink">{serviceLabel(service.name, service.hasNote)}</span>
          <span className="whitespace-nowrap text-sm font-semibold text-mint-dark">{formatRub(service.price)}</span>
        </div>
      ))}
    </div>
  );
}

export function PriceList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialBreed = searchParams.get("breed") ?? "";
  const initialSectionTitle = searchParams.get("section") ?? "";
  const [query, setQuery] = useState(initialBreed);
  const [sectionTitle, setSectionTitle] = useState(initialSectionTitle);
  const [serviceName, setServiceName] = useState("all");
  const [isBreedListOpen, setIsBreedListOpen] = useState(false);
  const [isBreedListFiltered, setIsBreedListFiltered] = useState(false);
  const [isServiceListOpen, setIsServiceListOpen] = useState(false);

  const dogByBreed = useMemo(() => new Map<string, DogPriceGroup>(dogPriceGroups.map((group) => [group.breed, group])), []);

  const serviceNames = useMemo(
    () => Array.from(new Set(dogPriceGroups.flatMap((group) => group.services.map((service) => service.name)))).sort(),
    []
  );

  const breedOptions = useMemo(() => dogPriceGroups.map((group) => group.breed).sort((a, b) => a.localeCompare(b, "ru")), []);
  const breedSuggestions = useMemo(() => {
    const preparedQuery = isBreedListFiltered ? normalize(query) : "";
    const ranked = preparedQuery
      ? breedOptions.filter((breed) => normalize(breed).includes(preparedQuery))
      : breedOptions;

    return ranked;
  }, [breedOptions, isBreedListFiltered, query]);

  const selectedServiceLabel = serviceName === "all" ? "Все услуги" : serviceName;
  const selectedSection = useMemo(
    () => priorityBreedSections.find((section) => section.title === sectionTitle),
    [sectionTitle]
  );

  const sortedDogGroups = useMemo(
    () =>
      [...dogPriceGroups].sort((a, b) => {
        const aIndex = priorityOrder.get(a.breed);
        const bIndex = priorityOrder.get(b.breed);

        if (aIndex !== undefined || bIndex !== undefined) {
          return (aIndex ?? 10_000) - (bIndex ?? 10_000);
        }

        return a.breed.localeCompare(b.breed, "ru");
      }),
    []
  );

  const filteredDogGroups = useMemo(() => {
    const preparedQuery = normalize(query);
    const sectionBreedNames = selectedSection ? new Set<string>(selectedSection.breedNames) : null;

    return sortedDogGroups
      .map((group) => ({
        ...group,
        services:
          serviceName === "all"
            ? group.services
            : group.services.filter((service) => service.name === serviceName)
      }))
      .filter((group) => {
        const matchesService = group.services.length > 0;
        const matchesSection = !sectionBreedNames || sectionBreedNames.has(group.breed);
        const matchesQuery =
          !preparedQuery ||
          normalize(group.breed).includes(preparedQuery) ||
          group.services.some((service) => normalize(service.name).includes(preparedQuery));

        return matchesService && matchesSection && matchesQuery;
      });
  }, [query, selectedSection, serviceName, sortedDogGroups]);

  const hasSearch = query.trim().length > 0 || sectionTitle.length > 0 || serviceName !== "all";
  const noteText = serviceNote.replace(/^\*\s*/, "");

  useEffect(() => {
    if (initialSectionTitle) {
      window.setTimeout(() => {
        document.getElementById("all-dog-prices")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    if (!initialBreed) {
      return;
    }

    const selectedGroup = dogByBreed.get(initialBreed);
    const targetId = window.location.hash.slice(1) || (selectedGroup ? getBreedCardId(selectedGroup) : "all-dog-prices");

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, [dogByBreed, initialBreed, initialSectionTitle]);

  const selectBreed = (breed: string) => {
    const selectedGroup = dogByBreed.get(breed);
    const targetId = selectedGroup ? getBreedCardId(selectedGroup) : "all-dog-prices";

    setQuery(breed);
    setSectionTitle("");
    setServiceName("all");
    setIsBreedListOpen(false);
    setIsBreedListFiltered(false);
    router.push(`/price?breed=${encodeURIComponent(breed)}#${targetId}`, { scroll: false });
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };
  const selectSection = (section: PrioritySection) => {
    setQuery("");
    setSectionTitle(section.title);
    setServiceName("all");
    setIsBreedListOpen(false);
    setIsBreedListFiltered(false);
    router.push(`/price?section=${encodeURIComponent(section.title)}#all-dog-prices`, { scroll: false });
    window.setTimeout(() => {
      document.getElementById("all-dog-prices")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };
  const selectService = (nextServiceName: string) => {
    setServiceName(nextServiceName);
    setIsServiceListOpen(false);
  };

  return (
    <div className="mt-10 space-y-12">
      <section aria-labelledby="popular-breeds">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint-dark">
              Основной блок
            </p>
            <h2 id="popular-breeds" className="mt-2 text-3xl font-semibold text-ink">
              Популярные пород и услуги
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {priorityBreedSections.map((section) => {
            const groups = section.breedNames
              .map((breedName) => dogByBreed.get(breedName))
              .filter(Boolean) as DogPriceGroup[];
            const top = getTopBreedService(groups, getFeaturedBreedName(section));

            return (
              <button
                key={section.title}
                type="button"
                onClick={() => {
                  if (top) {
                    selectSection(section);
                  }
                }}
                className="focus-ring rounded-3xl border border-line bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:bg-paper-mint hover:shadow-card"
              >
                <div className="mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{displayBreedTitle(section.title)}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {top ? displayBreedName(top.group.breed) : null}
                    </p>
                  </div>
                </div>
                {top ? (
                    <div className="block w-full rounded-2xl bg-paper px-4 py-3">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-sm font-semibold text-ink">{serviceLabel(top.service.name, top.service.hasNote)}</span>
                        <span className="whitespace-nowrap text-sm font-semibold text-mint-dark">
                          {formatRub(top.service.price)}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-muted">
                        Перейти к услугам: {displayBreedName(top.group.breed)}
                      </p>
                    </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="all-dog-prices">
        <div className="rounded-3xl border border-coral/25 bg-coral-soft/70 p-4 shadow-soft ring-1 ring-white/80">
          <div className="grid gap-3 lg:grid-cols-2">
            <div
              className="relative"
              onBlur={(event) => {
                const nextTarget = event.relatedTarget;

                if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                  setIsBreedListOpen(false);
                }
              }}
            >
              <label htmlFor="breed-search" className="sr-only">
                Найти породу
              </label>
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mint-dark" size={18} />
              <input
                id="breed-search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSectionTitle("");
                  setIsBreedListOpen(true);
                  setIsBreedListFiltered(true);
                  if (!event.target.value.trim()) {
                    router.replace("/price", { scroll: false });
                  }
                }}
                onFocus={() => {
                  setIsBreedListOpen(true);
                  setIsBreedListFiltered(false);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && breedSuggestions[0]) {
                    event.preventDefault();
                    selectBreed(breedSuggestions[0]);
                  }

                  if (event.key === "Escape") {
                    setIsBreedListOpen(false);
                  }
                }}
                placeholder="Начните вводить породу"
                autoComplete="off"
                role="combobox"
                aria-expanded={isBreedListOpen}
                aria-controls="breed-suggestions"
                className={filterControlClass}
              />
              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mint-dark"
                size={18}
                aria-hidden
              />
              {isBreedListOpen ? (
                <div
                  id="breed-suggestions"
                  className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 max-h-72 overflow-y-auto rounded-3xl border border-line bg-white p-2 shadow-card"
                  role="listbox"
                >
                  {breedSuggestions.length > 0 ? (
                    breedSuggestions.map((breed) => (
                      <button
                        key={breed}
                        type="button"
                        onMouseDown={(event) => {
                          event.preventDefault();
                          selectBreed(breed);
                        }}
                        onClick={(event) => event.preventDefault()}
                        className="focus-ring block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-ink transition hover:bg-paper-mint"
                        role="option"
                        aria-selected={query === breed}
                      >
                        {breed}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-muted">Порода не найдена</div>
                  )}
                </div>
              ) : null}
            </div>
            <div
              className="relative"
              onBlur={(event) => {
                const nextTarget = event.relatedTarget;

                if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                  setIsServiceListOpen(false);
                }
              }}
            >
              <label htmlFor="service-filter" className="sr-only">
                Фильтр по услуге
              </label>
              <ListFilter
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mint-dark"
                size={18}
                aria-hidden
              />
              <button
                id="service-filter"
                type="button"
                onClick={() => setIsServiceListOpen((isOpen) => !isOpen)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setIsServiceListOpen(false);
                  }
                }}
                aria-expanded={isServiceListOpen}
                aria-controls="service-suggestions"
                className={filterControlClass}
              >
                <span className="block truncate">{selectedServiceLabel}</span>
              </button>
              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mint-dark"
                size={18}
                aria-hidden
              />
              {isServiceListOpen ? (
                <div
                  id="service-suggestions"
                  className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 max-h-72 overflow-y-auto rounded-3xl border border-line bg-white p-2 shadow-card"
                  role="listbox"
                >
                  {[{ name: "Все услуги", value: "all" }, ...serviceNames.map((item) => ({ name: item, value: item }))].map(
                    (item) => (
                      <button
                        key={item.value}
                        type="button"
                        onMouseDown={(event) => {
                          event.preventDefault();
                          selectService(item.value);
                        }}
                        onClick={(event) => event.preventDefault()}
                        className="focus-ring block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-ink transition hover:bg-paper-mint"
                        role="option"
                        aria-selected={serviceName === item.value}
                      >
                        {item.name}
                      </button>
                    )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint-dark">
              Все породы
            </p>
            <h2 id="all-dog-prices" className="mt-2 text-3xl font-semibold text-ink">
              Прайс по породам собак
            </h2>
          </div>
          <p className="text-sm text-muted">
            {hasSearch ? `Показано ${filteredDogGroups.length} из ${dogPriceGroups.length}` : "Начните поиск, чтобы увидеть услуги"}
          </p>
        </div>

        {hasSearch ? (
          <div className="mt-5 grid gap-3 lg:grid-cols-2">
          {filteredDogGroups.map((group) => (
            <details
              key={group.id}
              id={getBreedCardId(group)}
              className="group scroll-mt-28 rounded-3xl border border-line bg-white p-5 shadow-sm open:shadow-card"
              open
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{group.breed}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {group.services.length} услуг, от {formatRub(getMinPrice(group))}
                  </p>
                </div>
                <ChevronDown
                  size={20}
                  className="mt-1 shrink-0 text-mint-dark transition group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="mt-4">
                <BreedServiceRows group={group} />
              </div>
            </details>
          ))}
          </div>
        ) : (
          <div className="mt-5 rounded-3xl border border-dashed border-line bg-white p-8 text-center shadow-sm">
            <Search className="mx-auto text-mint-dark" size={28} aria-hidden />
            <h3 className="mt-4 text-xl font-semibold text-ink">Найдите породу в списке</h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted">
              В каталоге больше сотни пород, поэтому мы не показываем весь список сразу. Начните вводить название породы
              или выберите подсказку в поле поиска.
            </p>
          </div>
        )}

        {hasSearch && filteredDogGroups.length === 0 ? (
          <div className="mt-6 rounded-3xl border border-line bg-white p-8 text-center text-muted">
            По этим фильтрам ничего не найдено. Попробуйте изменить запрос или выбрать другую услугу.
          </div>
        ) : null}

        {hasSearch && filteredDogGroups.length > 0 ? (
          <div className="mt-6 flex justify-center">
            <BookingButton label="Записаться" />
          </div>
        ) : null}
      </section>

      <section aria-labelledby="service-descriptions">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Info size={22} className="text-mint-dark" aria-hidden />
            <h2 id="service-descriptions" className="text-3xl font-semibold text-ink">
              Описание услуг
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {serviceDescriptions.map((item) => (
              <article key={item.name} className="rounded-3xl border border-line bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 rounded-3xl border border-coral/20 bg-coral-soft p-5 text-sm leading-6 text-ink">
            <strong className="text-coral">*</strong> {noteText}
          </div>
        </div>

        <aside className="mt-8 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-line bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <PawPrint size={20} className="text-coral" aria-hidden />
              <h2 className="text-2xl font-semibold text-ink">Кошки</h2>
            </div>
            <div className="space-y-4">
              {catPriceGroups.map((group) => (
                <div key={group.id}>
                  <h3 className="mb-2 font-semibold text-ink">{group.breed}</h3>
                  <BreedServiceRows group={group} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-coral" aria-hidden />
              <h2 className="text-2xl font-semibold text-ink">Дополнительно</h2>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {additionalPriceItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_auto] gap-3 rounded-2xl bg-paper px-4 py-3 text-sm"
                >
                  <span className="font-medium text-ink">
                    {item.name}
                    <span className="block text-xs font-normal text-muted">{item.category}</span>
                  </span>
                  <span className="whitespace-nowrap font-semibold text-mint-dark">{formatRub(item.price)}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <div className="flex justify-center">
        <BookingButton label="Записаться на груминг" />
      </div>
    </div>
  );
}
