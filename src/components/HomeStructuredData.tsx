import { JsonLd } from "@/components/JsonLd";
import { contacts } from "@/data/contacts";
import { homeFaqItems } from "@/data/faq";

const siteUrl = "https://mestogroom.ru";

export function HomeStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: `${contacts.name} — ${contacts.type}`,
        url: siteUrl,
        image: `${siteUrl}/images/og-image.webp`,
        logo: `${siteUrl}/icon.png`,
        telephone: contacts.phoneDisplay,
        email: contacts.email,
        priceRange: "₽₽",
        description:
          "Студия груминга для собак и кошек в Москве: комплексный уход, стрижка, гигиена, экспресс-линька и бережная работа с питомцами.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "RU",
          addressLocality: "Москва",
          streetAddress: "ул. Академика Ильюшина, 16"
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "10:00",
            closes: "21:00"
          }
        ],
        sameAs: [contacts.telegramChannel, contacts.yandexMaps]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${contacts.name} — ${contacts.type}`,
        inLanguage: "ru-RU",
        publisher: {
          "@id": `${siteUrl}/#business`
        }
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#grooming-service`,
        name: "Груминг собак и кошек",
        serviceType: "Груминг, стрижка, гигиена и уход за шерстью",
        areaServed: {
          "@type": "City",
          name: "Москва"
        },
        provider: {
          "@id": `${siteUrl}/#business`
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: homeFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };

  return <JsonLd id="home-structured-data" data={data} />;
}
