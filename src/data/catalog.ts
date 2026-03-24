import type {
  CapabilityItem,
  Category,
  IconName,
  Locale,
  Product,
  ProductSpec,
  StatItem,
} from "@/types/content";
import { withLocalizedBrand } from "@/lib/branding";

import {
  cattleFeedimportGroups,
  cattleFeedimportProducts,
} from "./catalog/feedimport/cattle-feedimport";
import {
  cropFeedimportGroups,
  cropFeedimportProducts,
} from "./catalog/feedimport/crop-feedimport";
import {
  feedProductionFeedimportGroups,
  feedProductionFeedimportProducts,
} from "./catalog/feedimport/feed-production-products";
import {
  poultryFeedimportGroups,
  poultryFeedimportProducts,
} from "./catalog/feedimport/poultry-feedimport";
import {
  swineFeedimportGroups,
  swineFeedimportProducts,
} from "./catalog/feedimport/swine-feedimport";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

type LocalizedSpec = {
  label: LocalizedText;
  value: LocalizedText;
};

type LocalizedCapability = {
  title: LocalizedText;
  text: LocalizedText;
};

type LocalizedStat = {
  value: string;
  label: LocalizedText;
};

export type LocalizedProduct = {
  slug: string;
  badge: LocalizedText;
  name: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  benefits: LocalizedList;
  application: LocalizedText;
  form: LocalizedText;
  packaging: LocalizedText;
  leadTime: LocalizedText;
  tags: LocalizedList;
  specs: LocalizedSpec[];
  listingImage?: string;
};

export type LocalizedProductGroup = {
  id: string;
  title: LocalizedText;
  productSlugs: string[];
};

type LocalizedCategory = {
  slug: string;
  icon: IconName;
  coverImage?: string;
  productGroups?: LocalizedProductGroup[];
  title: LocalizedText;
  teaser: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  focusAreas: LocalizedList;
  capabilities: LocalizedCapability[];
  metrics: LocalizedStat[];
  products: LocalizedProduct[];
  ctaTitle: LocalizedText;
  ctaText: LocalizedText;
};

function localizeSpecs(locale: Locale, specs: LocalizedSpec[]): ProductSpec[] {
  return specs.map((spec) => ({
    label: spec.label[locale],
    value: spec.value[locale],
  }));
}

function localizeCapabilities(
  locale: Locale,
  items: LocalizedCapability[],
): CapabilityItem[] {
  return items.map((item) => ({
    title: item.title[locale],
    text: item.text[locale],
  }));
}

function localizeMetrics(locale: Locale, items: LocalizedStat[]): StatItem[] {
  return items.map((item) => ({
    value: item.value,
    label: item.label[locale],
  }));
}

function localizeProducts(locale: Locale, items: LocalizedProduct[]): Product[] {
  return items.map((item) => ({
    slug: item.slug,
    badge: item.badge[locale],
    name: item.name[locale],
    summary: item.summary[locale],
    description: item.description[locale],
    benefits: item.benefits[locale],
    application: item.application[locale],
    form: item.form[locale],
    packaging: item.packaging[locale],
    leadTime: item.leadTime[locale],
    tags: item.tags[locale],
    specs: localizeSpecs(locale, item.specs),
    ...(item.listingImage ? { listingImage: item.listingImage } : {}),
  }));
}

function localizeCategory(locale: Locale, category: LocalizedCategory): Category {
  const resolvedGroups = category.productGroups
    ?.map((group) => ({
      id: group.id,
      title: group.title[locale],
      productSlugs: group.productSlugs,
    }))
    .filter((group) => group.productSlugs.length > 0);

  return withLocalizedBrand(
    {
    slug: category.slug,
    icon: category.icon,
    ...(category.coverImage ? { coverImage: category.coverImage } : {}),
    ...(resolvedGroups?.length ? { productGroups: resolvedGroups } : {}),
    title: category.title[locale],
    teaser: category.teaser[locale],
    summary: category.summary[locale],
    description: category.description[locale],
    focusAreas: category.focusAreas[locale],
    capabilities: localizeCapabilities(locale, category.capabilities),
    metrics: localizeMetrics(locale, category.metrics),
    products: localizeProducts(locale, category.products),
    ctaTitle: category.ctaTitle[locale],
    ctaText: category.ctaText[locale],
    },
    locale,
  );
}

