import type { Metadata } from "next";
import "./globals.css";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { YandexMetrika } from "@/components/YandexMetrika";

export const metadata: Metadata = {
  metadataBase: new URL("https://mestogroom.ru"),
  title: {
    default: "Груминг собак и кошек в Москве — Место",
    template: "%s | Место"
  },
  description:
    "Студия груминга Место в Москве: бережный уход для собак и кошек, стрижка, гигиена, экспресс-линька, онлайн-запись и понятный прайс по породам.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Груминг собак и кошек в Москве — Место",
    description:
      "Бережный груминг собак и кошек в Москве: стрижка, гигиена, экспресс-линька, онлайн-запись и прайс по породам.",
    url: "https://mestogroom.ru",
    siteName: "Место",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Груминг собак и кошек в Москве — Место",
    description:
      "Бережный груминг собак и кошек в Москве: стрижка, гигиена, экспресс-линька и понятный прайс по породам.",
    images: ["/images/og-image.webp"]
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
        <MobileBookingBar />
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
