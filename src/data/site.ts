import type { Locale } from "@/types/content";
import { withLocalizedBrand } from "@/lib/branding";

const siteContent = {
  ru: {
    organization: {
      name: "IMPXFIT",
      description:
        "Импорт и технологическое сопровождение кормовых решений для животноводства, птицеводства, свиноводства и ветеринарного направления.",
    },
    languageNames: {
      ru: "RU",
      en: "EN",
      kk: "KZ",
    },
    navigation: {
      homeLabel: "Главная",
      catalogLabel: "Каталог",
      contactAction: "Связаться",
      menuLabel: "Меню",
      closeLabel: "Закрыть",
      links: [
        { label: "О компании", href: "/about" },
        { label: "Каталог", href: "/catalog" },
        { label: "Новости", href: "/news" },
        { label: "Контакты", href: "/contacts" },
      ],
    },
    common: {
      homeLabel: "Главная",
      catalogDetails: "Открыть направление",
      productDetails: "Подробнее о решении",
      readMore: "Читать материал",
      allNews: "Все новости",
      latestNews: "Последние материалы",
      benefitsTitle: "Ключевые преимущества",
      specsTitle: "Рабочие параметры",
      solutionsTitle: "Линейка решений",
      relatedCategoriesTitle: "Смежные направления",
      requestTitle: "Запросить подбор",
      goToContacts: "Перейти к контактам",
      backToNews: "Вернуться к списку новостей",
      submitLabel: "Отправить запрос",
      pendingLabel: "Отправка...",
      successMessage:
        "Спасибо. Запрос зафиксирован, команда IMPXFIT свяжется с вами в рабочее время.",
      errorMessage:
        "Не удалось отправить форму. Проверьте поля и повторите попытку.",
    },
    footer: {
      description:
        "IMPXFIT объединяет поставки кормовых ингредиентов, ветеринарных решений и технологическую поддержку предприятий агро-B2B.",
      catalogTitle: "Направления",
      companyTitle: "Компания",
      contactTitle: "Контакты",
      rights: "IMPXFIT. Все права защищены.",
      links: [
        { label: "О компании", href: "/about" },
        { label: "Каталог", href: "/catalog" },
        { label: "Новости", href: "/news" },
        { label: "Контакты", href: "/contacts" },
      ],
      offices: [
        {
          city: "Москва",
          address:
            "123242, г. Москва\nвн.тер.г. муниципальный округ Пресненский\nпер. Капранова, д. 3, стр. 2",
          phone: "+7 (495) 640-67-70",
          email: "urr@impexfeed.com",
          registration: "ИНН 7701847486 / КПП 770301001",
        },
      ],
    },
    home: {
      seoTitle: "IMPXFIT | Кормовые решения и технологическое сопровождение",
      seoDescription:
        "IMPXFIT поставляет кормовые добавки, ветеринарные решения, сырьевые компоненты и технологическую экспертизу для агробизнеса.",
      hero: {
        eyebrow: "Agro B2B solutions",
        title: "Кормовые решения и технологическое сопровождение для агро-B2B",
        description:
          "IMPXFIT работает с комбикормовыми заводами, производственными площадками и агрохолдингами, соединяя сырьевые компоненты, прикладную технологию и сопровождение результата на ферме.",
        primaryAction: { label: "Перейти в каталог", href: "/catalog" },
        secondaryAction: { label: "Обсудить задачу", href: "/contacts" },
        highlights: [
          "Кормопроизводство и рецептурная поддержка",
          "Решения для КРС, птицы и свиноводства",
          "Ветеринарное направление и биобезопасность",
        ],
        stats: [
          { value: "7", label: "отраслевых направлений" },
          { value: "14", label: "готовых продуктовых и сервисных позиций" },
          { value: "48 ч", label: "на подготовку первичного технического ответа" },
        ],
      },
      featured: {
        eyebrow: "Фокусные решения",
        title: "Приоритетные продуктовые линии IMPXFIT",
        description:
          "Вывели на первый экран четыре типовые B2B-позиции, по которым чаще всего запрашивают внедрение, технологический аудит и сопровождение.",
      },
      categories: {
        eyebrow: "Каталог направлений",
        title: "Продукты и сервисы по логике реального агропроизводства",
        description:
          "Структура каталога повторяет рабочую модель отрасли: от комбикормового производства и видоспецифичных программ кормления до сырьевых решений и техподдержки.",
      },
      expertise: {
        eyebrow: "Экспертиза",
        title: "Не просто поставка, а полноценная производственная связка",
        description:
          "Каждый проект рассматриваем через экономику рецепта, технологию цеха, ветеринарные риски и конечную продуктивность стада или поголовья.",
        items: [
          {
            title: "Подбор под конкретную производственную задачу",
            text: "Формируем решение с учетом сырьевой базы, фазы откорма, статуса стада и ограничений по себестоимости.",
          },
          {
            title: "Технологическая поддержка внедрения",
            text: "Сопровождаем тесты, корректируем дозировки, описываем точки контроля на комбикормовом заводе и на ферме.",
          },
          {
            title: "Отчетность и обратная связь для менеджмента",
            text: "Сводим производственные показатели, технологические наблюдения и рекомендации в понятный B2B-формат.",
          },
        ],
      },
      numbers: {
        eyebrow: "IMPXFIT в цифрах",
        title: "Структура, удобная для масштабирования в холдингах и региональных кластерах",
        description:
          "Сайт и сама продуктовая логика рассчитаны на дальнейшее расширение: новые категории, новые продуктовые позиции, интеграция CRM, CMS и внутренних каталогов.",
        stats: [
          { value: "3", label: "рабочих языка сайта" },
          { value: "100%", label: "контентной замены через data-файлы" },
          { value: "SEO", label: "готовая мета-структура и индексация" },
        ],
      },
      news: {
        eyebrow: "Новости компании",
        title: "Отраслевые события, запуски и практические кейсы",
        description:
          "Лента новостей нужна не для формальности, а для подтверждения экспертизы: производственные аудиты, семинары, сырьевые обзоры и сопровождение клиентов.",
      },
      cta: {
        eyebrow: "Свяжитесь с нами",
        title: "Подберем решение под сырье, вид животных и производственные KPI",
        description:
          "Заполните форму или свяжитесь с офисом IMPXFIT, чтобы обсудить поставку, внедрение или аудит действующей кормовой программы.",
        primaryAction: { label: "Отправить запрос", href: "/contacts" },
        secondaryAction: { label: "Посмотреть контакты", href: "/contacts" },
      },
    },
    about: {
      seoTitle: "О компании IMPXFIT",
      seoDescription:
        "IMPXFIT: импорт сырья и технологий для кормопроизводства, консалтинг, поставки для животноводства. Миссия, профиль деятельности и социальная роль компании.",
      intro: {
        headline:
          "Наш бизнес — импорт сырья, технологий и решений для кормопроизводства и животноводства.",
      },
      business: {
        title: "Наш бизнес",
        paragraphs: [
          "Мы сотрудничаем с ведущими европейскими специалистами и технологами: клиенты IMPXFIT получают доступ к актуальным разработкам в области сбалансированного кормления и здорового содержания сельскохозяйственных животных и птицы.",
          "Импексфид поставляет широкий спектр продуктов, которые позволяют удовлетворить специфические нужды животноводческих хозяйств и кормопроизводств.",
        ],
      },
      businessShout:
        "МЫ ПОМОГАЕМ ТРАНСФОРМИРОВАТЬ ЖИВОТНОВОДЧЕСКИЕ ХОЗЯЙСТВА И КОРМОВЫЕ ПРОИЗВОДСТВА В ВЫСОКОРЕНТАБЕЛЬНЫЙ БИЗНЕС.",
      footprint:
        "Компания «Импексфид» была образована в 2009 году, центральный офис в Москве, представительства в Санкт-Петербурге, Екатеринбурге, Новосибирске, Воронеже, Пензе, Нижнем Новгороде, Вологде и Владимире.",
      mission:
        "содействовать развитию животноводства и птицеводства в России, обеспечивая надежные поставки высококачественных кормовых компонентов.",
      profile: {
        title: "Профиль деятельности",
        items: [
          {
            icon: "supply" as const,
            title: "Поставки широкого ассортимента",
            text: "Мы поставляем широкий спектр продуктов под задачи животноводческих хозяйств и кормового производства.",
          },
          {
            icon: "headset" as const,
            title: "Консалтинг и технологическая поддержка",
            text: "Эксперты IMPXFIT совместно с европейскими коллегами консультируют по кормлению и содержанию с/х животных и птицы, а также по сохранности кормов и выращиванию молодняка.",
          },
          {
            icon: "cattle" as const,
            title: "Поставки племенного скота",
            text: "Организуем поставки КРС (молочного и мясного направления), мелкого рогатого скота и племенных свиней с лучших европейских и отечественных хозяйств.",
          },
        ],
      },
      social: {
        title: "Социальная роль",
        items: [
          "Мы видим свою роль в обеспечении здорового кормления и содержания животных как вклад в качество базовых продуктов питания человека.",
          "Стремимся повышать общую культуру агробизнеса, сочетая социально ориентированные принципы и современные деловые технологии.",
          "Наши продукты и сервисы направлены на развитие отрасли в сторону экологически ответственного и безопасного животноводства.",
        ],
      },
    },
    catalog: {
      seoTitle: "Каталог направлений IMPXFIT",
      seoDescription:
        "Каталог IMPXFIT: кормопроизводство, КРС, птица, свиноводство, ветеринария, сырьевые решения и технологическое сопровождение.",
      hero: {
        eyebrow: "Каталог",
        title: "Направления IMPXFIT для кормопроизводства и животноводства",
        description:
          "Каталог выстроен как рабочая карта агро-B2B: отдельные страницы направлений, продуктовые позиции и сервисные пакеты, которые можно адаптировать под предприятие.",
      },
      selectionMatrix: [
        {
          title: "Для комбикормового завода",
          text: "Выбирайте кормопроизводство, сырьевые решения и технологическое сопровождение для настройки рецептур, ввода компонентов и контроля стабильности.",
        },
        {
          title: "Для животноводческого комплекса",
          text: "Переходите в видоспецифичные направления: КРС, птица, свиноводство или ветеринарное сопровождение.",
        },
        {
          title: "Для проектной задачи",
          text: "Используйте страницы продуктовых линий как отправную точку для пилота, сравнения и подготовки коммерческого предложения.",
        },
      ],
      cta: {
        eyebrow: "Нужен быстрый маршрут?",
        title: "Соберем каталог под ваш тип площадки и текущий производственный вызов",
        description:
          "Если у вас несколько направлений сразу, команда IMPXFIT предложит логику отбора и приоритизации без перегрузки лишними позициями.",
        primaryAction: { label: "Получить консультацию", href: "/contacts" },
        secondaryAction: { label: "О компании", href: "/about" },
      },
    },
    newsPage: {
      seoTitle: "Новости IMPXFIT",
      seoDescription:
        "Новости IMPXFIT: отраслевые события, внедрения, аудит сырья, клиентские проекты и экспертные материалы для агро-B2B.",
      hero: {
        eyebrow: "Новости",
        title: "Новости, кейсы и события IMPXFIT",
        description:
          "Раздел отражает практическую сторону работы компании: лабораторные выезды, клиентские семинары, обзоры сырья и запуск решений на площадках.",
      },
    },
    contacts: {
      seoTitle: "Контакты IMPXFIT",
      seoDescription:
        "Контакты IMPXFIT: офисы, рабочие каналы связи и форма запроса по кормовым решениям и технологическому сопровождению.",
      hero: {
        eyebrow: "Контакты",
        title: "Связь с IMPXFIT — это быстрый переход от запроса к техническому диалогу",
        description:
          "Мы работаем с запросами по поставке, подбору решений, аудиту действующих программ кормления и подготовке коммерческих предложений.",
      },
      introCards: [
        {
          title: "Для закупки и снабжения",
          text: "Оперативно подключаемся к запросам по доступности позиций, фасовке, срокам поставки и графику внедрения.",
        },
        {
          title: "Для технологов и ветеринарных специалистов",
          text: "Помогаем сверить задачу с рецептурой, рисками сырья, статусом стада и производственными ограничениями.",
        },
      ],
      officesTitle: "Офисы и рабочие контакты",
      offices: [
        {
          city: "Москва",
          address:
            "123242, г. Москва\nвн.тер.г. муниципальный округ Пресненский\nпер. Капранова, д. 3, стр. 2",
          phone: "+7 (495) 640-67-70",
          email: "urr@impexfeed.com",
          schedule: "Пн-Пт, 09:00-18:00",
          registration: "ИНН 7701847486 / КПП 770301001",
        },
      ],
      form: {
        title: "Форма обратной связи",
        description:
          "Оставьте данные компании и кратко опишите задачу. Мы вернемся с ответом, подбором направления или уточняющими вопросами.",
        fields: {
          name: "Имя",
          company: "Компания",
          phone: "Телефон",
          email: "Email",
          requestType: "Тип запроса",
          message: "Описание задачи",
        },
        requestTypes: [
          "Подбор продуктового решения",
          "Технологический аудит",
          "Коммерческое предложение",
          "Партнерство",
        ],
        privacyNote:
          "Нажимая кнопку, вы подтверждаете согласие на обработку делового запроса и контактных данных.",
      },
    },
  },
  en: {
    organization: {
      name: "IMPXFIT",
      description:
        "Feed ingredients, veterinary solutions and technology support for livestock, poultry, swine and feed production companies.",
    },
    languageNames: {
      ru: "RU",
      en: "EN",
      kk: "KZ",
    },
    navigation: {
      homeLabel: "Home",
      catalogLabel: "Catalog",
      contactAction: "Contact us",
      menuLabel: "Menu",
      closeLabel: "Close",
      links: [
        { label: "About", href: "/about" },
        { label: "Catalog", href: "/catalog" },
        { label: "News", href: "/news" },
        { label: "Contacts", href: "/contacts" },
      ],
    },
    common: {
      homeLabel: "Home",
      catalogDetails: "Open category",
      productDetails: "View solution details",
      readMore: "Read article",
      allNews: "All news",
      latestNews: "Latest insights",
      benefitsTitle: "Key benefits",
      specsTitle: "Operating parameters",
      solutionsTitle: "Solution line",
      relatedCategoriesTitle: "Related categories",
      requestTitle: "Request a proposal",
      goToContacts: "Go to contacts",
      backToNews: "Back to news list",
      submitLabel: "Send request",
      pendingLabel: "Sending...",
      successMessage:
        "Thank you. Your request has been received and the IMPXFIT team will contact you during business hours.",
      errorMessage:
        "The form could not be submitted. Please check the fields and try again.",
    },
    footer: {
      description:
        "IMPXFIT combines feed ingredients, veterinary solutions and technology support for agro B2B operations.",
      catalogTitle: "Categories",
      companyTitle: "Company",
      contactTitle: "Contacts",
      rights: "IMPXFIT. All rights reserved.",
      links: [
        { label: "About", href: "/about" },
        { label: "Catalog", href: "/catalog" },
        { label: "News", href: "/news" },
        { label: "Contacts", href: "/contacts" },
      ],
      offices: [
        {
          city: "Moscow",
          address:
            "123242, Moscow\nPresnensky municipal district\nKapranov Lane 3, building 2",
          phone: "+7 (495) 640-67-70",
          email: "urr@impexfeed.com",
          registration: "INN 7701847486 / KPP 770301001",
        },
      ],
    },
    home: {
      seoTitle: "IMPXFIT | Feed solutions and technology support",
      seoDescription:
        "IMPXFIT supplies feed additives, veterinary solutions, raw materials and practical technology support for agricultural B2B companies.",
      hero: {
        eyebrow: "Agro B2B solutions",
        title: "Feed solutions and technology support for agricultural B2B",
        description:
          "IMPXFIT works with feed mills, production sites and agricultural holdings, combining raw materials, practical know-how and measurable implementation support.",
        primaryAction: { label: "Open catalog", href: "/catalog" },
        secondaryAction: { label: "Discuss your task", href: "/contacts" },
        highlights: [
          "Feed production and formula support",
          "Programs for cattle, poultry and swine",
          "Veterinary and biosecurity solutions",
        ],
        stats: [
          { value: "7", label: "industry categories" },
          { value: "14", label: "product and service positions" },
          { value: "48 h", label: "for an initial technical response" },
        ],
      },
      featured: {
        eyebrow: "Featured solutions",
        title: "Priority IMPXFIT product lines",
        description:
          "The first screen highlights the four lines most often requested for implementation, audits and project discussions.",
      },
      categories: {
        eyebrow: "Catalog structure",
        title: "Products and services built around real agricultural workflows",
        description:
          "The catalog follows the industry's practical logic: feed production, species-specific nutrition, raw material solutions and technology support.",
      },
      expertise: {
        eyebrow: "Expertise",
        title: "Not only supply, but a full production link",
        description:
          "Every project is evaluated through formula economics, process stability, veterinary risks and the final productivity outcome.",
        items: [
          {
            title: "Selection based on a real production task",
            text: "We adapt each solution to raw material availability, production phase, herd status and cost limits.",
          },
          {
            title: "Implementation support",
            text: "We guide trials, adjust dosage and define control points both at the feed mill and on the farm.",
          },
          {
            title: "Management-ready reporting",
            text: "We convert observations, process results and recommendations into a clear B2B reporting format.",
          },
        ],
      },
      numbers: {
        eyebrow: "IMPXFIT in figures",
        title: "A structure ready for scale across holdings and regional clusters",
        description:
          "The website and product logic are prepared for growth: more categories, more positions and future CRM or CMS integrations.",
        stats: [
          { value: "3", label: "site languages" },
          { value: "100%", label: "content managed through data files" },
          { value: "SEO", label: "metadata and indexing readiness" },
        ],
      },
      news: {
        eyebrow: "Company news",
        title: "Industry events, launches and applied cases",
        description:
          "The news flow supports expertise, not decoration: audits, seminars, raw material reviews and client implementation stories.",
      },
      cta: {
        eyebrow: "Contact us",
        title: "We will match the solution to your raw materials, animal type and KPI targets",
        description:
          "Use the form or contact the IMPXFIT office to discuss supply, implementation or an audit of your current feeding program.",
        primaryAction: { label: "Send a request", href: "/contacts" },
        secondaryAction: { label: "View contacts", href: "/contacts" },
      },
    },
    about: {
      seoTitle: "About IMPXFIT",
      seoDescription:
        "IMPXFIT imports raw materials and technologies for feed production, provides consulting and supplies for livestock businesses. Mission, business profile and social role.",
      intro: {
        headline:
          "Our business is the import of raw materials, technologies and feed production solutions.",
      },
      business: {
        title: "Our business",
        paragraphs: [
          "We cooperate with leading European specialists and technologists, which is why our clients have immediate access to recent developments and advanced technologies in balanced, wholesome feeding and healthy livestock management.",
          "IMPXFIT aligns supply and service with outcomes on the farm: formula performance, biosecurity, stability of production indicators and the economic effect for the client.",
        ],
      },
      businessShout:
        "WE HELP TRANSFORM LIVESTOCK FARMS AND FEED PRODUCTION FACILITIES INTO A HIGHLY PROFITABLE BUSINESS.",
      footprint:
        "IMPXFIT was founded in 2009. The headquarters is in Moscow, with regional offices in Saint Petersburg, Yekaterinburg, Novosibirsk, Voronezh, Penza, Nizhny Novgorod, Vologda and Vladimir.",
      mission:
        "IMPXFIT’s mission is to improve the quality of products and increase the profitability of our clients’ companies by providing up-to-date products and technologies of the highest quality for healthy animal feeding and care.",
      profile: {
        title: "Business profile",
        items: [
          {
            icon: "supply" as const,
            title: "Supply of a wide range of products",
            text: "We supply a wide range of products that meet the specific needs of livestock farms and feed production.",
          },
          {
            icon: "headset" as const,
            title: "Consulting and technological support",
            text: "Our experts, together with European colleagues, provide consulting services on feeding and keeping farm animals and poultry, as well as on the problems of preservation and rearing.",
          },
          {
            icon: "cattle" as const,
            title: "Supply of live breeding cattle",
            text: "We organize deliveries of cattle (dairy and meat), small cattle and breeding pigs from the best European and domestic farms.",
          },
        ],
      },
      social: {
        title: "Social role",
        items: [
          "We see our role in providing healthy feeding and keeping animals to improve the quality of basic human food.",
          "We strive to improve the overall culture of agriculture by introducing socially oriented principles and modern business technologies.",
          "Our products and services are designed to contribute to the evolution of the industry towards environmentally friendly and safe animal husbandry.",
        ],
      },
    },
    catalog: {
      seoTitle: "IMPXFIT Catalog",
      seoDescription:
        "IMPXFIT catalog: feed production, cattle, poultry, swine, veterinary, raw materials and technology support.",
      hero: {
        eyebrow: "Catalog",
        title: "IMPXFIT categories for feed production and livestock business",
        description:
          "The catalog is built as a working map for agro B2B operations: separate category pages, product positions and service packages ready for adaptation.",
      },
      selectionMatrix: [
        {
          title: "For feed mills",
          text: "Use feed production, raw material solutions and technology support to improve formulas, add components and control process stability.",
        },
        {
          title: "For livestock operations",
          text: "Move to species-specific pages for cattle, poultry, swine or veterinary support.",
        },
        {
          title: "For project-based work",
          text: "Use product pages as a starting point for pilot planning, comparison and quotation preparation.",
        },
      ],
      cta: {
        eyebrow: "Need a faster route?",
        title: "We can assemble the catalog around your site type and current production challenge",
        description:
          "If your business covers several categories at once, the IMPXFIT team will help prioritize the right areas without overload.",
        primaryAction: { label: "Get consultation", href: "/contacts" },
        secondaryAction: { label: "About company", href: "/about" },
      },
    },
    newsPage: {
      seoTitle: "IMPXFIT News",
      seoDescription:
        "IMPXFIT news: industry events, implementations, raw material audits, client projects and expert commentary for agro B2B.",
      hero: {
        eyebrow: "News",
        title: "News, cases and events from IMPXFIT",
        description:
          "This section reflects the practical side of our work: laboratory audits, client seminars, raw material reviews and solution launches.",
      },
    },
    contacts: {
      seoTitle: "IMPXFIT Contacts",
      seoDescription:
        "IMPXFIT contacts: offices, working communication channels and request form for feed solutions and technology support.",
      hero: {
        eyebrow: "Contacts",
        title: "Contacting IMPXFIT means moving quickly from a request to a technical conversation",
        description:
          "We handle requests related to supply, solution matching, audit of current feeding programs and quotation preparation.",
      },
      introCards: [
        {
          title: "For procurement teams",
          text: "We respond quickly on product availability, packaging, lead time and implementation schedule.",
        },
        {
          title: "For technologists and veterinarians",
          text: "We help align the task with formulas, raw material risks, herd status and production restrictions.",
        },
      ],
      officesTitle: "Offices and working contacts",
      offices: [
        {
          city: "Moscow",
          address:
            "123242, Moscow\nPresnensky municipal district\nKapranov Lane 3, building 2",
          phone: "+7 (495) 640-67-70",
          email: "urr@impexfeed.com",
          schedule: "Mon-Fri, 09:00-18:00",
          registration: "INN 7701847486 / KPP 770301001",
        },
      ],
      form: {
        title: "Contact form",
        description:
          "Leave your company details and briefly describe the task. We will return with an answer, a category match or follow-up questions.",
        fields: {
          name: "Name",
          company: "Company",
          phone: "Phone",
          email: "Email",
          requestType: "Request type",
          message: "Task description",
        },
        requestTypes: [
          "Product solution request",
          "Technology audit",
          "Commercial offer",
          "Partnership",
        ],
        privacyNote:
          "By clicking the button you consent to the processing of business contact data for the submitted request.",
      },
    },
  },
  kk: {
    organization: {
      name: "IMPXFIT",
      description:
        "Мал шаруашылығы, құс өсіру, шошқа шаруашылығы және жем өндірісі үшін жемдік ингредиенттер, ветеринарлық шешімдер және технологиялық сүйемелдеу.",
    },
    languageNames: {
      ru: "RU",
      en: "EN",
      kk: "KZ",
    },
    navigation: {
      homeLabel: "Басты бет",
      catalogLabel: "Каталог",
      contactAction: "Байланысу",
      menuLabel: "Мәзір",
      closeLabel: "Жабу",
      links: [
        { label: "Компания туралы", href: "/about" },
        { label: "Каталог", href: "/catalog" },
        { label: "Жаңалықтар", href: "/news" },
        { label: "Байланыс", href: "/contacts" },
      ],
    },
    common: {
      homeLabel: "Басты бет",
      catalogDetails: "Бағытты ашу",
      productDetails: "Шешім туралы толығырақ",
      readMore: "Материалды оқу",
      allNews: "Барлық жаңалықтар",
      latestNews: "Соңғы материалдар",
      benefitsTitle: "Негізгі артықшылықтар",
      specsTitle: "Жұмыс параметрлері",
      solutionsTitle: "Шешімдер желісі",
      relatedCategoriesTitle: "Қатысты бағыттар",
      requestTitle: "Сұрау жіберу",
      goToContacts: "Байланысқа өту",
      backToNews: "Жаңалықтар тізіміне оралу",
      submitLabel: "Сұрауды жіберу",
      pendingLabel: "Жіберілуде...",
      successMessage:
        "Рахмет. Сұрауыңыз қабылданды, IMPXFIT командасы жұмыс уақытында хабарласады.",
      errorMessage:
        "Форманы жіберу мүмкін болмады. Өрістерді тексеріп, қайта көріңіз.",
    },
    footer: {
      description:
        "IMPXFIT агро-B2B кәсіпорындары үшін жемдік ингредиенттерді, ветеринарлық шешімдерді және технологиялық сүйемелдеуді біріктіреді.",
      catalogTitle: "Бағыттар",
      companyTitle: "Компания",
      contactTitle: "Байланыс",
      rights: "IMPXFIT. Барлық құқықтар қорғалған.",
      links: [
        { label: "Компания туралы", href: "/about" },
        { label: "Каталог", href: "/catalog" },
        { label: "Жаңалықтар", href: "/news" },
        { label: "Байланыс", href: "/contacts" },
      ],
      offices: [
        {
          city: "Мәскеу",
          address:
            "123242, г. Москва\nвн.тер.г. муниципальный округ Пресненский\nпер. Капранова, д. 3, стр. 2",
          phone: "+7 (495) 640-67-70",
          email: "urr@impexfeed.com",
          registration: "ИНН 7701847486 / КПП 770301001",
        },
      ],
    },
    home: {
      seoTitle: "IMPXFIT | Жемдік шешімдер және технологиялық сүйемелдеу",
      seoDescription:
        "IMPXFIT агро-B2B компаниялары үшін жемдік қоспалар, ветеринарлық шешімдер, шикізат компоненттері және технологиялық қолдау ұсынады.",
      hero: {
        eyebrow: "Agro B2B solutions",
        title: "Агро-B2B үшін жемдік шешімдер және технологиялық сүйемелдеу",
        description:
          "IMPXFIT құрамажем зауыттарымен, өндірістік алаңдармен және агрохолдингтермен жұмыс істеп, шикізат компоненттерін, қолданбалы технологияны және өлшенетін қолдауды біріктіреді.",
        primaryAction: { label: "Каталогқа өту", href: "/catalog" },
        secondaryAction: { label: "Міндетті талқылау", href: "/contacts" },
        highlights: [
          "Жем өндірісі және рецептуралық қолдау",
          "ІҚМ, құс және шошқаға арналған бағдарламалар",
          "Ветеринарлық және биоқауіпсіздік шешімдері",
        ],
        stats: [
          { value: "7", label: "салалық бағыт" },
          { value: "14", label: "өнімдік және сервистік позиция" },
          { value: "48 сағ", label: "алғашқы техникалық жауапқа" },
        ],
      },
      featured: {
        eyebrow: "Басым шешімдер",
        title: "IMPXFIT-тің негізгі өнім желілері",
        description:
          "Алғашқы экранда енгізу, аудит және жобалық талқылау үшін жиі сұралатын төрт желі көрсетілген.",
      },
      categories: {
        eyebrow: "Каталог құрылымы",
        title: "Нақты агроөндірістік логикаға құрылған өнімдер мен сервистер",
        description:
          "Каталог өндірістік логиканы қайталайды: жем өндірісі, түрлік бағдарланған қоректендіру, шикізат шешімдері және технологиялық сүйемелдеу.",
      },
      expertise: {
        eyebrow: "Сараптама",
        title: "Тек жеткізу емес, толық өндірістік байланыс",
        description:
          "Әр жоба рецептура экономикасы, процесс тұрақтылығы, ветеринарлық тәуекелдер және соңғы өнімділік нәтижесі арқылы бағаланады.",
        items: [
          {
            title: "Нақты өндірістік міндетке бейімдеу",
            text: "Шешім шикізат қолжетімділігіне, өндіріс кезеңіне, табын жағдайына және өзіндік құн шектеулеріне қарай таңдалады.",
          },
          {
            title: "Енгізуді сүйемелдеу",
            text: "Сынақтарды бірге жүргізіп, дозалауды нақтылаймыз және зауыт пен фермадағы бақылау нүктелерін белгілейміз.",
          },
          {
            title: "Менеджментке түсінікті есеп",
            text: "Бақылауларды, нәтижелерді және ұсыныстарды түсінікті B2B форматқа келтіреміз.",
          },
        ],
      },
      numbers: {
        eyebrow: "IMPXFIT сандарда",
        title: "Холдингтер мен аймақтық кластерлерге масштабтауға дайын құрылым",
        description:
          "Сайт пен өнім логикасы әрі қарай өсуге дайын: жаңа бағыттар, жаңа позициялар және CRM не CMS интеграциялары.",
        stats: [
          { value: "3", label: "сайт тілі" },
          { value: "100%", label: "контент data-файлдар арқылы басқарылады" },
          { value: "SEO", label: "мета-құрылым және индекстеу дайындығы" },
        ],
      },
      news: {
        eyebrow: "Компания жаңалықтары",
        title: "Салалық оқиғалар, іске қосулар және қолданбалы кейстер",
        description:
          "Жаңалықтар бөлімі сән үшін емес: аудиттер, семинарлар, шикізат шолулары және клиенттік енгізулер.",
      },
      cta: {
        eyebrow: "Бізбен байланысыңыз",
        title: "Шикізатқа, жануар түріне және KPI мақсаттарына сай шешім ұсынамыз",
        description:
          "Жеткізу, енгізу немесе ағымдағы қоректендіру бағдарламасын аудиттеу мәселесін талқылау үшін форма қалдырыңыз не IMPXFIT кеңсесіне хабарласыңыз.",
        primaryAction: { label: "Сұрау жіберу", href: "/contacts" },
        secondaryAction: { label: "Байланысты көру", href: "/contacts" },
      },
    },
    about: {
      seoTitle: "IMPXFIT туралы",
      seoDescription:
        "IMPXFIT: жем өндірісі үшін шикізат пен технологиялар импорты, кеңес беру, мал шаруашылығына жеткізу. Миссия, қызмет профилі және әлеуметтік рөлі.",
      intro: {
        headline:
          "Біздің бизнесіміз — жем өндірісі мен мал шаруашылығы үшін шикізат, технологиялар және шешімдер импорты.",
      },
      business: {
        title: "Біздің бизнес",
        paragraphs: [
          "Біз Еуропаның жетекші мамандары мен технологтарымен ынтымақтасамыз: IMPXFIT клиенттері салауатты қоректендіру мен фермерлік жануарлар мен құсты ұстаудың заманауи тәжірибесіне қол жеткізеді.",
          "IMPXFIT жеткізу мен сервисті осылай құрады, құндылық тек жөнелтумен аяқталмайды: рецептура, биоқауіпсіздік, өндірістік көрсеткіштердің тұрақтылығы және клиент үшін экономикалық нәтиже де маңызды.",
        ],
      },
      businessShout:
        "БІЗ МАЛ ШАРУАШЫЛЫҒЫ МЕН ЖЕМ ӨНДІРІСІН ЖОҒАРЫ РЕНТАБЕЛЬДІ БИЗНЕСКЕ АЙНАЛДЫРУҒА КӨМЕКТЕСЕМІЗ.",
      footprint:
        "Компания 2009 жылы құрылды. Орталық кеңсе Мәскеуде, өкілдіктері Санкт-Петербург, Екатеринбург, Новосибирск, Воронеж, Пенза, Нижний Новгород, Вологда және Владимир қалаларында орналасқан.",
      mission:
        "IMPXFIT миссиясы — салауатты қоректендіру мен жануарларға күтім жасаудың заманауи өнімдері мен технологиялары арқылы клиенттер бизнесінің өнім сапасы мен рентабельділігін арттыру.",
      profile: {
        title: "Қызмет профилі",
        items: [
          {
            icon: "supply" as const,
            title: "Кең ассортиментті жеткізу",
            text: "Біз мал шаруашылығы алаңдары мен жем өндірісінің нақты қажеттіліктеріне сай кең өнім ассортиментін жеткіземіз.",
          },
          {
            icon: "headset" as const,
            title: "Кеңес беру және технологиялық қолдау",
            text: "IMPXFIT сарапшылары еуропалық әріптестермен бірге фермерлік жануарлар мен құсты қоректендіру мен ұстау, жем сақтау және өсіру мәселелері бойынша кеңес береді.",
          },
          {
            icon: "cattle" as const,
            title: "Тірі племендік мал жеткізуі",
            text: "Сүтті және етті ІҚМ, ұсақ мал және племендік шошқаларды ең жақсы еуропалық және отандық шаруашылықтардан жеткізуді ұйымдастырамыз.",
          },
        ],
      },
      social: {
        title: "Әлеуметтік рөлі",
        items: [
          "Біз салауатты қоректендіру мен жануарларды ұстау арқылы адамның негізгі азық-түлік өнімдерінің сапасына үлес қосамыз деп білеміз.",
          "Әлеуметтік бағдарлы принциптерді заманауи бизнес технологияларымен үйлестіру арқылы агробизнес мәдениетін жақсартуға ұмтыламыз.",
          "Біздің өнімдер мен қызметтер саланы экологиялық жауапты және қауіпсіз мал шаруашылығына қарай дамытуға бағытталған.",
        ],
      },
    },
    catalog: {
      seoTitle: "IMPXFIT каталогы",
      seoDescription:
        "IMPXFIT каталогы: жем өндірісі, ІҚМ, құс, шошқа, ветеринария, шикізат шешімдері және технологиялық сүйемелдеу.",
      hero: {
        eyebrow: "Каталог",
        title: "Жем өндірісі мен мал шаруашылығына арналған IMPXFIT бағыттары",
        description:
          "Каталог агро-B2B жұмысының картасы ретінде құрылған: бөлек бағыт беттері, өнім позициялары және бейімдеуге дайын сервистік пакеттер.",
      },
      selectionMatrix: [
        {
          title: "Құрамажем зауыты үшін",
          text: "Рецептураны жетілдіру, компонент енгізу және процесс тұрақтылығын бақылау үшін жем өндірісі, шикізат және технологиялық қолдауды таңдаңыз.",
        },
        {
          title: "Мал шаруашылығы кешені үшін",
          text: "ІҚМ, құс, шошқа немесе ветеринарлық сүйемелдеу бағыттарына өтіңіз.",
        },
        {
          title: "Жобалық міндет үшін",
          text: "Өнім беттерін пилот, салыстыру және коммерциялық ұсыныс дайындау үшін бастапқы нүкте ретінде пайдаланыңыз.",
        },
      ],
      cta: {
        eyebrow: "Жылдам маршрут керек пе?",
        title: "Сіздің алаңыңыз бен ағымдағы өндірістік міндетіңізге сай каталог құрастырамыз",
        description:
          "Егер бизнесіңізде бірнеше бағыт қатар болса, IMPXFIT командасы қажет аймақтарды артық жүктемесіз басымдыққа қояды.",
        primaryAction: { label: "Кеңес алу", href: "/contacts" },
        secondaryAction: { label: "Компания туралы", href: "/about" },
      },
    },
    newsPage: {
      seoTitle: "IMPXFIT жаңалықтары",
      seoDescription:
        "IMPXFIT жаңалықтары: салалық оқиғалар, енгізулер, шикізат аудиті, клиенттік жобалар және агро-B2B үшін сараптамалық материалдар.",
      hero: {
        eyebrow: "Жаңалықтар",
        title: "IMPXFIT жаңалықтары, кейстері және оқиғалары",
        description:
          "Бұл бөлім жұмыстың практикалық жағын көрсетеді: зертханалық аудиттер, клиенттік семинарлар, шикізат шолулары және шешімдерді іске қосу.",
      },
    },
    contacts: {
      seoTitle: "IMPXFIT байланыстары",
      seoDescription:
        "IMPXFIT байланыстары: кеңселер, жұмыс арналары және жемдік шешімдер мен технологиялық сүйемелдеуге арналған сұрау формасы.",
      hero: {
        eyebrow: "Байланыс",
        title: "IMPXFIT-пен байланыс сұраудан техникалық диалогқа тез өтуді білдіреді",
        description:
          "Біз жеткізу, шешім таңдау, қолданыстағы қоректендіру бағдарламаларын аудиттеу және коммерциялық ұсыныс дайындау сұрауларымен жұмыс істейміз.",
      },
      introCards: [
        {
          title: "Сатып алу және жабдықтау үшін",
          text: "Позиция қолжетімділігі, қаптама, жеткізу мерзімі және енгізу кестесі бойынша жедел жауап береміз.",
        },
        {
          title: "Технологтар мен ветеринарлар үшін",
          text: "Міндетті рецептпен, шикізат тәуекелімен, табын жағдайымен және өндірістік шектеулермен байланыстыруға көмектесеміз.",
        },
      ],
      officesTitle: "Кеңселер және жұмыс байланыстары",
      offices: [
        {
          city: "Мәскеу",
          address:
            "123242, г. Москва\nвн.тер.г. муниципальный округ Пресненский\nпер. Капранова, д. 3, стр. 2",
          phone: "+7 (495) 640-67-70",
          email: "urr@impexfeed.com",
          schedule: "Дс-Жм, 09:00-18:00",
          registration: "ИНН 7701847486 / КПП 770301001",
        },
      ],
      form: {
        title: "Кері байланыс формасы",
        description:
          "Компания деректерін қалдырып, міндетті қысқаша сипаттаңыз. Біз жауаппен, бағыт таңдаумен немесе нақтылау сұрақтарымен ораламыз.",
        fields: {
          name: "Аты",
          company: "Компания",
          phone: "Телефон",
          email: "Email",
          requestType: "Сұрау түрі",
          message: "Міндет сипаттамасы",
        },
        requestTypes: [
          "Өнімдік шешім таңдау",
          "Технологиялық аудит",
          "Коммерциялық ұсыныс",
          "Серіктестік",
        ],
        privacyNote:
          "Түймені басу арқылы сіз іскерлік сұрауды және байланыс деректерін өңдеуге келісім бересіз.",
      },
    },
  },
} satisfies Record<Locale, unknown>;

export function getSiteContent(locale: Locale) {
  return withLocalizedBrand(siteContent[locale], locale);
}

export type SiteContent = ReturnType<typeof getSiteContent>;
