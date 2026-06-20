import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeStructuredData } from "@/components/HomeStructuredData";
import { Hero } from "@/components/Hero";
import { PricePreview } from "@/components/PricePreview";
import { PromoOffers } from "@/components/PromoOffers";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TelegramChannel } from "@/components/TelegramChannel";

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <PromoOffers />
        <Services />
        <PricePreview />
        <Faq />
        <About />
        <Reviews />
        <TelegramChannel />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
