import { ArrowRight, PawPrint } from "lucide-react";
import { dogPriceGroups, priorityBreedSections } from "@/data/price";
import { BookingButton } from "@/components/BookingButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const formatRub = (value: number) => `${value.toLocaleString("ru-RU")} ₽`;
const dogByBreed = new Map<string, (typeof dogPriceGroups)[number]>(dogPriceGroups.map((group) => [group.breed, group]));
type PrioritySection = (typeof priorityBreedSections)[number];

function getPreviewTarget(section: PrioritySection) {
  const featuredBreedName = "featuredBreedName" in section ? section.featuredBreedName : undefined;
  const breedNames = featuredBreedName ? [featuredBreedName] : section.breedNames;
  const groups = breedNames.map((breedName) => dogByBreed.get(breedName)).filter(Boolean);
  const ranked = groups
    .flatMap((group) => group!.services.map((service) => ({ group: group!, service })))
    .sort((a, b) => b.service.price - a.service.price);

  return ranked[0];
}

function displayBreedTitle(title: string) {
  return title === "Папильон" ? "Папийон" : title;
}

function displayBreedName(breed: string) {
  return breed === "Папийон (Папильон)" ? "Папийон" : breed;
}

function getSectionPriceHref(section: PrioritySection) {
  return `/price?section=${encodeURIComponent(section.title)}#all-dog-prices`;
}

export function PricePreview() {
  const previewSections = priorityBreedSections;

  return (
    <section id="price" className="section-pad bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Прайс"
          title="Быстро сориентируйтесь по стоимости"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {previewSections.map((section) => {
            const target = getPreviewTarget(section);
            const href = target ? getSectionPriceHref(section) : "/price";

            return (
            <a key={section.title} href={href} className="focus-ring rounded-3xl border border-line bg-paper p-5 transition hover:-translate-y-1 hover:bg-paper-mint hover:shadow-card">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{displayBreedTitle(section.title)}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {section.breedNames.length} {section.breedNames.length === 1 ? "вариант" : "варианта"}
                  </p>
                </div>
                <PawPrint size={20} className="text-coral" aria-hidden />
              </div>
              {target ? (
                <>
                  <p className="text-sm font-semibold text-ink">{displayBreedName(target.group.breed)}</p>
                  <p className="mt-2 text-2xl font-semibold text-mint-dark">{formatRub(target.service.price)}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{target.service.name}</p>
                </>
              ) : null}
            </a>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/price" variant="secondary">
            <span className="inline-flex items-center gap-2">
              Открыть весь прайс
              <ArrowRight size={18} aria-hidden />
            </span>
          </Button>
          <BookingButton label="Записаться на груминг" />
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-muted">
          Итоговая стоимость зависит от размера питомца, состояния шерсти, наличия колтунов и поведения во время
          процедуры. Точную стоимость мастер подскажет после осмотра.
        </p>
      </div>
    </section>
  );
}
