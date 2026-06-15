import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description?: string;
  price?: string;
  Icon: LucideIcon;
  image: string;
};

export function ServiceCard({ title, Icon, image }: ServiceCardProps) {
  return (
    <article className="soft-card grid min-h-[164px] grid-cols-[46%_1fr] overflow-hidden rounded-[18px] transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative min-h-[164px] bg-paper-mint">
        <Image src={image} alt="" fill sizes="(max-width: 768px) 45vw, 220px" className="object-cover" />
      </div>
      <div className="relative flex flex-col justify-center p-5">
        <div className="absolute -left-5 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-mint text-white shadow-card">
          <Icon size={19} aria-hidden />
        </div>
        <h3 className="pl-2 text-lg font-semibold leading-6 text-ink">{title}</h3>
      </div>
    </article>
  );
}
