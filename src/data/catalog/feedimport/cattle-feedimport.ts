import type { LocalizedProduct, LocalizedProductGroup } from "../../catalog";

import { T, TList } from "./l10n";
import { mycotoxinBinderProducts } from "./mycotoxin-products";

const cattleOnly: LocalizedProduct[] = [
  {
    slug: "glycerin",
    listingImage: "/media/catalog/cattle-hero.png",
    badge: T("Энергетические добавки", "Energy additives"),
    name: T("Глицерин", "Glycerin"),
    summary: T(
      "Глицерин участвует в синтезе глюкозы для быстрой энергии, повышает глюкозу крови и нормализует энергетический баланс.",
      "Glycerol is used to synthesize glucose for immediate energy in the animal body increases the content of glucose in the blood, normalizes energy balance.",
    ),
    description: T(
      "Снижается концентрация кетоновых тел, что сдерживает «жирную печень» и кетоз. Нет дефицита энергии. Можно смешивать с основным кормом или давать чистым.",
      "Glycerol is used to synthesize glucose for immediate energy in the animal body increases the content of glucose in the blood, normalizes energy balance. As a result, the concentration of ketone bodies in the blood decreases, thereby restraining the development of the “fatty liver” syndrome, preventing the occurrence of ketosis. There is no shortage of energy. In the process of feeding glycerol may be mixed with the main feed, or give in pure form.",
    ),
    benefits: TList(
      [
        "Доступный источник энергии по единице энергии",
        "Отобран и проверен для кормления животных",
        "Превращается в глюкозу для клеточного метаболизма",
        "Хорошо всасывается в кишечнике",
        "Высокая растворимость в воде",
        "Сладкий вкус повышает поедаемость",
      ],
      [
        "The most affordable power engineer in terms of energy unit",
        "Specially selected and tested for animal feeding",
        "Converts to glucose and provides energy for cellular metabolism",
        "Effectively absorbed into the intestines of animals",
        "Highly soluble in water",
        "Sweet taste increases feed intake",
      ],
    ),
    application: T(
      "За 3 недели до отёла 150 г/гол/сут; за 2 недели до отёла до 300 г/гол/сут; после отёла до 500 г/гол/сут с 14 по 100-й день.",
      "3 weeks before calving 150 g / head / day; 2 weeks before calving up to 300 g / head / day; after calving up to 500 g / head / day from 14 to 100 days",
    ),
    form: T("Глицерин", "Glycerol"),
    packaging: T("Пластиковый куб IBC 1300 кг", "plastic IBC cube at 1300 kg"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Энергия", "Кетоз", "КРС"], ["Energy", "Ketosis", "Cattle"]),
    specs: [],
  },
  {
    slug: "propylene-glycol",
    listingImage: "/media/catalog/cattle-hero.png",
    badge: T("Энергетические добавки", "Energy additives"),
    name: T("Пропиленгликоль, мин. 99,5 %", "Propylene Glycol, min. 99.5 %"),
    summary: T(
      "Кормовая добавка для поддержания и повышения глюкозы крови у лактирующих животных и снижения энергодефицита.",
      "Propylene glycol is used as a feed additive aimed at maintaining and increasing blood glucose level in lactating animals, reducing energy deficiency.",
    ),
    description: T(
      "Предотвращает кетоз, повышает удой и содержание жира и белка в молоке, снижает потерю массы, обладает антисептическими свойствами.",
      "Propylene glycol is used as a feed additive aimed at maintaining and increasing blood glucose level in lactating animals, reducing energy deficiency, it prevents the development of ketosis, leads to an increase in milk yield, fat and protein content in milk, prevents weight loss, and has an antiseptic property.",
    ),
    benefits: TList(
      [
        "Восполняет дефицит энергии в рационе дойных коров",
        "Повышает удой, жир и белок в молоке",
        "Быстрое и полное переваривание в рубце",
        "Снижение себестоимости корма",
        "Профилактика и лечение кетоза",
        "Баланс катионов и анионов",
        "Сокращение сервис-периода",
      ],
      [
        "Replenishing a lack of energy in the diet of lactating cows",
        "Increasing milk yield, fat and protein content in milk",
        "Fast and complete digestion in rumen",
        "Reduction of the cost of feed",
        "Prevention and treatment of ketosis",
        "Maintaining the balance of cations and anions",
        "Reducing the service period",
      ],
    ),
    application: T("Дозировка: 100–250 г на голову в сутки", "Dosage: from 100 to 250 g per head a day"),
    form: T("Жидкий пропиленгликоль", "Liquid propylene glycol"),
    packaging: T("Бочки 215 кг", "215 kg drums"),
    leadTime: T("1 год с даты производства", "1 year from the date of manufacture"),
    tags: TList(["Энергия", "Кетоз", "Молочное"], ["Energy", "Ketosis", "Dairy"]),
    specs: [
      { label: T("Условия хранения", "Storage conditions"), value: T("сухое прохладное место (до +25 °C)", "in a dry, cool place (up to +25°С)") },
      {
        label: T("Условия хранения", "Storage conditions"),
        value: T("жидкий пропиленгликоль — 1 год с даты производства", "liquid propylene glycol – 1 year from the date of manufacture"),
      },
    ],
  },
  {
    slug: "capaol",
    listingImage: "/media/catalog/cattle-hero.png",
    badge: T("Защищённый жир", "Protected fat"),
    name: T("КАПАОЛ (CAPAOL)", "КАПАОЛ (CAPAOL)"),
    summary: T(
      "Кормовая добавка для повышения молочной продуктивности коров и жирности молока.",
      "CAPAOL is a feed additive for increasing milk productivity of cows and milk fat content.",
    ),
    description: T(
      "Кальциевая соль длинноцепочечных жирных кислот: Ca ~10%; пальмитиновая 45–51%; олеиновая 32–38%; стеариновая 4–5%; линолевая 6–8%; усвояемость ~95%; NEL 5,9 Мкал/кг; метаболизируемая энергия 33,3 МДж.",
      "CAPAOL is a feed additive for increasing milk productivity of cows and milk fat content. Kapaol is a calcium salt of long-chain fatty acids and contains: Calcium – 10%; Palmitic acid – 45-51%; Oleic acid – 32-38%; Stearic acid – 4-5%; Linoleic acid – 6-8%; The digestibility of the product is – 95%; Net energy of lactation (NEL) – 5.9 Mcal/kg; Metabolizable energy – 33.3 MJ",
    ),
    benefits: TList(
      [
        "Источник энергии; высокая доля ненасыщенных жирных кислот (46%)",
        "Частично восполняет дефицит кальция у дойных коров",
        "Удой +2–4 л/сут, жирность молока до +0,7 п.п.",
        "Поддерживает живую массу; позволяет частично заменить основной корм при сохранении энергобаланса",
      ],
      [
        "Serves as a source of energy for cows, has a high content of unsaturated fatty acids (46%)",
        "Partially replenishes calcium deficiency in the body of lactating cows",
        "Increases milk yield by 2-4 liters per cow per day, increases the fat content in milk to 0.7%",
        "Allows you to maintain the live weight of cows, allows you to replace part of the main feed while maintaining energy balance.",
      ],
    ),
    application: T(
      "Высокоудойные коровы — 500 г/гол/сут; низкая и средняя продуктивность — 300–400 г/гол/сут.",
      "For high-yielding cows 500 g / head per day; For cows with low and average productivity 300-400 g / head per day",
    ),
    form: T("Защищённый жир", "Protected fat"),
    packaging: T("С основным кормом", "With main feed"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Жир", "Молочное", "CAPAOL"], ["Fat", "Dairy", "CAPAOL"]),
    specs: [],
  },
  {
    slug: "magnesium-sulfate",
    listingImage: "/media/catalog/cattle-hero.png",
    badge: T("Макроэлементы", "Macroelements"),
    name: T("Сульфат магния", "Magnesium sulfate"),
    summary: T(
      "MgSO4 — обогащение и баланс магнием и серой в кормах для с/х животных.",
      "Magnesium sulfate MgSO4 is used in the production of feed for enrichment and balancing the diet of farm animals for magnesium and sulfur.",
    ),
    description: T(
      "Для КРС, лошадей, овец и коз. Магний — ключевой минерал, участвует в ферментах и синтезе белка. Сера — кератин (шерсть, кожа, рога). Улучшает обмен, мышцы, СС и кости.",
      "Magnesium sulfate MgSO4 is used in the production of feed for enrichment and balancing the diet of farm animals for magnesium and sulfur. It is used in feeding cattle, horses, sheep and goats. It contains macroelements magnesium Mg and sulfur S. Magnesium is one of the most important mineral substances and should be included in the daily diet of animals. This macrocell is involved in the formation of enzymes, is an activator necessary for the synthesis of proteins. Sulfur in magnesium sulfate promotes the formation of keratin – an essential component of hair, skin and horns. The use of magnesium sulfate improves metabolism and muscle function, strengthens the cardiovascular system, animal bone tissue.",
    ),
    benefits: TList(
      [
        "высокое содержание активных веществ",
        "высокое содержание магния и серы",
        "низкие примеси тяжёлых металлов",
        "размер кристаллов менее 0,8 мм",
      ],
      [
        "high content of active components",
        "high content of magnesium and sulfur macronutrients",
        "lack of impurities of heavy metals",
        "crystal size – less than 0.8 mm",
      ],
    ),
    application: T("Обогащение Mg и S в кормах жвачных.", "Mg and S enrichment in ruminant feed."),
    form: T("Кристаллы", "Crystalline"),
    packaging: T("Мешки 25 кг", "25 kg bags"),
    leadTime: T("2 года", "2 years"),
    tags: TList(["Магний", "Сера", "Макроэлементы"], ["Magnesium", "Sulfur", "Macroelements"]),
    specs: [
      { label: T("Содержание активных веществ", "The content of active components"), value: T("не менее 98,8%", "not less than 98.8%") },
      { label: T("Производитель", "Manufacturer"), value: T("KALI, Германия", "KALI, Germany") },
      { label: T("Упаковка", "Packaging"), value: T("Мешки 25 кг", "25 kg bags") },
      { label: T("Условия хранения", "Storage conditions"), value: T("2 года", "2 years") },
    ],
  },
];

export const cattleFeedimportProducts: LocalizedProduct[] = [
  ...mycotoxinBinderProducts,
  ...cattleOnly,
];

export const cattleFeedimportGroups: LocalizedProductGroup[] = [
  {
    id: "mycotoxin-binder",
    title: T("Адсорбенты микотоксинов", "Mycotoxin adsorbents"),
    productSlugs: ["novasil-plus"],
  },
  {
    id: "energy-additives",
    title: T("Энергетические добавки", "Energy additives"),
    productSlugs: ["glycerin", "propylene-glycol"],
  },
  {
    id: "protected-fat",
    title: T("Защищённый жир", "Protected fat"),
    productSlugs: ["capaol"],
  },
  {
    id: "antidiarrheal",
    title: T("Противодиарейные препараты", "Antidiarrheal drugs"),
    productSlugs: [],
  },
  {
    id: "macroelements",
    title: T("Макроэлементы", "Macroelements"),
    productSlugs: ["magnesium-sulfate"],
  },
];
