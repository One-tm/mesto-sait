import { ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";
import { contacts } from "@/data/contacts";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MetrikaGoalLink } from "@/components/MetrikaGoalLink";

export function Reviews() {
  return (
    <section id="reviews" className="section-pad pt-6">
      <div className="container">
        <SectionTitle
          title="Что говорят наши клиенты ♡"
          text="Теплые слова помогают нам становиться еще внимательнее."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-2xl flex-col items-center gap-4 rounded-[28px] border border-mint/25 bg-paper-mint p-5 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint-dark">Рейтинг на Яндекс-Картах</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Посмотрите отзывы гостей и оценку студии в карточке организации.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-3">
              <iframe
                src="https://yandex.ru/sprav/widget/rating-badge/36411641472?type=rating"
                width="150"
                height="50"
                frameBorder="0"
                loading="lazy"
                title="Рейтинг Место на Яндекс Картах"
                className="rounded-2xl"
              />
              <MetrikaGoalLink
                href={contacts.yandexMaps}
                goal="yandex_maps_click"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-mint bg-white px-5 text-sm font-semibold text-mint-dark transition hover:bg-white/80"
              >
                <ExternalLink size={18} aria-hidden />
                Открыть Яндекс-Карты
              </MetrikaGoalLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
