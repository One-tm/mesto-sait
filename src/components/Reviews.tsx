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
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-mint-dark transition hover:border-mint hover:bg-paper-mint"
          >
            <ExternalLink size={18} aria-hidden />
            Посмотреть нас на Яндекс-Картах
          </MetrikaGoalLink>
        </div>
      </div>
    </section>
  );
}
