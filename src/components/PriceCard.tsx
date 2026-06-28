import { Clock, PawPrint } from "lucide-react";
import type { PriceItem } from "@/data/price";
import { formatPrice } from "@/lib/formatPrice";
import { BookingButton } from "@/components/BookingButton";

export function PriceCard({ item }: { item: PriceItem }) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-line bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-paper-mint px-3 py-1 text-sm font-semibold text-mint-dark">
          {item.petType === "dog" ? "Собака" : "Кошка"}
        </span>
        <PawPrint size={18} className="text-coral" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-ink">{item.breed}</h3>
      <p className="mt-2 leading-7 text-muted">{item.serviceName}</p>
      <p className="mt-4 text-2xl font-semibold text-mint-dark">
        {formatPrice(item.priceFrom, item.priceTo)}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted">
        <span className="rounded-full bg-paper px-3 py-1">{item.serviceCategory}</span>
        {item.durationMinutes ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-paper px-3 py-1">
            <Clock size={14} aria-hidden />
            до {item.durationMinutes} мин
          </span>
        ) : null}
        {item.coatType ? <span className="rounded-full bg-paper px-3 py-1">{item.coatType}</span> : null}
      </div>
      {item.notes ? <p className="mt-4 text-sm leading-6 text-muted">{item.notes}</p> : null}
      <div className="mt-auto hidden pt-6 sm:block">
        <BookingButton label="Записаться" size="sm" className="w-full" />
      </div>
    </article>
  );
}
