import { PawPrint, Star } from "lucide-react";

type ReviewCardProps = {
  name: string;
  text: string;
  rating: number;
};

export function ReviewCard({ name, text, rating }: ReviewCardProps) {
  return (
    <article className="soft-card rounded-[18px] p-6 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-paper-mint text-mint">
        <PawPrint size={24} aria-hidden />
      </div>
      <p className="font-semibold text-ink">{name}</p>
      <div className="mb-4 mt-3 flex justify-center gap-1 text-coral" aria-label={`${rating} из 5`}>
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={15} fill="currentColor" aria-hidden />
        ))}
      </div>
      <p className="text-sm leading-6 text-muted">«{text}»</p>
    </article>
  );
}
