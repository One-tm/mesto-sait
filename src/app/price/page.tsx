import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PriceList } from "@/components/PriceList";
import { PriceStructuredData } from "@/components/PriceStructuredData";

export const metadata: Metadata = {
  title: {
    absolute: "Прайс на груминг собак по породам в Москве — Место"
  },
  description:
    "Прайс на груминг собак по породам в Москве: комплекс со стрижкой, гигиена, мытье, экспресс-линька, услуги для кошек и дополнительные процедуры.",
  alternates: {
    canonical: "/price"
  },
  openGraph: {
    title: "Прайс на груминг собак по породам в Москве — Место",
    description:
      "Стоимость груминга собак и кошек: комплексы по породам, гигиена, мытье, экспресс-линька и дополнительные процедуры.",
    url: "https://mestogroom.ru/price",
    type: "website",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Прайс на груминг собак по породам в Москве — Место",
    description: "Стоимость груминга собак и кошек по породам, услугам и дополнительным процедурам.",
    images: ["/images/og-image.webp"]
  }
};

export default function PricePage() {
  return (
    <>
      <PriceStructuredData />
      <Header />
      <main className="section-pad">
        <div className="container">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-mint-dark">
              Услуги и прайс
            </p>
            <h1 className="text-4xl font-semibold text-ink md:text-6xl">
              Стоимость груминга по породам
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Выберите породу и услугу: комплекс со стрижкой, экспресс-линьку, гигиену,
              мытье и сушку. Породы с высоким спросом вынесены в начало, а полный каталог
              открывается через поиск с подсказками.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              В прайсе собраны цены на груминг собак по породам в Москве, услуги для кошек и дополнительные процедуры.
              Итоговая стоимость зависит от размера питомца, состояния шерсти, колтунов и поведения во время ухода.
            </p>
          </div>
          <Suspense fallback={<div className="mt-10 rounded-3xl border border-line bg-white p-8 text-muted">Загружаем прайс...</div>}>
            <PriceList />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
