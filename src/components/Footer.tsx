import Link from "next/link";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { contacts } from "@/data/contacts";
import { BookingButton } from "@/components/BookingButton";

const socialLinks = [
  { href: contacts.telegram, label: "Telegram", icon: "telegram" as const },
  { href: contacts.max, label: "MAX", icon: "max" as const },
  { href: contacts.yandexMaps, label: "Яндекс.Карты", icon: "yandex-maps" as const }
];

export function Footer() {
  return (
    <footer id="contacts" className="footer-wave mt-16 bg-paper-mint py-12 text-ink">
      <div className="container grid gap-8 md:grid-cols-[1fr_1.1fr_1fr_0.8fr]">
        <div>
          <Link href="/" className="logo-script text-5xl font-semibold leading-none text-mint">Место</Link>
          <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-muted">студия груминга</p>
          <p className="mt-8 max-w-48 leading-7 text-mint-dark">
            С любовью к вашим питомцам <Heart className="inline text-coral" size={16} fill="currentColor" />
          </p>
        </div>
        <div className="grid content-start gap-4 text-sm text-mint-dark">
          <a href={contacts.phoneHref} className="flex items-center gap-3">
            <Phone size={18} className="text-mint" aria-hidden />
            {contacts.phoneDisplay}
          </a>
          <a href={`mailto:${contacts.email}`} className="flex items-center gap-3">
            <Mail size={18} className="text-mint" aria-hidden />
            {contacts.email}
          </a>
          <a href={contacts.yandexMaps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
            <MapPin size={18} className="text-mint" aria-hidden />
            {contacts.address}
          </a>
          <div className="mt-2 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-mint text-white shadow-card transition hover:-translate-y-0.5 hover:bg-mint-dark"
                aria-label={item.label}
                title={item.label}
              >
                <BrandIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-ink">Мы рядом</h3>
          <a
            href={contacts.yandexMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block overflow-hidden rounded-2xl border border-line bg-white shadow-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/map-preview.png"
              alt="Карта проезда"
              className="h-28 w-full scale-[1.06] object-cover"
            />
          </a>
        </div>
        <div className="relative">
          <h3 className="font-semibold text-ink">Часы работы</h3>
          <p className="mt-5 leading-7 text-mint-dark">{contacts.workHours}</p>
          <div className="mt-7">
            <BookingButton />
          </div>
          <Heart className="absolute bottom-0 right-4 hidden text-coral md:block" size={34} aria-hidden />
        </div>
      </div>
      <div className="container mt-10 flex flex-col gap-3 border-t border-mint/15 pt-6 text-xs text-muted sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Место — студия груминга</span>
        <Link href="/privacy">Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}
