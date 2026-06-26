import Link from "next/link";
import { BadgePercent, CheckCircle2, ChevronRight, HelpCircle, MapPin, PawPrint, ShieldCheck, Sparkles } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { MetrikaPageGoal } from "@/components/MetrikaPageGoal";
import { Button } from "@/components/ui/Button";
import { contacts } from "@/data/contacts";
import { breedLandingPages, serviceLandingPages, type BreedLandingPage, type ServiceLandingPage } from "@/data/seoPages";
import { dogPriceGroups, priorityBreedSections, serviceDescriptions } from "@/data/price";

type DogPriceGroup = (typeof dogPriceGroups)[number];

type SeoLandingPageProps =
  | {
      type: "breed";
      page: BreedLandingPage;
    }
  | {
      type: "service";
      page: ServiceLandingPage;
    };

const siteUrl = "https://mestogroom.ru";

function formatRub(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

function getBreedGroups(sectionTitle: string) {
  const section = priorityBreedSections.find((item) => item.title === sectionTitle);
  if (!section) {
    return [];
  }

  return section.breedNames
    .map((breedName) => dogPriceGroups.find((group) => group.breed === breedName))
    .filter((group): group is DogPriceGroup => Boolean(group));
}

function getMinPrice(groups: ReturnType<typeof getBreedGroups>) {
  const prices = groups.flatMap((group) => group.services.map((service) => service.price));
  return prices.length > 0 ? Math.min(...prices) : null;
}

function servicePriceRows(serviceName: string) {
  if (serviceName === "Груминг кошек") {
    return [];
  }

  return dogPriceGroups
    .map((group) => {
      const service = group.services.find((item) => item.name === serviceName);
      return service ? { breed: group.breed, price: service.price } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a!.price - b!.price)
    .slice(0, 6) as { breed: string; price: number }[];
}

function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted" aria-label="Хлебные крошки">
      <Link href="/" className="hover:text-mint-dark">
        Главная
      </Link>
      {items.map((item) => (
        <span key={item.href} className="inline-flex items-center gap-2">
          <ChevronRight size={14} aria-hidden />
          <Link href={item.href} className="hover:text-mint-dark">
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}

function FaqBlock({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="rounded-3xl border border-line bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <HelpCircle className="text-mint-dark" size={22} aria-hidden />
        <h2 className="text-2xl font-semibold text-ink">Частые вопросы</h2>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-2xl bg-paper p-4">
            <summary className="cursor-pointer font-semibold text-ink">{item.question}</summary>
            <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function RelatedLinks({ currentSlug, type }: { currentSlug: string; type: SeoLandingPageProps["type"] }) {
  const items =
    type === "breed"
      ? breedLandingPages.filter((item) => item.slug !== currentSlug).slice(0, 5).map((item) => ({ href: `/breeds/${item.slug}`, label: item.title }))
      : serviceLandingPages.filter((item) => item.slug !== currentSlug).slice(0, 5).map((item) => ({ href: `/services/${item.slug}`, label: item.title }));

  return (
    <section className="rounded-3xl border border-line bg-paper-mint p-6">
      <h2 className="text-2xl font-semibold text-ink">Похожие разделы</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="focus-ring rounded-full bg-white px-4 py-2 text-sm font-semibold text-mint-dark shadow-sm transition hover:bg-coral hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

const adBenefits = [
  "Скидка 20% на первое посещение",
  "10% на регулярный груминг каждые 5 недель",
  "Прозрачный прайс и запись в Telegram или MAX"
];

export function SeoLandingPage({ type, page }: SeoLandingPageProps) {
  const isBreed = type === "breed";
  const url = `${siteUrl}/${isBreed ? "breeds" : "services"}/${page.slug}`;
  const breedGroups = isBreed ? getBreedGroups(page.breedSection) : [];
  const minPrice = isBreed ? getMinPrice(breedGroups) : null;
  const description = isBreed
    ? `${page.title} в Москве: бережный уход, описание процедуры, ответы на вопросы и актуальный прайс по породе.`
    : `${page.title} в Москве: что входит в услугу, для каких питомцев подходит, ответы на вопросы и переход к прайсу.`;
  const serviceRows = !isBreed ? servicePriceRows(page.serviceName) : [];
  const matchedService = !isBreed ? serviceDescriptions.find((item) => item.name === page.serviceName) : null;
  const faqItems = page.faq;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description,
      provider: {
        "@type": "LocalBusiness",
        name: `${contacts.name} - ${contacts.type}`,
        telephone: contacts.phoneDisplay,
        address: contacts.address,
        description: contacts.nearbyTransit,
        url: siteUrl
      },
      areaServed: "Москва",
      url
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: siteUrl },
        { "@type": "ListItem", position: 2, name: isBreed ? "Породы" : "Услуги", item: `${siteUrl}/${isBreed ? "breeds" : "services"}` },
        { "@type": "ListItem", position: 3, name: page.title, item: url }
      ]
    }
  ];

  return (
    <>
      <MetrikaPageGoal goal="seo_landing_view" params={{ type, slug: page.slug }} />
      <JsonLd id={`${type}-${page.slug}-structured-data`} data={jsonLd} />
      <section className="section-pad">
        <div className="container">
          <Breadcrumbs items={[{ href: url.replace(siteUrl, ""), label: page.title }]} />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-mint-dark">
                {isBreed ? "Груминг по породе" : "Описание услуги"}
              </p>
              <h1 className="text-4xl font-semibold text-ink md:text-6xl">{page.title} в Москве</h1>
              <p className="mt-5 text-lg leading-8 text-muted">{page.intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BookingButton label="Записаться" />
                <Button href={isBreed ? `/price?section=${encodeURIComponent(page.breedSection)}#all-dog-prices` : "/price/#service-descriptions"} variant="secondary" size="lg">
                  Смотреть прайс
                </Button>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {adBenefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 text-sm font-semibold text-ink">
                    <Sparkles className="shrink-0 text-coral" size={17} aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-3xl border border-line bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-mint text-mint-dark">
                  <PawPrint size={24} aria-hidden />
                </div>
                <div>
                  <p className="text-sm text-muted">Адрес студии</p>
                  <p className="font-semibold text-ink">{contacts.address}</p>
                  <p className="mt-1 text-sm leading-5 text-muted">{contacts.nearbyTransit}</p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-paper p-4">
                <p className="text-sm text-muted">Стоимость</p>
                <p className="mt-1 text-2xl font-semibold text-ink">
                  {isBreed && minPrice ? `от ${formatRub(minPrice)}` : serviceRows[0] ? `от ${formatRub(serviceRows[0].price)}` : "по прайсу"}
                </p>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted">
                Итоговая цена зависит от состояния шерсти, колтунов, размера питомца и выбранного комплекса.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container">
          <div className="rounded-[32px] bg-mint-dark p-6 text-white shadow-soft md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold">
                  <BadgePercent size={17} aria-hidden />
                  Предложение для новых клиентов
                </div>
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                  Первое посещение со скидкой 20%
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-white/80">
                  А для регулярного ухода действует скидка 10% при визитах не реже одного раза в 5 недель.
                  Запишитесь удобным способом, администратор подскажет свободные окна и итоговую стоимость.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <BookingButton label="Записаться со скидкой" size="lg" />
                <div className="flex items-start gap-2 text-sm leading-5 text-white/75">
                  <MapPin className="mt-0.5 shrink-0" size={16} aria-hidden />
                  <span>{contacts.nearbyTransit}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{isBreed ? "Особенности ухода" : "Что входит"}</h2>
            <div className="mt-5 space-y-3">
              {(isBreed ? page.careNotes : page.includes).map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-paper p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-mint-dark" size={20} aria-hidden />
                  <p className="text-sm leading-6 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{isBreed ? "Цены по вариантам породы" : "Описание процедуры"}</h2>
            <div className="mt-5 space-y-3">
              {isBreed
                ? breedGroups.map((group) => (
                    <Link
                      key={group.id}
                      href={`/price?breed=${encodeURIComponent(group.breed)}#breed-${group.id}`}
                      className="focus-ring flex items-center justify-between gap-4 rounded-2xl bg-paper p-4 transition hover:bg-paper-mint"
                    >
                      <span className="font-semibold text-ink">{group.breed}</span>
                      <span className="whitespace-nowrap text-sm font-semibold text-mint-dark">
                        от {formatRub(Math.min(...group.services.map((service) => service.price)))}
                      </span>
                    </Link>
                  ))
                : serviceRows.length > 0
                  ? serviceRows.map((row) => (
                      <div key={row.breed} className="flex items-center justify-between gap-4 rounded-2xl bg-paper p-4">
                        <span className="text-sm font-semibold text-ink">{row.breed}</span>
                        <span className="whitespace-nowrap text-sm font-semibold text-mint-dark">{formatRub(row.price)}</span>
                      </div>
                    ))
                  : (
                      <p className="rounded-2xl bg-paper p-4 text-sm leading-6 text-muted">
                        {matchedService?.description ?? "Стоимость и формат процедуры зависят от питомца. Уточните детали при записи."}
                      </p>
                    )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container grid gap-6 lg:grid-cols-3">
          <section className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <ShieldCheck className="text-mint-dark" size={22} aria-hidden />
              <h2 className="text-2xl font-semibold text-ink">Почему выбирают нас</h2>
            </div>
            <div className="space-y-3 text-sm leading-6 text-muted">
              <p>Бережный подход без спешки, девушки-мастера, профессиональная косметика и понятная стоимость до начала процедуры.</p>
              <p>Студия находится рядом с МЦД Гражданская, удобно добраться от м. Аэропорт, Динамо и Петровский парк.</p>
            </div>
          </section>
          <FaqBlock items={faqItems} />
          <RelatedLinks currentSlug={page.slug} type={type} />
        </div>
      </section>
    </>
  );
}
