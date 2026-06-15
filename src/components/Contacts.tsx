import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { ContactButton } from "@/components/ContactButton";
import { contacts } from "@/data/contacts";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contacts() {
  return (
    <section id="contacts" className="section-pad hidden">
      <div className="container">
        <SectionTitle
          eyebrow="Контакты"
          title="Мы рядом — приходите знакомиться"
          text="Будем рады вам и вашему питомцу."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <ContactButton href={contacts.phoneHref} label={contacts.phoneDisplay} Icon={Phone} />
            <ContactButton href={contacts.telegram} label="Написать в Telegram" Icon={MessageCircle} />
            <ContactButton href={contacts.max} label="Написать в MAX" Icon={MessageCircle} />
            <ContactButton href={contacts.yandexMaps} label="Мы в Яндекс-Картах" Icon={MapPin} />
          </div>
          <div className="rounded-[28px] border border-line bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mint-dark">Адрес</p>
            <h3 className="mt-3 text-2xl font-semibold text-ink">{contacts.address}</h3>
            <p className="mt-3 text-muted">{contacts.workHours}</p>
            <a
              href={contacts.yandexMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-5 font-semibold text-white"
            >
              <Navigation size={18} aria-hidden />
              Построить маршрут
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
