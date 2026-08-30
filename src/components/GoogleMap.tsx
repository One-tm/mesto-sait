import Image from "next/image";
import { ExternalLink, Navigation } from "lucide-react";
import { contacts } from "@/data/contacts";
import { MetrikaGoalLink } from "@/components/MetrikaGoalLink";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY?.trim();

export function GoogleMap() {
  const embedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(contacts.googleMapsQuery)}&zoom=16`
    : null;

  return (
    <div>
      <div className="relative h-64 overflow-hidden rounded-2xl border border-line bg-white shadow-card lg:h-72">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={`Google Карта: ${contacts.address}`}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <MetrikaGoalLink
            href={contacts.googleMaps}
            goal="google_maps_click"
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <Image
              src="/images/map-preview.png"
              alt={`Карта проезда к студии «Место»: ${contacts.address}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-full bg-white/95 px-4 py-3 text-sm font-semibold text-mint-dark shadow-soft backdrop-blur">
              <ExternalLink size={17} aria-hidden />
              Открыть в Google Картах
            </span>
          </MetrikaGoalLink>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <MetrikaGoalLink
          href={contacts.googleMaps}
          goal="google_maps_click"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-mint-dark shadow-card"
        >
          <ExternalLink size={17} aria-hidden />
          Google Карты
        </MetrikaGoalLink>
        <MetrikaGoalLink
          href={contacts.googleMapsDirections}
          goal="google_maps_route_click"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-coral px-4 text-sm font-semibold text-white shadow-card"
        >
          <Navigation size={17} aria-hidden />
          Построить маршрут
        </MetrikaGoalLink>
      </div>
    </div>
  );
}