const categoryRecords: LocalizedCategory[] = [
  {
    slug: "feed-production",
    icon: "feed",
    coverImage: "/media/catalog/feed-production-hero.png",
    productGroups: feedProductionFeedimportGroups,
    title: {
      ru: "Кормопроизводство",
      en: "Feed production",
      kk: "Жем өндірісі",
    },
    teaser: {
      ru: "Премиксные матрицы, минеральное выравнивание и стабильность рецептуры на производстве.",
      en: "Premix matrices, mineral balancing and formula stability at the plant.",
      kk: "Премикс матрицалары, минералдық теңгерім және өндірістегі рецепт тұрақтылығы.",
    },
    summary: {
      ru: "Решения для комбикормовых заводов и интеграторов: от ввода премиксных платформ до поддержки сырьевой гибкости.",
      en: "Solutions for feed mills and integrators, from premix platforms to flexible raw material strategies.",
      kk: "Құрамажем зауыттары мен интеграторларға арналған шешімдер: премикс платформаларынан шикізат икемділігіне дейін.",
    },
    description: {
      ru: "Категория помогает выстроить стабильную рецептурную архитектуру, снизить технологические колебания и упростить масштабирование продуктовых линий под разные площадки.",
      en: "This category supports stable formula architecture, lower process deviation and easier scaling across different production sites.",
      kk: "Бұл бағыт рецептуралық архитектураны тұрақтандыруға, технологиялық ауытқуларды азайтуға және әртүрлі алаңдарға желіні масштабтауға көмектеседі.",
    },
    focusAreas: {
      ru: ["Премиксные решения", "Минеральные программы", "Стабильность гранулирования"],
      en: ["Premix systems", "Mineral programs", "Pelleting stability"],
      kk: ["Премикс жүйелері", "Минералдық бағдарламалар", "Түйіршіктеу тұрақтылығы"],
    },
    capabilities: [
      {
        title: {
          ru: "Гибкая матрица под локальное сырье",
          en: "Flexible matrix for local raw materials",
          kk: "Жергілікті шикізатқа икемді матрица",
        },
        text: {
          ru: "Поддерживаем рецептуры, где требуется быстро адаптировать витамино-минеральную часть под доступность компонентов.",
          en: "We support formulas that require rapid adjustment of the vitamin and mineral part based on component availability.",
          kk: "Қолжетімді компоненттерге қарай витаминді-минералды бөлікті тез бейімдеуді қажет ететін рецепттерді қолдаймыз.",
        },
      },
      {
        title: {
          ru: "Снижение технологических отклонений",
          en: "Reduced process deviation",
          kk: "Технологиялық ауытқуды азайту",
        },
        text: {
          ru: "Фокусируемся на равномерности смешивания, стабильности ввода и прогнозируемом поведении на линии.",
          en: "We focus on mixing uniformity, dosing stability and predictable performance on the production line.",
          kk: "Араластыру біркелкілігіне, дозалау тұрақтылығына және желідегі болжамды жұмысқа назар аударамыз.",
        },
      },
      {
        title: {
          ru: "Поддержка запуска новых линеек",
          en: "Support for new line launches",
          kk: "Жаңа желілерді іске қосуға қолдау",
        },
        text: {
          ru: "Категория подходит для контрактного производства, private label и обновления базовых премиксных платформ.",
          en: "Suitable for contract manufacturing, private label projects and refresh of existing premix platforms.",
          kk: "Контракт өндірісі, private label жобалары және қолданыстағы премикс платформаларын жаңарту үшін қолайлы.",
        },
      },
    ],
    metrics: [
      {
        value: "2",
        label: {
          ru: "ключевые продуктовые платформы",
          en: "core product platforms",
          kk: "негізгі өнім платформасы",
        },
      },
      {
        value: "4-6 нед.",
        label: {
          ru: "типовой цикл запуска матрицы",
          en: "typical matrix launch cycle",
          kk: "матрицаны іске қосудың әдеттегі циклі",
        },
      },
    ],
    products: feedProductionFeedimportProducts,
    ctaTitle: {
      ru: "Нужна поддержка по рецептуре и запуску продукта?",
      en: "Need support with formula work and product launch?",
      kk: "Рецептура және өнімді іске қосу бойынша қолдау керек пе?",
    },
    ctaText: {
      ru: "Команда IMPXFIT подготовит маршрут от исходной задачи до производственного ввода.",
      en: "The IMPXFIT team will build a route from the initial task to implementation on site.",
      kk: "IMPXFIT командасы бастапқы міндеттен өндірістік енгізуге дейінгі маршрутты дайындайды.",
    },
  },
  {
    slug: "cattle",
    icon: "cattle",
    coverImage: "/media/catalog/cattle-hero.png",
    productGroups: cattleFeedimportGroups,
    title: {
      ru: "Продукты для КРС",
      en: "Products for cattle",
      kk: "ІҚМ-ге арналған өнімдер",
    },
    teaser: {
      ru: "Решения для рубца, транзитного периода и устойчивой молочной продуктивности.",
      en: "Solutions for rumen health, transition period and stable milk productivity.",
      kk: "Месқарын, өтпелі кезең және тұрақты сүт өнімділігіне арналған шешімдер.",
    },
    summary: {
      ru: "Категория ориентирована на молочные и мясные комплексы, где важны поедаемость, здоровье рубца, старт лактации и сохранение производственной устойчивости.",
      en: "This category is designed for dairy and beef sites where intake, rumen health, lactation start and operational stability are critical.",
      kk: "Бұл бағыт сүт және ет кешендеріне арналған, мұнда жейтіндік, месқарын саулығы, лактацияның басталуы және тұрақты өндіріс маңызды.",
    },
    description: {
      ru: "Решения адаптируются под уровень продуктивности, качество объемистых кормов, сезонные риски и экономику молочного стада.",
      en: "Solutions are adapted to productivity level, forage quality, seasonal risks and the economics of the dairy herd.",
      kk: "Шешімдер өнімділік деңгейіне, көлемді азық сапасына, маусымдық тәуекелдерге және сүт табыны экономикасына бейімделеді.",
    },
    focusAreas: {
      ru: ["Рубцовая стабильность", "Транзитный период", "Старт лактации"],
      en: ["Rumen stability", "Transition period", "Lactation start"],
      kk: ["Месқарын тұрақтылығы", "Өтпелі кезең", "Лактация басталуы"],
    },
    capabilities: [
      {
        title: {
          ru: "Поддержка рубцовой функции",
          en: "Support for rumen function",
          kk: "Месқарын қызметін қолдау",
        },
        text: {
          ru: "Работаем с задачами по стабилизации переваримости и снижению рисков по субклиническому ацидозу.",
          en: "We address digestibility stabilization and the reduction of subclinical acidosis risks.",
          kk: "Қорытылуды тұрақтандыру және субклиникалық ацидоз қаупін азайту міндеттерімен жұмыс істейміз.",
        },
      },
      {
        title: {
          ru: "Управление транзитным периодом",
          en: "Transition period management",
          kk: "Өтпелі кезеңді басқару",
        },
        text: {
          ru: "Подбираем решения для сухостоя и ранней лактации с учетом кормовой базы и метаболических рисков.",
          en: "We select solutions for dry cows and early lactation, taking into account the feeding base and metabolic risks.",
          kk: "Құрғақ кезең мен ерте лактацияға арналған шешімдерді азық базасы мен метаболикалық тәуекелдерді ескере отырып таңдаймыз.",
        },
      },
      {
        title: {
          ru: "Работа на уровне фермы и рациона",
          en: "Farm and ration level implementation",
          kk: "Ферма және рацион деңгейінде енгізу",
        },
        text: {
          ru: "Категория применяется не в отрыве, а в связке с оценкой объемистых кормов, структуры рациона и контроля по группе.",
          en: "The category works in connection with forage evaluation, ration structure and group-level control.",
          kk: "Бұл бағыт көлемді азықты бағалау, рацион құрылымы және топтық бақылаумен бірге қолданылады.",
        },
      },
    ],
    metrics: [
      {
        value: "2",
        label: {
          ru: "основные линии для КРС",
          en: "core cattle lines",
          kk: "ІҚМ үшін негізгі желі",
        },
      },
      {
        value: "ферма",
        label: {
          ru: "ориентация на внедрение в хозяйстве",
          en: "farm-level implementation focus",
          kk: "шаруашылықта енгізуге бағытталған",
        },
      },
    ],
    products: cattleFeedimportProducts,
    ctaTitle: {
      ru: "Обсудим программу для молочного или мясного комплекса",
      en: "Let us discuss a program for your dairy or beef site",
      kk: "Сүт немесе ет кешеніне арналған бағдарламаны талқылайық",
    },
    ctaText: {
      ru: "IMPXFIT помогает связать продукт, рацион и управленческую задачу в единую рабочую схему.",
      en: "IMPXFIT connects the product, the ration and the management task into one working model.",
      kk: "IMPXFIT өнімді, рационды және басқарушылық міндетті бір жұмыс моделіне біріктіреді.",
    },
  },
  {
    slug: "poultry",
    icon: "poultry",
    coverImage: "/media/catalog/poultry-hero.jpg",
    productGroups: poultryFeedimportGroups,
    title: {
      ru: "Продукты для птицы",
      en: "Products for poultry",
      kk: "Құсқа арналған өнімдер",
    },
    teaser: {
      ru: "Линии для бройлеров и несушки с акцентом на конверсию, кишечную стабильность и качество яйца.",
      en: "Broiler and layer lines focused on conversion, gut stability and egg quality.",
      kk: "Бройлер мен жұмыртқалаушы құсқа арналған конверсия, ішек тұрақтылығы және жұмыртқа сапасына бағытталған желілер.",
    },
    summary: {
      ru: "Категория предназначена для интегрированных птицеводческих предприятий и комбикормовых площадок, где важны предсказуемый рост, санитарный статус и экономика партии.",
      en: "Designed for integrated poultry businesses and feed sites where predictable growth, sanitary status and flock economics matter.",
      kk: "Бұл бағыт болжамды өсім, санитарлық статус және партия экономикасы маңызды құс кәсіпорындары мен жем алаңдарына арналған.",
    },
    description: {
      ru: "Решения позволяют выстроить линии под старт, рост и продуктивный цикл несушки без перегруженной продуктовой архитектуры.",
      en: "The solutions help build lines for start, growth and laying phases without an overloaded product architecture.",
      kk: "Шешімдер старт, өсу және жұмыртқалау кезеңдеріне арналған желілерді артық күрделіліксіз құруға мүмкіндік береді.",
    },
    focusAreas: {
      ru: ["Конверсия корма", "Кишечная устойчивость", "Качество яйца"],
      en: ["Feed conversion", "Gut resilience", "Egg quality"],
      kk: ["Жем конверсиясы", "Ішек тұрақтылығы", "Жұмыртқа сапасы"],
    },
    capabilities: [
      {
        title: {
          ru: "Поддержка продуктивности бройлера",
          en: "Broiler productivity support",
          kk: "Бройлер өнімділігін қолдау",
        },
        text: {
          ru: "Работаем с программами, где нужна плотная производительность при контроле кишечных рисков и себестоимости.",
          en: "We work with programs that need dense productivity while controlling gut risks and cost pressure.",
          kk: "Ішек тәуекелі мен өзіндік құнды бақылай отырып жоғары өнімділік қажет бағдарламалармен жұмыс істейміз.",
        },
      },
      {
        title: {
          ru: "Решения для несушки",
          en: "Solutions for layers",
          kk: "Жұмыртқалаушы құсқа арналған шешімдер",
        },
        text: {
          ru: "Фокус на стабильности скорлупы, сохранении яйценоскости и выравнивании партии.",
          en: "Focused on shell quality, egg output stability and flock uniformity.",
          kk: "Қабық сапасына, жұмыртқа өнімділігі мен партия біркелкілігіне бағытталған.",
        },
      },
      {
        title: {
          ru: "Сопровождение на уровне программы",
          en: "Program-level support",
          kk: "Бағдарлама деңгейіндегі қолдау",
        },
        text: {
          ru: "Подключаемся к формированию продуктовой логики по возрастам и производственным фазам.",
          en: "We support the design of product logic by age and production phase.",
          kk: "Жас және өндірістік кезең бойынша өнім логикасын қалыптастыруға қатысамыз.",
        },
      },
    ],
    metrics: [
      {
        value: "2",
        label: {
          ru: "линии для птицеводства",
          en: "poultry lines",
          kk: "құс бағытына арналған желі",
        },
      },
      {
        value: "старт-финиш",
        label: {
          ru: "работа по фазам выращивания",
          en: "support across production phases",
          kk: "өсіру кезеңдері бойынша жұмыс",
        },
      },
    ],
    products: poultryFeedimportProducts,
    ctaTitle: {
      ru: "Подберем линию для бройлера или несушки",
      en: "We can match the right line for broilers or layers",
      kk: "Бройлерге немесе жұмыртқалаушы құсқа лайық желіні таңдаймыз",
    },
    ctaText: {
      ru: "С учетом возраста птицы, текущей программы и целевой экономики партии.",
      en: "Taking into account bird age, the current program and the target batch economics.",
      kk: "Құс жасы, ағымдағы бағдарлама және партия экономикасы ескеріледі.",
    },
  },
  {
    slug: "swine",
    icon: "swine",
    coverImage: "/media/catalog/swine-hero.jpg",
    productGroups: swineFeedimportGroups,
    title: {
      ru: "Продукты для свиноводства",
      en: "Products for swine",
      kk: "Шошқа шаруашылығына арналған өнімдер",
    },
    teaser: {
      ru: "Позиции для поросят и маточного стада с акцентом на старт, устойчивость и производственный ритм.",
      en: "Solutions for piglets and sow units with focus on start-up, resilience and production rhythm.",
      kk: "Торайлар мен аналық табынға арналған старт, тұрақтылық және өндірістік ырғаққа бағытталған позициялар.",
    },
    summary: {
      ru: "Категория закрывает потребности предприятий, которым важно стабильно провести поросенка через старт и поддержать маточное стадо на уровне воспроизводства.",
      en: "This category supports farms that need piglet stability after weaning and reliable sow productivity.",
      kk: "Бұл бағыт торайды старт кезеңінен тұрақты өткізу және аналық табынды қолдау маңызды кәсіпорындарға арналған.",
    },
    description: {
      ru: "Продуктовая логика ориентирована на практическое использование в стартовых и воспроизводительных программах с дальнейшей настройкой под хозяйство.",
      en: "The product logic is built for practical use in starter and reproductive programs with farm-level adjustment.",
      kk: "Өнім логикасы стартерлік және репродуктивтік бағдарламаларда практикалық қолдануға және шаруашылыққа бейімдеуге арналған.",
    },
    focusAreas: {
      ru: ["Старт поросенка", "Маточное стадо", "Стабильность по группе"],
      en: ["Piglet start", "Sow support", "Group stability"],
      kk: ["Торай старты", "Аналық табын", "Топ тұрақтылығы"],
    },
    capabilities: [
      {
        title: {
          ru: "Поддержка старта после отъема",
          en: "Support after weaning",
          kk: "Емшектен кейінгі қолдау",
        },
        text: {
          ru: "Работаем с задачами по поедаемости, устойчивости ЖКТ и снижению стресса стартового периода.",
          en: "We support intake, gut resilience and reduced stress during the starter phase.",
          kk: "Старт кезеңіндегі жейтіндік, асқазан-ішек тұрақтылығы және стрессті азайту міндеттерімен жұмыс істейміз.",
        },
      },
      {
        title: {
          ru: "Сопровождение маточного стада",
          en: "Sow unit support",
          kk: "Аналық табынды сүйемелдеу",
        },
        text: {
          ru: "Решения подбираются под репродуктивный цикл, кондицию свиноматки и требования к выравниванию помета.",
          en: "Solutions are matched to the reproductive cycle, sow condition and litter uniformity goals.",
          kk: "Шешімдер репродуктивтік циклге, мегежіннің кондициясына және торай біркелкілігіне қарай таңдалады.",
        },
      },
      {
        title: {
          ru: "Интеграция в производственную схему",
          en: "Integration into the production scheme",
          kk: "Өндірістік схемаға интеграция",
        },
        text: {
          ru: "Сопровождаем внедрение вместе с корректировкой рациона и производственных чек-поинтов.",
          en: "We support implementation together with ration adjustment and production checkpoints.",
          kk: "Енгізуді рационды түзету және өндірістік бақылау нүктелерімен бірге сүйемелдейміз.",
        },
      },
    ],
    metrics: [
      {
        value: "2",
        label: {
          ru: "решения для свиноводства",
          en: "solutions for swine",
          kk: "шошқаға арналған шешім",
        },
      },
      {
        value: "старт + воспроизводство",
        label: {
          ru: "две ключевые зоны работы",
          en: "two core production zones",
          kk: "екі негізгі өндірістік аймақ",
        },
      },
    ],
    products: swineFeedimportProducts,
    ctaTitle: {
      ru: "Нужна программа под старт или воспроизводство?",
      en: "Need a program for starter or reproduction work?",
      kk: "Старт немесе репродукция бағдарламасы керек пе?",
    },
    ctaText: {
      ru: "IMPXFIT адаптирует решение под схему хозяйства и производственные ограничения.",
      en: "IMPXFIT adapts the solution to your farm scheme and production limitations.",
      kk: "IMPXFIT шешімді шаруашылық сызбасы мен өндірістік шектеулерге бейімдейді.",
    },
  },
  {
    slug: "veterinary",
    icon: "vet",
    coverImage: "/media/catalog/veterinary-hero.png",
    title: {
      ru: "Ветеринарное направление",
      en: "Veterinary solutions",
      kk: "Ветеринарлық бағыт",
    },
    teaser: {
      ru: "Поддержка здоровья, восстановления и биобезопасности на производстве.",
      en: "Support for health, recovery and biosecurity on production sites.",
      kk: "Өндірістегі денсаулық, қалпына келу және биоқауіпсіздікті қолдау.",
    },
    summary: {
      ru: "Категория объединяет прикладные решения, которые помогают ветеринарной службе и производству быстрее реагировать на стресс, восстановление и санитарные риски.",
      en: "The category brings together practical solutions that help veterinary teams react faster to stress, recovery needs and sanitary risks.",
      kk: "Бұл бағыт ветеринарлық қызмет пен өндірістің стресс, қалпына келу және санитарлық тәуекелдерге тез әрекет етуіне көмектесетін шешімдерді біріктіреді.",
    },
    description: {
      ru: "Вместо перегруженной аптечной витрины сделали компактную архитектуру с понятными точками применения и возможностью расширять линейку.",
      en: "Instead of an overloaded assortment, the category uses a compact architecture with clear use cases and space for future expansion.",
      kk: "Артық жүктелген ассортименттің орнына біз анық қолдану нүктелері мен кеңейтуге ыңғайлы ықшам архитектура жасадық.",
    },
    focusAreas: {
      ru: ["Поддержка печени", "Восстановление", "Биобезопасность"],
      en: ["Liver support", "Recovery", "Biosecurity"],
      kk: ["Бауырды қолдау", "Қалпына келу", "Биоқауіпсіздік"],
    },
    capabilities: [
      {
        title: {
          ru: "Решения под стрессовые периоды",
          en: "Solutions for stress periods",
          kk: "Стресстік кезеңдерге арналған шешімдер",
        },
        text: {
          ru: "Поддерживаем производственные циклы, где важно быстро восстановить группу после нагрузки, перевода или технологического сбоя.",
          en: "We support production cycles where rapid recovery is needed after stress, transfer or process disruption.",
          kk: "Стресс, ауыстыру немесе технологиялық ақаудан кейін топты тез қалпына келтіру қажет өндірістік циклдермен жұмыс істейміз.",
        },
      },
      {
        title: {
          ru: "Фокус на практическую применимость",
          en: "Focus on practical applicability",
          kk: "Практикалық қолдануға басымдық",
        },
        text: {
          ru: "Каждая позиция описана через понятный сценарий применения, а не через перегруженный перечень свойств.",
          en: "Each position is described through a clear use scenario rather than an overloaded property list.",
          kk: "Әр позиция артық сипаттама емес, түсінікті қолдану сценарийі арқылы сипатталады.",
        },
      },
      {
        title: {
          ru: "Связка с ветеринарной службой клиента",
          en: "Aligned with the client's veterinary service",
          kk: "Клиенттің ветеринарлық қызметімен байланыс",
        },
        text: {
          ru: "Поддерживаем коммуникацию с ветеринарной службой по схеме использования, срокам и рабочим ограничениям.",
          en: "We coordinate usage schemes, timing and practical limitations with the client veterinary team.",
          kk: "Қолдану схемасы, мерзімдер және жұмыс шектеулері бойынша клиенттің ветеринарлық қызметімен үйлестіреміз.",
        },
      },
    ],
    metrics: [
      {
        value: "2",
        label: {
          ru: "прикладные ветеринарные линии",
          en: "applied veterinary lines",
          kk: "қолданбалы ветеринарлық желі",
        },
      },
      {
        value: "service-ready",
        label: {
          ru: "архитектура под расширение",
          en: "architecture ready to expand",
          kk: "кеңеюге дайын архитектура",
        },
      },
    ],
    products: [
      {
        slug: "hepato-protect",
        badge: {
          ru: "Recovery line",
          en: "Recovery line",
          kk: "Recovery line",
        },
        name: {
          ru: "IMPXFIT Hepato Protect",
          en: "IMPXFIT Hepato Protect",
          kk: "IMPXFIT Hepato Protect",
        },
        summary: {
          ru: "Поддержка функционального состояния печени в стрессовые и восстановительные периоды.",
          en: "Support for liver function during stress and recovery periods.",
          kk: "Стресс пен қалпына келу кезеңдерінде бауыр қызметін қолдау.",
        },
        description: {
          ru: "Решение для производственных схем, где важно мягко поддержать метаболический статус без усложнения общей программы.",
          en: "A solution for production schemes that require gentle metabolic support without overcomplicating the program.",
          kk: "Жалпы бағдарламаны күрделендірмей метаболикалық статусты жұмсақ қолдау қажет өндірістік схемаларға арналған.",
        },
        benefits: {
          ru: [
            "Подходит для программ восстановления",
            "Удобен для сопровождения стрессовых периодов",
            "Встраивается в практику ветеринарной службы",
          ],
          en: [
            "Suitable for recovery programs",
            "Useful during stress periods",
            "Fits veterinary service routines",
          ],
          kk: [
            "Қалпына келтіру бағдарламаларына сай",
            "Стрестік кезеңдерде ыңғайлы",
            "Ветеринарлық қызмет жұмысына енеді",
          ],
        },
        application: {
          ru: "Восстановительные и переходные периоды на производственных площадках.",
          en: "Recovery and transition periods on production sites.",
          kk: "Өндірістік алаңдардағы қалпына келу және өтпелі кезеңдер.",
        },
        form: {
          ru: "Ветеринарная поддержка",
          en: "Veterinary support product",
          kk: "Ветеринарлық қолдау өнімі",
        },
        packaging: {
          ru: "Флакон / канистра по запросу",
          en: "Bottle / canister upon request",
          kk: "Құты / канистра сұраныс бойынша",
        },
        leadTime: {
          ru: "2-5 недель",
          en: "2-5 weeks",
          kk: "2-5 апта",
        },
        tags: {
          ru: ["Ветеринария", "Печень", "Восстановление"],
          en: ["Veterinary", "Liver", "Recovery"],
          kk: ["Ветеринария", "Бауыр", "Қалпына келу"],
        },
        specs: [
          {
            label: { ru: "Назначение", en: "Purpose", kk: "Мақсаты" },
            value: {
              ru: "Функциональная поддержка печени",
              en: "Functional liver support",
              kk: "Бауырдың функционалдық қолдауы",
            },
          },
          {
            label: { ru: "Сценарий", en: "Scenario", kk: "Сценарий" },
            value: {
              ru: "Стресс и восстановление",
              en: "Stress and recovery",
              kk: "Стресс және қалпына келу",
            },
          },
          {
            label: { ru: "Коммуникация", en: "Communication", kk: "Коммуникация" },
            value: {
              ru: "Через ветеринарную службу клиента",
              en: "Through the client's veterinary service",
              kk: "Клиенттің ветеринарлық қызметі арқылы",
            },
          },
        ],
      },
      {
        slug: "electro-recovery",
        badge: {
          ru: "Support line",
          en: "Support line",
          kk: "Support line",
        },
        name: {
          ru: "IMPXFIT Electro Recovery",
          en: "IMPXFIT Electro Recovery",
          kk: "IMPXFIT Electro Recovery",
        },
        summary: {
          ru: "Электролитная и восстановительная поддержка для стрессовых, транспортных и жаровых периодов.",
          en: "Electrolyte and recovery support for stress, transport and heat periods.",
          kk: "Стресс, тасымалдау және ыстық кезеңдерге арналған электролиттік және қалпына келтіру қолдауы.",
        },
        description: {
          ru: "Применяется в схемах, где важна быстрая реакция на обезвоживание, стрессовую нагрузку и необходимость стабилизировать состояние группы.",
          en: "Used where rapid response to dehydration, stress load and group stabilization is required.",
          kk: "Сусыздану, стресс жүктемесі және топ жағдайын тұрақтандыру қажет болғанда қолданылатын шешім.",
        },
        benefits: {
          ru: [
            "Удобен для критических производственных периодов",
            "Поддерживает восстановление после нагрузки",
            "Легко включается в протокол сопровождения",
          ],
          en: [
            "Useful in critical production periods",
            "Supports recovery after stress load",
            "Easy to include in working protocols",
          ],
          kk: [
            "Өндірістегі сындарлы кезеңдерде ыңғайлы",
            "Жүктемеден кейін қалпына келуді қолдайды",
            "Жұмыс хаттамасына оңай енгізіледі",
          ],
        },
        application: {
          ru: "Периоды жары, транспорта, вакцинации и восстановительных мероприятий.",
          en: "Heat periods, transportation, vaccination and recovery protocols.",
          kk: "Ыстық кезеңдер, тасымалдау, вакцинация және қалпына келтіру хаттамалары.",
        },
        form: {
          ru: "Растворимый восстановительный комплекс",
          en: "Soluble recovery complex",
          kk: "Еритін қалпына келтіру кешені",
        },
        packaging: {
          ru: "Пакет 1 кг / ведро 5 кг",
          en: "1 kg pack / 5 kg bucket",
          kk: "1 кг пакет / 5 кг шелек",
        },
        leadTime: {
          ru: "2-4 недели",
          en: "2-4 weeks",
          kk: "2-4 апта",
        },
        tags: {
          ru: ["Электролиты", "Стресс", "Восстановление"],
          en: ["Electrolytes", "Stress", "Recovery"],
          kk: ["Электролиттер", "Стресс", "Қалпына келу"],
        },
        specs: [
          {
            label: { ru: "Тип", en: "Type", kk: "Түрі" },
            value: {
              ru: "Восстановительный электролитный комплекс",
              en: "Recovery electrolyte complex",
              kk: "Қалпына келтіруші электролиттік кешен",
            },
          },
          {
            label: { ru: "Сценарий", en: "Scenario", kk: "Сценарий" },
            value: {
              ru: "Жара, транспорт, стресс",
              en: "Heat, transport, stress",
              kk: "Ыстық, тасымалдау, стресс",
            },
          },
          {
            label: { ru: "Формат", en: "Format", kk: "Формат" },
            value: {
              ru: "Для оперативного включения в протокол",
              en: "For rapid inclusion into protocols",
              kk: "Хаттамаға жедел енгізу үшін",
            },
          },
        ],
      },
    ],
    ctaTitle: {
      ru: "Нужна компактная и рабочая ветеринарная архитектура?",
      en: "Need a compact but practical veterinary architecture?",
      kk: "Ықшам әрі жұмысқа жарамды ветеринарлық архитектура керек пе?",
    },
    ctaText: {
      ru: "IMPXFIT поможет собрать направление без лишнего ассортимента и с понятной логикой применения.",
      en: "IMPXFIT helps build the category without excess assortment and with a clear use logic.",
      kk: "IMPXFIT артық ассортиментсіз және түсінікті қолдану логикасымен бағыт құруға көмектеседі.",
    },
  },
  {
    slug: "crop-feed-solutions",
    icon: "crop",
    coverImage: "/media/catalog/crop-feed-solutions-hero.png",
    productGroups: cropFeedimportGroups,
    title: {
      ru: "Растениеводство / корма / сырьевые решения",
      en: "Crop, feed and raw material solutions",
      kk: "Өсімдік шаруашылығы / жем / шикізат шешімдері",
    },
    teaser: {
      ru: "Сырьевые компоненты, решения по силосу и работа с качеством объемистых кормов.",
      en: "Raw materials, silage solutions and forage quality work.",
      kk: "Шикізат компоненттері, сүрлем шешімдері және көлемді азық сапасымен жұмыс.",
    },
    summary: {
      ru: "Категория связывает растениеводческий и кормовой контур: от сохранности силоса до подбора сырьевой матрицы под производство и животноводство.",
      en: "This category connects the crop and feed loop, from silage preservation to raw material matrix selection for production and livestock operations.",
      kk: "Бұл бағыт өсімдік және жем контурын байланыстырады: сүрлем сақталуынан бастап өндіріс пен мал шаруашылығына арналған шикізат матрицасына дейін.",
    },
    description: {
      ru: "Решения рассчитаны на хозяйства и заводы, где важно управлять качеством сырья, устойчивостью хранения и воспроизводимостью рецептуры.",
      en: "The solutions are designed for farms and plants that need control over raw material quality, storage stability and formula repeatability.",
      kk: "Шешімдер шикізат сапасын, сақтау тұрақтылығын және рецепт қайталануын басқаруы қажет шаруашылықтар мен зауыттарға арналған.",
    },
    focusAreas: {
      ru: ["Силос", "Сырьевая матрица", "Качество кормов"],
      en: ["Silage", "Raw material matrix", "Feed quality"],
      kk: ["Сүрлем", "Шикізат матрицасы", "Жем сапасы"],
    },
    capabilities: [
      {
        title: {
          ru: "Сохранность объемистых кормов",
          en: "Forage preservation",
          kk: "Көлемді азықты сақтау",
        },
        text: {
          ru: "Помогаем выстроить работу с силосом и сенажом, чтобы снизить потери и повысить предсказуемость кормления.",
          en: "We help build silage and haylage strategies that reduce losses and improve feeding predictability.",
          kk: "Сүрлем мен пішендеме бойынша жұмысты шығынды азайтып, қоректендіру болжамдылығын арттыратындай етіп құруға көмектесеміз.",
        },
      },
      {
        title: {
          ru: "Подбор сырьевой логики",
          en: "Raw material logic selection",
          kk: "Шикізат логикасын таңдау",
        },
        text: {
          ru: "Формируем матрицу под реальную доступность компонентов, сезонность и требования по стоимости.",
          en: "We form a matrix based on actual component availability, seasonality and cost targets.",
          kk: "Компонент қолжетімділігіне, маусымдылыққа және құн талаптарына сай матрица құрамыз.",
        },
      },
      {
        title: {
          ru: "Связь с животноводческими программами",
          en: "Connected to livestock programs",
          kk: "Мал шаруашылығы бағдарламаларымен байланыс",
        },
        text: {
          ru: "Категория помогает не только закупить сырье, но и встроить его в рабочую программу на ферме или на заводе.",
          en: "The category is not only about sourcing but also about integrating materials into a practical program on site.",
          kk: "Бұл бағыт тек шикізат сатып алу емес, оны ферма не зауыт бағдарламасына енгізуге де көмектеседі.",
        },
      },
    ],
    metrics: [
      {
        value: "2",
        label: {
          ru: "ключевые сырьевые позиции",
          en: "core raw material lines",
          kk: "негізгі шикізат желісі",
        },
      },
      {
        value: "field-to-feed",
        label: {
          ru: "логика от поля до рациона",
          en: "logic from field to ration",
          kk: "егістіктен рационға дейінгі логика",
        },
      },
    ],
    products: cropFeedimportProducts,
    ctaTitle: {
      ru: "Хотите связать сырье, заготовку и кормовую программу?",
      en: "Want to connect raw materials, harvest and feeding program?",
      kk: "Шикізат, дайындау және қоректендіру бағдарламасын байланыстыру керек пе?",
    },
    ctaText: {
      ru: "IMPXFIT поможет выстроить практическую цепочку от поля и хранения до рациона и производственной экономики.",
      en: "IMPXFIT can build a practical chain from field and storage to the ration and business economics.",
      kk: "IMPXFIT егістік пен сақтаудан рацион мен өндірістік экономикаға дейінгі практикалық тізбекті құрады.",
    },
  },
  {
    slug: "technical-support",
    icon: "technology",
    coverImage: "/media/catalog/technical-support-hero.png",
    title: {
      ru: "Технологическое сопровождение",
      en: "Technological support",
      kk: "Технологиялық сүйемелдеу",
    },
    teaser: {
      ru: "Аудит, мобильная лаборатория и сопровождение внедрения на площадке клиента.",
      en: "Audit, mobile laboratory and on-site implementation support.",
      kk: "Аудит, мобильді зертхана және клиент алаңындағы енгізуді сүйемелдеу.",
    },
    summary: {
      ru: "Категория закрывает сервисную часть бизнеса: когда требуется не только продукт, но и полевой аудит, проверка сырья, рациона или схемы производства.",
      en: "This category covers the service side of the business when the client needs more than a product: field audit, raw material review, ration review or process support.",
      kk: "Бұл бағыт клиентке тек өнім емес, далалық аудит, шикізат тексеруі, рационды талдау немесе өндірістік сүйемелдеу қажет болған жағдайларды қамтиды.",
    },
    description: {
      ru: "Сервисные позиции построены как масштабируемые пакеты, которые легко дополнять новыми сценариями без изменения общей архитектуры сайта.",
      en: "The service positions are built as scalable packages that can be expanded with new scenarios without changing the overall site architecture.",
      kk: "Сервистік позициялар сайттың жалпы архитектурасын өзгертпей жаңа сценарийлермен толықтыруға болатын масштабталатын пакеттер ретінде жасалған.",
    },
    focusAreas: {
      ru: ["Аудит рациона", "Мобильная лаборатория", "Внедрение на площадке"],
      en: ["Ration audit", "Mobile laboratory", "On-site implementation"],
      kk: ["Рацион аудиті", "Мобильді зертхана", "Алаңдағы енгізу"],
    },
    capabilities: [
      {
        title: {
          ru: "Сервис с понятным результатом",
          en: "Service with a clear outcome",
          kk: "Нәтижесі түсінікті сервис",
        },
        text: {
          ru: "Каждый пакет описан через результат для клиента: что проверяем, что выдаем и как интегрируем в дальнейшую работу.",
          en: "Each package is described through the client result: what is checked, what is delivered and how it is integrated into further work.",
          kk: "Әр пакет клиент нәтижесі арқылы сипатталады: не тексеріледі, не беріледі және ары қарай жұмысқа қалай енеді.",
        },
      },
      {
        title: {
          ru: "Подключение экспертов на объекте",
          en: "Experts on site",
          kk: "Алаңда сарапшыларды қосу",
        },
        text: {
          ru: "Технологи и специалисты IMPXFIT подключаются к аудиту и внедрению там, где нужна практическая верификация, а не только удаленная консультация.",
          en: "IMPXFIT technologists join audits and implementation where practical verification is needed, not only remote consulting.",
          kk: "IMPXFIT технологтары мен мамандары тек қашықтан кеңес емес, практикалық верификация керек жерде аудитке және енгізуге қатысады.",
        },
      },
      {
        title: {
          ru: "База под будущий сервисный рост",
          en: "Base for future service expansion",
          kk: "Болашақ сервистік өсімге база",
        },
        text: {
          ru: "Категория легко масштабируется новыми аудитами, лабораторными пакетами и инженерным сопровождением.",
          en: "The category scales easily with new audits, laboratory packages and engineering support.",
          kk: "Бұл бағыт жаңа аудиттермен, зертханалық пакеттермен және инженерлік сүйемелдеумен оңай кеңейеді.",
        },
      },
    ],
    metrics: [
      {
        value: "2",
        label: {
          ru: "сервисных пакета на старте",
          en: "service packages at launch",
          kk: "старттағы сервистік пакет",
        },
      },
      {
        value: "scalable",
        label: {
          ru: "готовность к расширению",
          en: "ready for expansion",
          kk: "кеңеюге дайын",
        },
      },
    ],
    products: [
      {
        slug: "ration-audit",
        badge: {
          ru: "Audit package",
          en: "Audit package",
          kk: "Audit package",
        },
        name: {
          ru: "IMPXFIT Ration Audit",
          en: "IMPXFIT Ration Audit",
          kk: "IMPXFIT Ration Audit",
        },
        summary: {
          ru: "Аудит рационов и кормовой схемы для хозяйств и производственных площадок.",
          en: "Ration and feeding scheme audit for farms and production sites.",
          kk: "Шаруашылықтар мен өндірістік алаңдарға арналған рацион және қоректендіру схемасының аудиті.",
        },
        description: {
          ru: "Пакет помогает выявить слабые места в рецептуре, логике ввода, стабильности сырья и практическом исполнении на площадке.",
          en: "The package identifies weak points in the formula, dosing logic, raw material stability and on-site execution.",
          kk: "Бұл пакет рецептура, енгізу логикасы, шикізат тұрақтылығы және алаңдағы практикалық орындаудағы әлсіз тұстарды анықтайды.",
        },
        benefits: {
          ru: [
            "Показывает точки потерь и неэффективности",
            "Сопровождается практическими рекомендациями",
            "Подходит для корректировки программы кормления",
          ],
          en: [
            "Shows loss and inefficiency points",
            "Comes with practical recommendations",
            "Suitable for feeding program correction",
          ],
          kk: [
            "Шығын мен тиімсіздік нүктелерін көрсетеді",
            "Практикалық ұсыныстармен бірге жүреді",
            "Қоректендіру бағдарламасын түзетуге сай",
          ],
        },
        application: {
          ru: "Молочные, мясные, птицеводческие и свиноводческие предприятия.",
          en: "Dairy, beef, poultry and swine operations.",
          kk: "Сүт, ет, құс және шошқа кәсіпорындары.",
        },
        form: {
          ru: "Сервисный аудит",
          en: "Service audit",
          kk: "Сервистік аудит",
        },
        packaging: {
          ru: "Проектный формат",
          en: "Project format",
          kk: "Жобалық формат",
        },
        leadTime: {
          ru: "От 5 рабочих дней",
          en: "From 5 business days",
          kk: "5 жұмыс күнінен бастап",
        },
        tags: {
          ru: ["Аудит", "Рацион", "Технология"],
          en: ["Audit", "Ration", "Technology"],
          kk: ["Аудит", "Рацион", "Технология"],
        },
        specs: [
          {
            label: { ru: "Формат", en: "Format", kk: "Формат" },
            value: {
              ru: "Аудит с отчетом и рекомендациями",
              en: "Audit with report and recommendations",
              kk: "Есеп пен ұсыныстары бар аудит",
            },
          },
          {
            label: { ru: "Выход", en: "Deliverable", kk: "Нәтиже" },
            value: {
              ru: "Приоритетные точки корректировки",
              en: "Priority correction points",
              kk: "Басым түзету нүктелері",
            },
          },
          {
            label: { ru: "Команда", en: "Team", kk: "Команда" },
            value: {
              ru: "Технолог + менеджер проекта",
              en: "Technologist plus project manager",
              kk: "Технолог және жоба менеджері",
            },
          },
        ],
      },
      {
        slug: "mobile-lab-audit",
        badge: {
          ru: "Field service",
          en: "Field service",
          kk: "Field service",
        },
        name: {
          ru: "IMPXFIT Mobile Lab Audit",
          en: "IMPXFIT Mobile Lab Audit",
          kk: "IMPXFIT Mobile Lab Audit",
        },
        summary: {
          ru: "Выездной аудит с мобильной лабораторией для оценки сырья и оперативной диагностики.",
          en: "Field audit with a mobile laboratory for raw material assessment and rapid diagnostics.",
          kk: "Шикізатты бағалау және жедел диагностикаға арналған мобильді зертханамен көшпелі аудит.",
        },
        description: {
          ru: "Сервис применяется там, где нужно быстро снять вопрос по сырью, влажности, рискам хранения и базовым индикаторам качества без долгого ожидания.",
          en: "Used where the business needs a fast answer on raw materials, moisture, storage risks and baseline quality indicators.",
          kk: "Шикізат, ылғалдылық, сақтау тәуекелі және негізгі сапа көрсеткіштері бойынша тез жауап керек болғанда қолданылады.",
        },
        benefits: {
          ru: [
            "Ускоряет принятие решений по сырью",
            "Помогает отработать риски хранения и кормления",
            "Сочетается с последующим технологическим маршрутом",
          ],
          en: [
            "Speeds up raw material decisions",
            "Helps address storage and feeding risks",
            "Connects well with follow-up technical work",
          ],
          kk: [
            "Шикізат бойынша шешім қабылдауды жеделдетеді",
            "Сақтау және қоректендіру тәуекелдерін пысықтауға көмектеседі",
            "Кейінгі технологиялық маршрутпен жақсы үйлеседі",
          ],
        },
        application: {
          ru: "Комбикормовые заводы, зернохранилища, животноводческие предприятия и логистические узлы.",
          en: "Feed mills, grain storage sites, livestock farms and logistics nodes.",
          kk: "Құрамажем зауыттары, астық сақтау орындары, мал кәсіпорындары және логистикалық тораптар.",
        },
        form: {
          ru: "Мобильный лабораторный пакет",
          en: "Mobile laboratory package",
          kk: "Мобильді зертханалық пакет",
        },
        packaging: {
          ru: "Выездная услуга",
          en: "Field service",
          kk: "Көшпелі қызмет",
        },
        leadTime: {
          ru: "По согласованному графику",
          en: "According to agreed schedule",
          kk: "Келісілген кесте бойынша",
        },
        tags: {
          ru: ["Лаборатория", "Сырье", "Диагностика"],
          en: ["Laboratory", "Raw materials", "Diagnostics"],
          kk: ["Зертхана", "Шикізат", "Диагностика"],
        },
        specs: [
          {
            label: { ru: "Тип сервиса", en: "Service type", kk: "Қызмет түрі" },
            value: {
              ru: "Выездная диагностика",
              en: "Field diagnostics",
              kk: "Көшпелі диагностика",
            },
          },
          {
            label: { ru: "Задача", en: "Goal", kk: "Мақсат" },
            value: {
              ru: "Оперативная оценка качества сырья",
              en: "Rapid raw material quality check",
              kk: "Шикізат сапасын жедел бағалау",
            },
          },
          {
            label: { ru: "Продолжение", en: "Next step", kk: "Келесі қадам" },
            value: {
              ru: "Интеграция в аудит или продуктовый подбор",
              en: "Integrated into audit or product matching",
              kk: "Аудитке немесе өнім таңдауға интеграция",
            },
          },
        ],
      },
    ],
    ctaTitle: {
      ru: "Нужен аудит, а не только прайс-лист?",
      en: "Need an audit, not only a price list?",
      kk: "Сізге тек прайс емес, аудит керек пе?",
    },
    ctaText: {
      ru: "IMPXFIT подключит сервисный пакет под задачу предприятия и предложит понятный следующий шаг.",
      en: "IMPXFIT will connect the right service package and propose a clear next step for your site.",
      kk: "IMPXFIT кәсіпорын міндетіне сай сервистік пакетті қосып, түсінікті келесі қадам ұсынады.",
    },
  },
];

