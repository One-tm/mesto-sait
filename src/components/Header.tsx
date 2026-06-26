"use client";

import { Heart, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BookingButton } from "@/components/BookingButton";
import { contacts } from "@/data/contacts";
import { reachGoal } from "@/lib/metrika";

const nav = [
  { href: "/#services", label: "Услуги" },
  { href: "/#about", label: "О нас" },
  { href: "/#services", label: "Наши работы" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/#contacts", label: "Контакты" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl">
      <div className="container flex min-h-[86px] items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded-xl">
          <span className="logo-script block text-5xl font-semibold leading-none text-mint">Место</span>
          <span className="block pl-1 text-[11px] uppercase tracking-[0.32em] text-muted">студия груминга</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link key={`${item.href}-${item.label}`} href={item.href} className="text-sm font-semibold text-ink/80 hover:text-mint-dark">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={contacts.phoneHref} className="flex items-center gap-3 text-sm font-semibold text-ink" onClick={() => reachGoal("phone_click")}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-mint text-mint">
              <Phone size={17} aria-hidden />
            </span>
            <span>
              <span className="block">{contacts.phoneDisplay}</span>
              <span className="block text-xs font-normal text-muted">{contacts.workHours}</span>
            </span>
          </a>
          <BookingButton size="sm" />
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-paper-mint text-mint"
            aria-label="Telegram"
            onClick={() => reachGoal("contact_telegram")}
          >
            <Heart size={18} aria-hidden />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <BookingButton label="Записаться" size="sm" />
          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-mint-dark"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? <X size={21} aria-hidden /> : <Menu size={21} aria-hidden />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container grid gap-3 py-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl bg-paper px-4 py-3 font-semibold text-ink"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={contacts.phoneHref} className="rounded-2xl bg-paper px-4 py-3 font-semibold text-mint-dark" onClick={() => reachGoal("phone_click")}>
              {contacts.phoneDisplay}
            </a>
            <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-paper px-4 py-3" onClick={() => reachGoal("contact_telegram")}>
              Telegram
            </a>
            <a href={contacts.max} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-paper px-4 py-3" onClick={() => reachGoal("contact_max")}>
              MAX
            </a>
            <a href={contacts.yandexMaps} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-paper px-4 py-3" onClick={() => reachGoal("yandex_maps_click")}>
              Яндекс-Карты
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
