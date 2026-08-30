const address = "Москва, ул. Академика Ильюшина, 16";
const googleMapsQuery = `Место, студия груминга, ${address}`;
const yandexMapsDirections = `https://yandex.ru/maps/?rtext=~${encodeURIComponent(address)}&rtt=auto`;

export const contacts = {
  name: "Место",
  type: "студия груминга",
  phoneDisplay: "+7 903 617-80-17",
  phoneHref: "tel:+79036178017",
  dikidi: "https://dikidi.net/2136048",
  telegram: "https://t.me/mestoadmin",
  telegramChannel: "https://t.me/mestogroom",
  max: "https://max.ru/u/f9LHodD0cOL67NPVHTyDzrzAniFXMFvE5h6GH-3TVDIwP82H-3Px_qPSaQ0",
  yandexMaps: "https://yandex.ru/maps/org/mesto/36411641472",
  yandexMapsDirections,
  googleMaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleMapsQuery)}`,
  googleMapsDirections: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
  googleMapsQuery,
  address,
  nearbyTransit: "Рядом с МЦД Гражданская, удобно добраться от м. Аэропорт, Динамо и Петровский парк",
  workHours: "Ежедневно 10:00–21:00",
  email: "hello@mestogroom.ru"
};
