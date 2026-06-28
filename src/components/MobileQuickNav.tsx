import { MapPin, MessageCircle, PawPrint, Tags } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "/price", label: "Прайс", Icon: PawPrint },
  { href: "/#promos", label: "Акции", Icon: Tags },
  { href: "/#reviews", label: "Отзывы", Icon: MessageCircle },
  { href: "/#contacts", label: "Как добраться", Icon: MapPin }
];

export function MobileQuickNav() {
  return (
    <nav className="container -mt-2 grid grid-cols-2 gap-2 pb-4 lg:hidden" aria-label="Быстрые разделы">
      {quickLinks.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          className="focus-ring flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-line bg-white px-3 text-sm font-semibold text-mint-dark shadow-card"
        >
          <Icon size={17} aria-hidden />
          {label}
        </Link>
      ))}
    </nav>
  );
}
