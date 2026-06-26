import type { MetadataRoute } from "next";
import { breedLandingPages, serviceLandingPages } from "@/data/seoPages";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mestogroom.ru",
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://mestogroom.ru/price",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...breedLandingPages.map((page) => ({
      url: `https://mestogroom.ru/breeds/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    ...serviceLandingPages.map((page) => ({
      url: `https://mestogroom.ru/services/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];
}
