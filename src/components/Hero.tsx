import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CalendarDays, Heart, PawPrint, ShieldCheck } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { Button } from "@/components/ui/Button";

const points = [
  { label: "Без стресса и спешки", Icon: Heart },
  { label: "Безопасные средства", Icon: ShieldCheck },
  { label: "Опытные мастера", Icon: BadgeCheck }
];

export function Hero() {
  return (
    <section className="overflow-hidden pb-10 pt-6 md:pb-14 md:pt-12">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.08] text-ink sm:text-6xl md:text-[72px]">
            Место, где дышат заботой
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75 md:text-xl">
            Делаем ваших питомцев счастливыми: бережный уход, профессиональный груминг
            и много любви.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingButton size="lg" />
            <Button href="/price" variant="secondary" size="lg">
              <PawPrint size={18} aria-hidden />
              Наши услуги
            </Button>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {points.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper-mint text-mint">
                  <Icon size={16} aria-hidden />
                </span>
                <span className="text-sm font-semibold leading-5 text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Heart className="absolute -left-10 top-16 hidden text-coral md:block" size={34} aria-hidden />
          <div className="absolute right-8 top-10 hidden h-16 w-16 rounded-full border-2 border-mint/30 md:block" />
          <div className="blob-frame relative overflow-hidden bg-paper-mint shadow-soft">
            <Image
              src="/images/hero-main.webp"
              alt="Фото грумера с питомцами"
              width={1600}
              height={1200}
              priority
              className="h-full min-h-[360px] w-full object-cover object-center sm:min-h-[480px] lg:min-h-[560px]"
            />
          </div>
          <Link
            href="/#contacts"
            className="absolute bottom-5 left-5 hidden rounded-3xl bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:block"
          >
            <span className="flex items-center gap-2 text-sm text-muted">
              <CalendarDays size={15} aria-hidden />
              Ежедневно
            </span>
            <span className="block text-lg font-semibold text-mint-dark">10:00–21:00</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
