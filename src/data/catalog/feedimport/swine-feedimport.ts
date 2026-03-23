import type { LocalizedProduct, LocalizedProductGroup } from "../../catalog";

import { T, TList } from "./l10n";
import { mycotoxinBinderProducts } from "./mycotoxin-products";
import { feedProductionFeedimportProducts } from "./feed-production-products";

const luminase = feedProductionFeedimportProducts.find((p) => p.slug === "luminase-5500-hr")!;

const capaolSwine: LocalizedProduct = {
  slug: "capaol",
  listingImage: "/media/catalog/swine-hero.jpg",
  badge: T("Защищённый жир", "Protected fat"),
  name: T("КАПАОЛ (CAPAOL)", "КАПАОЛ (CAPAOL)"),
  summary: T(
    "Кормовая добавка для повышения молочной продуктивности коров и жирности молока.",
    "CAPAOL is a feed additive for increasing milk productivity of cows and milk fat content.",
  ),
  description: T(
    "Кальциевая соль ДЦЖК: Ca ~10%; пальмитиновая 45–51%; олеиновая 32–38%; стеариновая 4–5%; линолевая 6–8%; усвояемость ~95%; NEL 5,9 Мкал/кг; МЭ 33,3 МДж.",
    "CAPAOL is a feed additive for increasing milk productivity of cows and milk fat content. Kapaol is a calcium salt of long-chain fatty acids and contains: Calcium – 10%; Palmitic acid – 45-51%; Oleic acid – 32-38%; Stearic acid – 4-5%; Linoleic acid – 6-8%; The digestibility of the product is – 95%; Net energy of lactation (NEL) – 5.9 Mcal/kg; Metabolizable energy – 33.3 MJ",
  ),
  benefits: TList(
    [
      "Источник энергии; ~46% ненасыщенных жирных кислот",
      "Частично восполняет кальций у дойных коров",
      "Удой +2–4 л/сут, жирность до +0,7 п.п.",
      "Живая масса; замена части основного корма с сохранением энергобаланса",
    ],
    [
      "Serves as a source of energy for cows, has a high content of unsaturated fatty acids (46%)",
      "Partially replenishes calcium deficiency in the body of lactating cows",
      "Increases milk yield by 2-4 liters per cow per day, increases the fat content in milk to 0.7%",
      "Allows you to maintain the live weight of cows, allows you to replace part of the main feed while maintaining energy balance.",
    ],
  ),
  application: T(
    "Высокоудойные — 500 г/гол/сут; низкая и средняя продуктивность — 300–400 г/гол/сут.",
    "For high-yielding cows 500 g / head per day; For cows with low and average productivity 300-400 g / head per day",
  ),
  form: T("Защищённый жир", "Protected fat"),
  packaging: T("С основным кормом", "With main feed"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Жир", "CAPAOL"], ["Fat", "CAPAOL"]),
  specs: [],
};

const luproMixNcSwine: LocalizedProduct = {
  slug: "lupro-mix-nc",
  listingImage: "/media/catalog/swine-hero.jpg",
  badge: T("Гигиена корма и воды", "Hygiene of feed and water"),
  name: T("Lupro-Mix NC", "Lupro-Mix NC"),
  summary: T(
    "Снижает патогены в питьевой воде и кормах (в т.ч. для птицы по исходному описанию препарата).",
    "Lupro-Mix NC is used to lower the level of pathogenic microorganisms in drinking water and feeds for poultry.",
  ),
  description: T(
    "Муравьиная и пропионовая кислоты и соли подавляют грибы, дрожжи и патогенные бактерии; pH 4,2–4,8; улучшает вкус и питательность корма.",
    "Lupro-Mix NC is used to lower the level of pathogenic microorganisms in drinking water and feeds for poultry. Formic acid, propionic acid and their salts have a strong fungicidal and bactericidal action: they inhibit the growth of fungi, yeasts and pathogenic bacteria (coliform group and Salmonella). The presence of salts of formic and propionic acids reduces the corrosive properties of the additive. Introduction of this additive into the feed and drinking water changes the pH level to 4.2-4.8, which is an important factor in suppressing unwanted microbiological processes. Lupro-Mix NC improves the taste and nutritional value of feeds, which results in increased productivity and livability of poultry.",
  ),
  benefits: TList([], []),
  application: T("Сухой корм: 3–10 л/т; вода: 1,5–2,5 л/т", "Dry feed: 3-10 l/ton; Drinking water: 1.5-2.5 l/ton"),
  form: T("Жидкая смесь", "Liquid blend"),
  packaging: T("Контейнер IBC 1000 л", "1,000 l IBC"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Гигиена", "BASF"], ["Hygiene", "BASF"]),
  specs: [
    { label: T("Состав — пропионовая кислота", "Composition — Propionic acid"), value: T("38%", "38%") },
    { label: T("Муравьиная кислота", "Formic acid"), value: T("34%", "34%") },
    { label: T("Аммиак", "Ammonia"), value: T("8%", "8%") },
    { label: T("Вода", "Water"), value: T("до 100%", "to 100%") },
    { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
  ],
};

const luproCidNaSwine: LocalizedProduct = {
  slug: "lupro-cid-na",
  listingImage: "/media/catalog/swine-hero.jpg",
  badge: T("Гигиена корма и воды", "Hygiene of feed and water"),
  name: T("Lupro-Cid NA", "Lupro-Cid NA"),
  summary: T(
    "Снижает патогены в кормах для птицы (по исходному описанию).",
    "Lupro-Cid NA is used to lower the level of pathogenic microorganisms in feeds for poultry.",
  ),
  description: T(
    "Пропионовая и муравьиная кислоты и соли; улучшает вкус и питательность корма.",
    "Lupro-Cid NA is used to lower the level of pathogenic microorganisms in feeds for poultry. Propionic acid, formic acid and their salts have a strong fungicidal and bactericidal action: they inhibit the growth of fungi, yeasts and pathogenic bacteria (coliform group and Salmonella). Lupro-Cid NA improves the taste and nutritional value of feeds, which results in increased productivity and livability of poultry.",
  ),
  benefits: TList([], []),
  application: T("Сухой корм: 6–12 кг/т; как кислотный консервант: 6–12 кг/т", "Dry feed: 6-12 kg/ton; As acidifier: 6-12 kg/ton"),
  form: T("Жидкость", "Liquid"),
  packaging: T("Контейнер IBC 1000 л", "1,000 l IBC"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Гигиена", "BASF"], ["Hygiene", "BASF"]),
  specs: [
    { label: T("Пропионовая кислота", "Propionic acid"), value: T("18%", "18%") },
    { label: T("Муравьиная кислота", "Formic acid"), value: T("54%", "54%") },
    { label: T("Натрий", "Sodium"), value: T("8%", "8%") },
    { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
  ],
};

const amasilNaSwine: LocalizedProduct = {
  slug: "amasil-na",
  listingImage: "/media/catalog/swine-hero.jpg",
  badge: T("Гигиена корма и воды", "Hygiene of feed and water"),
  name: T("Amasil NA", "Amasil NA"),
  summary: T(
    "Сильный консервант на основе муравьиной кислоты.",
    "Due to a high content of formic acid, Amasil NA is an excellent preservative suppressing the growth of bacteria and yeast in the diet.",
  ),
  description: T(
    "Снижает Salmonella, E. coli, Campylobacter в кормах для птицы (по исходному описанию).",
    "Due to a high content of formic acid, Amasil NA is an excellent preservative suppressing the growth of bacteria and yeast in the diet. Amasil NA is used to improve the feed hygiene by reducing the number of micro-organisms such as Salmonella, E. coli or Campylobacter in poultry feed.",
  ),
  benefits: TList([], []),
  application: T("Гигиена корма: 3–12 кг/т; как кислотный консервант: 3–12 кг/т", "Feed hygiene: 3-12 kg/ton; As acidifier: 3-12 kg/ton"),
  form: T("Жидкость", "Liquid"),
  packaging: T("Контейнер IBC 1000 л", "1,000 l IBC"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Гигиена", "BASF"], ["Hygiene", "BASF"]),
  specs: [
    { label: T("Муравьиная кислота", "Formic acid"), value: T("75%", "75%") },
    { label: T("Натрий", "Sodium"), value: T("7%", "7%") },
    { label: T("Вода", "Water"), value: T("до 100%", "to 100%") },
    { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
  ],
};

const afluksidSwine: LocalizedProduct = {
  slug: "afluksid",
  listingImage: "/media/catalog/swine-hero.jpg",
  badge: T("Противодиарейные", "Antidiarrheal drugs"),
  name: T("Афлюксид", "Afluksid"),
  summary: T(
    "Кормовая добавка на основе смектитов; сорбция и детоксикация.",
    "AFLUKSID – feed additive natural origin, made on the basis of smectite minerals, it is polyfunctional sorption and detoxifying properties.",
  ),
  description: T(
    "Электролиты при обезвоживании и диарее; цитопротекция слизистой; адсорбент; микроэлементы. Не нарушает микрофлору.",
    "AFLUKSID – feed additive natural origin, made on the basis of smectite minerals, it is polyfunctional sorption and detoxifying properties. It contains electrolytes, so it can be effectively used in all conditions of the body’s dehydration, especially with prolonged acute diarrhea. Forms a polyvalent connection with mucus glycoproteins, which ensures its cytoprotective action. Stabilizes the protective mucous barrier of the gastrointestinal tract. It has a powerful adsorbing effect. It contributes to a slight increase in pH and reduce the aggressive effects of hydrochloric acid. Reduces the loss of electrolytes and fluids. Contains vital mineral elements – calcium, sodium, potassium, magnesium, iron, iodine. Does not cause violations of normal microflora, creates a favorable environment for its habitat.",
  ),
  benefits: TList([], []),
  application: T("См. протокол для телят и молодняка.", "See product protocol for calves and youngstock."),
  form: T("Серо-кремовый порошок", "grayish cream powder"),
  packaging: T("Пластиковые вёдра 0,4–10 кг", "plastic buckets from 0.4 to 10 kg"),
  leadTime: T("24 месяца с даты производства", "24 months from the date of manufacture"),
  tags: TList(["Противодиарейное"], ["Antidiarrheal"]),
  specs: [
    {
      label: T("Состав", "Composition"),
      value: T(
        "монтмориллонит, декстроза, цитрат натрия, хлориды, сахаринат натрия, ванилин",
        "dioctahedral montmorillonite, dextrose monohydrate, sodium citrate, sodium chloride, potassium chloride, sodium saccharin, vanillin",
      ),
    },
    { label: T("Производство", "Production"), value: T("Россия", "Russia") },
  ],
};

const magnesiumSulfateSwine: LocalizedProduct = {
  slug: "magnesium-sulfate",
  listingImage: "/media/catalog/swine-hero.jpg",
  badge: T("Макроэлементы", "Macroelements"),
  name: T("Сульфат магния", "Magnesium sulfate"),
  summary: T(
    "Обогащение кормов магнием и серой.",
    "Magnesium sulfate MgSO4 is used in the production of feed for enrichment and balancing the diet of farm animals for magnesium and sulfur.",
  ),
  description: T(
    "Для КРС, лошадей, овец и коз; магний и сера в обмене веществ и кератине.",
    "Magnesium sulfate MgSO4 is used in the production of feed for enrichment and balancing the diet of farm animals for magnesium and sulfur. It is used in feeding cattle, horses, sheep and goats. It contains macroelements magnesium Mg and sulfur S. Magnesium is one of the most important mineral substances and should be included in the daily diet of animals. This macrocell is involved in the formation of enzymes, is an activator necessary for the synthesis of proteins. Sulfur in magnesium sulfate promotes the formation of keratin – an essential component of hair, skin and horns. The use of magnesium sulfate improves metabolism and muscle function, strengthens the cardiovascular system, animal bone tissue.",
  ),
  benefits: TList(
    [
      "высокое содержание активных веществ",
      "магний и сера",
      "низкие примеси тяжёлых металлов",
      "кристаллы менее 0,8 мм",
    ],
    [
      "high content of active components",
      "high content of magnesium and sulfur macronutrients",
      "lack of impurities of heavy metals",
      "crystal size – less than 0.8 mm",
    ],
  ),
  application: T("Обогащение Mg и S.", "Mg and S enrichment."),
  form: T("Кристаллы", "Crystalline"),
  packaging: T("Мешки 25 кг", "25 kg bags"),
  leadTime: T("2 года", "2 years"),
  tags: TList(["Магний", "Сера"], ["Magnesium", "Sulfur"]),
  specs: [
    { label: T("Содержание активных веществ", "The content of active components"), value: T("не менее 98,8%", "not less than 98.8%") },
    { label: T("Производитель", "Manufacturer"), value: T("KALI, Германия", "KALI, Germany") },
    { label: T("Упаковка", "Packaging"), value: T("Мешки 25 кг", "25 kg bags") },
    { label: T("Условия хранения", "Storage conditions"), value: T("2 года", "2 years") },
  ],
};

export const swineFeedimportProducts: LocalizedProduct[] = [
  ...mycotoxinBinderProducts,
  capaolSwine,
  luproMixNcSwine,
  luproCidNaSwine,
  amasilNaSwine,
  afluksidSwine,
  magnesiumSulfateSwine,
  { ...luminase, listingImage: "/media/catalog/swine-hero.jpg" },
];

export const swineFeedimportGroups: LocalizedProductGroup[] = [
  {
    id: "mycotoxin-binder",
    title: T("Адсорбенты микотоксинов", "Mycotoxin adsorbents"),
    productSlugs: ["novasil-plus"],
  },
  { id: "probiotic", title: T("Пробиотические препараты", "Probiotic preparations"), productSlugs: [] },
  { id: "protected-fat", title: T("Защищённый жир", "Protected fat"), productSlugs: ["capaol"] },
  {
    id: "hygiene",
    title: T("Гигиена корма и воды", "Hygiene of feed and water"),
    productSlugs: ["lupro-mix-nc", "lupro-cid-na", "amasil-na"],
  },
  { id: "antidiarrheal", title: T("Противодиарейные препараты", "Antidiarrheal drugs"), productSlugs: ["afluksid"] },
  { id: "macroelements", title: T("Макроэлементы", "Macroelements"), productSlugs: ["magnesium-sulfate"] },
  { id: "enzymes", title: T("Ферменты", "Enzymes"), productSlugs: ["luminase-5500-hr"] },
];
