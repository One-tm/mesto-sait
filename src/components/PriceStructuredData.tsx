import { JsonLd } from "@/components/JsonLd";
import { contacts } from "@/data/contacts";

const siteUrl = "https://mestogroom.ru";

export function PriceStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/price/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Прайс",
            item: `${siteUrl}/price`
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/price/#price-service`,
        name: "Прайс на груминг собак по породам",
        description:
          "Стоимость комплексного груминга, гигиены, мытья и дополнительных процедур для собак разных пород и кошек.",
        serviceType: "Прайс на груминг собак и кошек",
        provider: {
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#business`,
          name: `${contacts.name} — ${contacts.type}`,
          telephone: contacts.phoneDisplay,
          url: siteUrl
        },
        areaServed: {
          "@type": "City",
          name: "Москва"
        }
      }
    ]
  };

  return <JsonLd id="price-structured-data" data={data} />;
}
