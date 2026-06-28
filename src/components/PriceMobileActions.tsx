import { Cat, Info, MapPin, Search } from "lucide-react";
import Link from "next/link";

const quickActions = [
  { href: "#price-search", label: "Найти породу", Icon: Search },
  { href: "#service-descriptions", label: "Описание услуг", Icon: Info },
  { href: "#cat-prices", label: "Кошки", Icon: Cat },
  { href: "#contacts", label: "Как добраться", Icon: MapPin }
];

export function PriceMobileActions() {
  return (
    <nav className="mt-6 grid grid-cols-2 gap-2 lg:hidden" aria-label="Быстрые действия на странице прайса">
      {quickActions.map(({ href, label, Icon }) => (
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
