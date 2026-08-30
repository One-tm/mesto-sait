import Image from "next/image";
import { ExternalLink, Navigation } from "lucide-react";
import { MetrikaGoalLink } from "@/components/MetrikaGoalLink";
import { contacts } from "@/data/contacts";

export function LocationMap() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-white/80 bg-white p-2 shadow-card">
      <MetrikaGoalLink
        href={contacts.yandexMaps}
        goal="yandex_maps_click"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-56 overflow-hidden rounded-[18px] bg-paper lg:h-60"
        aria-label={`Открыть студию «Место» в Яндекс Картах: ${contacts.address}`}
      >
        <Image
          src="/images/map-preview.webp"
          alt={`Карта проезда к студии «Место»: ${contacts.address}`}
          fill
          sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.025]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur">
          Яндекс Карты
        </span>
        <span className="absolute inset-x-3 bottom-3 flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/95 px-4 text-sm font-semibold text-mint-dark shadow-soft backdrop-blur transition group-hover:bg-white">
          <ExternalLink size={17} aria-hidden />
          Открыть карту
        </span>
      </MetrikaGoalLink>

      <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <MetrikaGoalLink
          href={contacts.yandexMapsDirections}
          goal="yandex_maps_route_click"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-coral px-4 text-center text-sm font-semibold text-white transition hover:bg-[#f35f4b]"
        >
          <Navigation size={17} aria-hidden />
          Маршрут
        </MetrikaGoalLink>
        <MetrikaGoalLink
          href={contacts.googleMaps}
          goal="google_maps_click"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-white px-4 text-center text-sm font-semibold text-mint-dark transition hover:border-mint hover:bg-paper-mint"
        >
          <ExternalLink size={17} aria-hidden />
          Google Карты
        </MetrikaGoalLink>
      </div>
    </div>
  );
}
