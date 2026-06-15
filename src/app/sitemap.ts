import type { MetadataRoute } from "next";

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
    }
  ];
}
