import { ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";
import { contacts } from "@/data/contacts";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

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
        <div className="mt-8 text-center">
          <Button href={contacts.yandexMaps} variant="secondary">
            <ExternalLink size={18} aria-hidden />
            Посмотреть нас на Яндекс-Картах
          </Button>
        </div>
      </div>
    </section>
  );
}