const featuredProductSlugs = [
  "novasil-plus",
  "glycerin",
  "lupro-mix-nc",
  "biocontainment-aibi-lbp-15-10-f",
];
const hiddenCategorySlugs = new Set([
  "veterinary",
  "crop-feed-solutions",
  "technical-support",
]);

export function getCategories(locale: Locale): Category[] {
  return categoryRecords
    .filter((category) => !hiddenCategorySlugs.has(category.slug))
    .map((category) => localizeCategory(locale, category));
}

export function getCategory(locale: Locale, slug: string) {
  if (hiddenCategorySlugs.has(slug)) {
    return undefined;
  }
  const category = categoryRecords.find((item) => item.slug === slug);
  return category ? localizeCategory(locale, category) : undefined;
}

export function getProduct(locale: Locale, categorySlug: string, productSlug: string) {
  const category = getCategory(locale, categorySlug);

  if (!category) {
    return undefined;
  }

  return category.products.find((product) => product.slug === productSlug);
}

export function getFeaturedProducts(locale: Locale) {
  const categories = getCategories(locale);
  return featuredProductSlugs
    .map((slug) => {
      const category = categories.find((cat) =>
        cat.products.some((product) => product.slug === slug),
      );
      if (!category) {
        return undefined;
      }
      const product = category.products.find((p) => p.slug === slug);
      if (!product) {
        return undefined;
      }
      return {
        ...product,
        categorySlug: category.slug,
        categoryTitle: category.title,
        icon: category.icon,
      };
    })
    .filter(
      (item): item is NonNullable<typeof item> => item !== undefined,
    );
}

export function getAllCategoryParams() {
  return categoryRecords
    .filter((category) => !hiddenCategorySlugs.has(category.slug))
    .map((category) => ({ categorySlug: category.slug }));
}

export function getAllProductParams() {
  return categoryRecords
    .filter((category) => !hiddenCategorySlugs.has(category.slug))
    .flatMap((category) =>
      category.products.map((product) => ({
        categorySlug: category.slug,
        productSlug: product.slug,
      })),
    );
}
