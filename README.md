# Место — сайт груминг-студии

Next.js App Router лендинг для `mestogroom.ru`: главная, прайс по породам, контакты, онлайн-запись через DIKIDI и заготовка импорта прайса из Excel.

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:3000`.

## Аналитика

На сайте подключены Google Analytics 4 и Яндекс Метрика. Идентификатор потока GA4:
`G-0WT691QL9T`. Просмотры страниц и улучшенная статистика собираются автоматически;
бизнес-события записей, звонков, переходов в мессенджеры и на карты отправляются в обе
системы из общего обработчика.

При необходимости идентификатор GA4 можно переопределить при сборке:

```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

После публикации проверьте поступление данных в отчёте GA4 «В реальном времени».

## SEO и AI-поиск

Сайт отдает `sitemap.xml`, `robots.txt`, JSON-LD для локальной компании, услуг, FAQ и
хлебных крошек, а также краткую машинно-читаемую сводку `/llms.txt`. Для AI-функций
Google не требуется отдельная специальная разметка: важны доступность страниц для
индексации, полезный текст и корректные структурированные данные.

## Google Карты

В футере сайта подключена интерактивная карта Google Maps, а также ссылки на карточку
студии и построение маршрута. Чтобы включить интерактивную карту:

1. В Google Cloud Console включите **Maps Embed API** для проекта и создайте API-ключ.
2. Ограничьте ключ только API `Maps Embed API` и сайтами
   `https://mestogroom.ru/*`, `https://www.mestogroom.ru/*` и
   `http://localhost:*/*` для локальной разработки.
3. Скопируйте `.env.example` в `.env.local` и заполните значение:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY=ваш_ключ
```

После изменения переменной перезапустите dev-сервер или пересоберите сайт. Без ключа
вместо iframe показывается превью со ссылкой на Google Карты.

## Сборка и production-запуск

```bash
npm run build
npm run start
```

## PM2

```bash
pm2 start npm --name mestogroom -- start
pm2 save
```

## Рекомендуемый VPS

- Ubuntu 24.04 LTS
- 2 vCPU
- 4 GB RAM
- 50 GB NVMe
- Node.js 20 или 22 LTS
- Nginx
- PM2
- SSL Let's Encrypt

## Nginx пример

```nginx
server {
  server_name mestogroom.ru www.mestogroom.ru;

  gzip on;
  gzip_types text/plain text/css application/json application/javascript image/svg+xml;

  location /_next/static/ {
    proxy_pass http://127.0.0.1:3000;
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

SSL:

```bash
sudo certbot --nginx -d mestogroom.ru -d www.mestogroom.ru
```

## Обновление прайса

На первом этапе сайт использует демо-данные из `src/data/price.ts`.

Будущий сценарий:

```bash
mkdir -p data
# положить Excel-файл в data/price.xlsx
npm run import:price
npm run build
pm2 restart mestogroom
```

Скрипт `scripts/import-price.ts` уже создает `public/data/price.json` из демо-данных, если Excel-файла пока нет.
