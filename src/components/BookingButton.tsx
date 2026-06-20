"use client";

import { CalendarCheck } from "lucide-react";
import { contacts } from "@/data/contacts";
import { Button } from "@/components/ui/Button";

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
  const telegramLabel = isCompact ? "Записаться TG" : "Записаться Telegram";
  const maxLabel = "MAX";
  const buttonClass = isCompact ? "px-3" : "";

  return (
    <div className={["inline-flex flex-wrap items-center gap-2", className].filter(Boolean).join(" ")}>
      <Button href={contacts.telegram} size={size} className={buttonClass} aria-label={`${label} через Telegram`}>
        <CalendarCheck size={18} aria-hidden />
        {telegramLabel}
      </Button>
      <Button href={contacts.max} size={size} className={buttonClass} aria-label={`${label} через MAX`}>
        <CalendarCheck size={18} aria-hidden />
        {maxLabel}
      </Button>
    </div>
  );
}
