import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ContactButtonProps = {
  href: string;
  label: string;
  Icon: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
};

export function ContactButton({ href, label, Icon, variant = "secondary" }: ContactButtonProps) {
  return (
    <Button href={href} variant={variant} className="w-full sm:w-auto">
      <Icon size={18} aria-hidden />
      {label}
    </Button>
  );
}
