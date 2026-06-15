import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="about" className="section-pad pb-6">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.72fr_0.9fr]">
        <div className="overflow-hidden rounded-[40px] bg-white shadow-card">
          <Image
            src="/images/about-studio.webp"
            alt="Уютная зона груминг-студии Место"
            width={1200}
            height={1000}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
        <div className="relative max-w-xl">
          <Heart className="absolute -right-2 -top-8 text-mint/45" size={30} aria-hidden />
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">О нас</h2>
          <p className="mt-5 leading-8 text-ink/75">
            «Место» — это не просто студия груминга. Это теплое пространство, где вашей
            кошке или собаке будет спокойно и комфортно.
          </p>
          <p className="mt-4 leading-8 text-ink/75">
            Мы работаем с любовью, терпением и вниманием к деталям.
          </p>
          <div className="mt-8">
            <Button href="/#contacts" variant="secondary">
              Подробнее о нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
