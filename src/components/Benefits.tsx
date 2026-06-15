import { benefits } from "@/data/benefits";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Benefits() {
  return (
    <section className="py-8">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map(({ title, text, Icon }) => (
            <article key={title} className="soft-card flex gap-5 rounded-[18px] p-5 md:p-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-paper-mint text-mint">
                <Icon size={30} aria-hidden />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
