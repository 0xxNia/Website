import type { LocalizedProduct, LocalizedProductGroup } from "../../catalog";

import { T, TList } from "./l10n";
import { mycotoxinBinderProducts } from "./mycotoxin-products";
import { feedProductionFeedimportProducts } from "./feed-production-products";

const balangut = feedProductionFeedimportProducts.find((p) => p.slug === "balangut")!;
const luminase = feedProductionFeedimportProducts.find((p) => p.slug === "luminase-5500-hr")!;

const capaolPoultry: LocalizedProduct = {
  slug: "capaol",
  listingImage: "/media/catalog/poultry-hero.jpg",
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

const luproMixNc: LocalizedProduct = {
  slug: "lupro-mix-nc",
  listingImage: "/media/catalog/poultry-hero.jpg",
  badge: T("Гигиена корма и воды", "Hygiene of feed and water"),
  name: T("Lupro-Mix NC", "Lupro-Mix NC"),
  summary: T(
    "Снижает уровень патогенных микроорганизмов в питьевой воде и кормах для птицы.",
    "Lupro-Mix NC is used to lower the level of pathogenic microorganisms in drinking water and feeds for poultry.",
  ),
  description: T(
    "Муравьиная и пропионовая кислоты и их соли — фунгицидное и бактерицидное действие: грибы, дрожжи, колиформы, сальмонелла. Соли снижают коррозионность. pH корма и воды 4,2–4,8. Улучшает вкус и питательность корма, продуктивность и сохранность птицы.",
    "Lupro-Mix NC is used to lower the level of pathogenic microorganisms in drinking water and feeds for poultry. Formic acid, propionic acid and their salts have a strong fungicidal and bactericidal action: they inhibit the growth of fungi, yeasts and pathogenic bacteria (coliform group and Salmonella). The presence of salts of formic and propionic acids reduces the corrosive properties of the additive. Introduction of this additive into the feed and drinking water changes the pH level to 4.2-4.8, which is an important factor in suppressing unwanted microbiological processes. Lupro-Mix NC improves the taste and nutritional value of feeds, which results in increased productivity and livability of poultry.",
  ),
  benefits: TList([], []),
  application: T("Сухой корм: 3–10 л/т; вода: 1,5–2,5 л/т", "Dry feed: 3-10 l/ton; Drinking water: 1.5-2.5 l/ton"),
  form: T("Жидкая смесь", "Liquid blend"),
  packaging: T("Контейнер IBC 1000 л", "1,000 l IBC"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Гигиена", "BASF", "Птица"], ["Hygiene", "BASF", "Poultry"]),
  specs: [
    { label: T("Состав — пропионовая кислота", "Composition — Propionic acid"), value: T("38%", "38%") },
    { label: T("Муравьиная кислота", "Formic acid"), value: T("34%", "34%") },
    { label: T("Аммиак", "Ammonia"), value: T("8%", "8%") },
    { label: T("Вода", "Water"), value: T("до 100%", "to 100%") },
    { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
  ],
};

const amasilNa: LocalizedProduct = {
  slug: "amasil-na",
  listingImage: "/media/catalog/poultry-hero.jpg",
  badge: T("Гигиена корма и воды", "Hygiene of feed and water"),
  name: T("Amasil NA", "Amasil NA"),
  summary: T(
    "Высокое содержание муравьиной кислоты — сильный консервант, подавляет бактерии и дрожжи в рационе.",
    "Due to a high content of formic acid, Amasil NA is an excellent preservative suppressing the growth of bacteria and yeast in the diet.",
  ),
  description: T(
    "Улучшает гигиену корма за счёт снижения Salmonella, E. coli, Campylobacter в кормах для птицы.",
    "Due to a high content of formic acid, Amasil NA is an excellent preservative suppressing the growth of bacteria and yeast in the diet. Amasil NA is used to improve the feed hygiene by reducing the number of micro-organisms such as Salmonella, E. coli or Campylobacter in poultry feed.",
  ),
  benefits: TList([], []),
  application: T("Гигиена корма: 3–12 кг/т; как кислотный консервант: 3–12 кг/т", "Feed hygiene: 3-12 kg/ton; As acidifier: 3-12 kg/ton"),
  form: T("Жидкость", "Liquid"),
  packaging: T("Контейнер IBC 1000 л", "1,000 l IBC"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Гигиена", "Муравьиная кислота", "BASF"], ["Hygiene", "Formic acid", "BASF"]),
  specs: [
    { label: T("Состав — муравьиная кислота", "Composition — Formic acid"), value: T("75%", "75%") },
    { label: T("Натрий", "Sodium"), value: T("7%", "7%") },
    { label: T("Вода", "Water"), value: T("до 100%", "to 100%") },
    { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
  ],
};

const luproCidNa: LocalizedProduct = {
  slug: "lupro-cid-na",
  listingImage: "/media/catalog/poultry-hero.jpg",
  badge: T("Гигиена корма и воды", "Hygiene of feed and water"),
  name: T("Lupro-Cid NA", "Lupro-Cid NA"),
  summary: T(
    "Снижает уровень патогенов в кормах для птицы.",
    "Lupro-Cid NA is used to lower the level of pathogenic microorganisms in feeds for poultry.",
  ),
  description: T(
    "Пропионовая и муравьиная кислоты и соли подавляют грибы, дрожжи и патогенные бактерии; улучшают вкус и питательность корма, продуктивность и сохранность.",
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

export const poultryFeedimportProducts: LocalizedProduct[] = [
  ...mycotoxinBinderProducts,
  { ...balangut, listingImage: "/media/catalog/poultry-hero.jpg" },
  capaolPoultry,
  luproMixNc,
  amasilNa,
  luproCidNa,
  { ...luminase, listingImage: "/media/catalog/poultry-hero.jpg" },
];

export const poultryFeedimportGroups: LocalizedProductGroup[] = [
  {
    id: "mycotoxin-binder",
    title: T("Связыватели микотоксинов", "Mycotoxin binder"),
    productSlugs: ["novasil-plus", "maxisorb", "toxinon", "toxinon-organic"],
  },
  { id: "protected-acids", title: T("Защищённые кислоты", "Protected acids"), productSlugs: ["balangut"] },
  { id: "protected-fat", title: T("Защищённый жир", "Protected fat"), productSlugs: ["capaol"] },
  {
    id: "hygiene",
    title: T("Гигиена корма и воды", "Hygiene of feed and water"),
    productSlugs: ["lupro-mix-nc", "amasil-na", "lupro-cid-na"],
  },
  { id: "enzymes", title: T("Ферменты", "Enzymes"), productSlugs: ["luminase-5500-hr"] },
];
