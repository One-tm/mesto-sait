import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { breedLandingPages } from "@/data/seoPages";

type BreedPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return breedLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: BreedPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = breedLandingPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  const title = `${page.title} в Москве - цена и уход | Место`;
  const description = `${page.title} в Москве: бережный уход, особенности процедуры, ответы на вопросы и актуальный прайс по породе в студии Место.`;
  const url = `/breeds/${page.slug}`;

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

export default async function BreedPage({ params }: BreedPageProps) {
  const { slug } = await params;
  const page = breedLandingPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <SeoLandingPage type="breed" page={page} />
      </main>
      <Footer />
    </>
  );
}
