import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PriceList } from "@/components/PriceList";

export const metadata: Metadata = {
  title: "Прайс на груминг собак по породам — Место",
  description:
    "Прайс студии груминга Место: стоимость услуг по породам собак, кошкам, дополнительные процедуры, описание комплексов и примечания.",
  alternates: {
    canonical: "/price"
  }
};

export default function PricePage() {
  return (
    <>
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
