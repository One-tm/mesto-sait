import { HelpCircle } from "lucide-react";
import { homeFaqItems } from "@/data/faq";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Faq() {
  return (
    <section className="section-pad bg-white" aria-labelledby="faq-title">
      <div className="container">
        <SectionTitle
          eyebrow="Вопросы"
          title="Что важно знать перед визитом"
          text="Собрали короткие ответы на вопросы, которые чаще всего задают перед первой записью."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {homeFaqItems.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-line bg-paper p-5 shadow-sm open:bg-paper-mint">
              <summary className="flex cursor-pointer list-none items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-mint-dark">
                  <HelpCircle size={18} aria-hidden />
                </span>
                <span className="text-lg font-semibold text-ink">{item.question}</span>
              </summary>
              <p className="mt-4 pl-14 text-sm leading-6 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
