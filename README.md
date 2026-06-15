# Место — сайт груминг-студии

Next.js App Router лендинг для `mestogroom.ru`: главная, прайс по породам, контакты, онлайн-запись через Yclients и заготовка импорта прайса из Excel.

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:3000`.

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
