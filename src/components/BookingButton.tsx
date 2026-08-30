"use client";

import { CalendarCheck } from "lucide-react";
import { contacts } from "@/data/contacts";
import { Button } from "@/components/ui/Button";
import { reachGoal } from "@/lib/metrika";

type BookingButtonProps = {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function BookingButton({
  label = "Записаться онлайн",
  className,
  size = "md"
}: BookingButtonProps) {
  const isCompact = size === "sm";
  const telegramLabel = isCompact ? "Написать" : "Написать в Telegram";
  const buttonClass = isCompact ? "px-3" : "";

  return (
    <div className={["inline-flex flex-wrap items-center gap-2", className].filter(Boolean).join(" ")}>
      <Button
        href={contacts.dikidi}
        size={size}
        className={buttonClass}
        aria-label={`${label} через DIKIDI`}
        onClick={() => reachGoal("booking_dikidi")}
      >
        <CalendarCheck size={18} aria-hidden />
        {label}
      </Button>
      <Button
        href={contacts.telegram}
        variant="secondary"
        size={size}
        className={buttonClass}
        aria-label="Написать администратору в Telegram"
        onClick={() => reachGoal("booking_telegram")}
      >
        <CalendarCheck size={18} aria-hidden />
        {telegramLabel}
      </Button>
    </div>
  );
}
