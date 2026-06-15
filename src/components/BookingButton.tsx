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
  const openWidget = () => {
    const win = window as Window & {
      yclients?: { open?: () => void };
      Yclients?: { open?: () => void };
    };

    if (win.yclients?.open) {
      win.yclients.open();
      return;
    }

    if (win.Yclients?.open) {
      win.Yclients.open();
      return;
    }

    window.open(contacts.telegram, "_blank", "noopener,noreferrer");
  };

  return (
    <Button type="button" size={size} onClick={openWidget} className={className}>
      <CalendarCheck size={18} aria-hidden />
      {label}
    </Button>
  );
}
