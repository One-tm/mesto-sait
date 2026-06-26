import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { serviceLandingPages } from "@/data/seoPages";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = serviceLandingPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  const title = `${page.title} в Москве - цена и запись | Место`;
  const description = `${page.title} в Москве: что входит в услугу, кому подходит, ответы на вопросы и переход к актуальному прайсу студии Место.`;
  const url = `/services/${page.slug}`;

  return {
    title: {
      absolute: title
    },
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url: `https://mestogroom.ru${url}`,
      type: "website",
      images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.webp"]
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = serviceLandingPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <SeoLandingPage type="service" page={page} />
      </main>
      <Footer />
    </>
  );
}
