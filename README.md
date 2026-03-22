# IMPXFIT

Корпоративный многоязычный сайт агро-B2B компании IMPXFIT на `Next.js App Router`, `TypeScript` и `Tailwind CSS`.

## Стек

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- App Router + SSG-маршруты
- SEO metadata, `robots.txt`, `sitemap.xml`

## Команды

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

Локальный запуск по умолчанию:

```bash
http://127.0.0.1:3000
```

## Структура проекта

```text
src/
  app/
    [locale]/
      about/
      catalog/
      contacts/
      news/
    api/contact/
    robots.ts
    sitemap.ts
  components/
    layout/
    sections/
    ui/
  data/
    catalog.ts
    news.ts
    site.ts
  lib/
    i18n.ts
    metadata.ts
    utils.ts
  types/
    content.ts
```

## Где менять контент

- Общие тексты сайта, навигацию, hero-блоки, контакты, футер:
  `src/data/site.ts`
- Категории, продуктовые страницы и карточки направлений:
  `src/data/catalog.ts`
- Новости, листинг и детальные страницы:
  `src/data/news.ts`

## Где менять локали

Локали и базовые i18n-хелперы:

- `src/lib/i18n.ts`

Поддерживаются:

- `ru`
- `en`
- `kk`

## Где менять SEO

- Общая metadata-логика:
  `src/lib/metadata.ts`
- Статические SEO-маршруты:
  `src/app/robots.ts`
  `src/app/sitemap.ts`
- Page-level metadata:
  в файлах `page.tsx` внутри `src/app/[locale]/...`

## Контактная форма

- UI формы:
  `src/components/sections/contact-form.tsx`
- API endpoint:
  `src/app/api/contact/route.ts`

Сейчас endpoint валидирует входные данные и возвращает успешный ответ. Для production-интеграции можно подключить CRM, email-провайдер или внутренний API без изменения структуры страниц.

## Примечания

- Главная страница редиректит на `ru`.
- Все публичные страницы уже подготовлены как локализованные SSG-маршруты.
- `dev` и `build` переведены на `webpack` для стабильной работы в средах, где `Turbopack` ограничен sandbox-правилами.
