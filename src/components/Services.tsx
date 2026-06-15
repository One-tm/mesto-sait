import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container">
        <div className="mb-7 flex items-end justify-center gap-4 sm:justify-between">
          <h2 className="text-center text-3xl font-semibold text-ink md:text-4xl">Наши услуги ♡</h2>
          <a href="/price" className="hidden text-sm font-semibold text-mint-dark hover:text-coral sm:inline-flex">
            Все услуги →
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
