import type { Metadata } from "next";
import "./globals.css";
import { YandexMetrika } from "@/components/YandexMetrika";

export const metadata: Metadata = {
  metadataBase: new URL("https://mestogroom.ru"),
  title: {
    default: "Место — студия груминга для собак и кошек в Москве",
    template: "%s | Место"
  },
  description:
    "Бережный груминг для собак и кошек в Москве. Забота, честные цены, онлайн-запись, прайс по породам и дружелюбная атмосфера.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Место — студия груминга для собак и кошек в Москве",
    description:
      "Бережный груминг для собак и кошек в Москве. Забота, честные цены, онлайн-запись и прайс по породам.",
    url: "https://mestogroom.ru",
    siteName: "Место",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <YandexMetrika />
        {children}
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/109840408"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
