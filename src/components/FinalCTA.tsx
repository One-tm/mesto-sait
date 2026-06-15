import { MessageCircle } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { Button } from "@/components/ui/Button";
import { contacts } from "@/data/contacts";

export function FinalCTA() {
  return (
    <section className="pb-16">
      <div className="container rounded-[32px] bg-paper-mint p-8 md:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-mint-dark">
              Онлайн-запись
            </p>
            <h2 className="text-3xl font-semibold text-ink md:text-5xl">
              Приходите знакомиться — будем рады вам и вашему питомцу!
            </h2>
            <p className="mt-4 text-lg text-muted">Это быстро и удобно.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <BookingButton size="lg" />
            <Button href={contacts.telegram} variant="secondary" size="lg">
              <MessageCircle size={18} aria-hidden />
              Написать в Telegram
            </Button>
            <Button href={contacts.max} variant="secondary" size="lg">
              <MessageCircle size={18} aria-hidden />
              Написать в MAX
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
