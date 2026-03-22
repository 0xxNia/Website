import type { LocalizedProduct, LocalizedProductGroup } from "../../catalog";

import { T, TList } from "./l10n";

const biocontainment: LocalizedProduct = {
  slug: "biocontainment-aibi-lbp-15-10-f",
  listingImage: "/media/catalog/crop-feed-solutions-hero.png",
  badge: T("Препараты для силосования", "Products for silage"),
  name: T("Biocontainment AiBi® series LbP 15.10 F", "Biocontainment AiBi® series LbP 15.10 F"),
  summary: T(
    "Высокая эффективность за счёт сочетания гомо- и гетероферментативных штаммов.",
    "High efficiency of the drug due to the combined action of Homo – and heterofermentative strains.",
  ),
  description: T(
    "Гомоферментативные L. plantarum обеспечивают старт ферментации и низкий pH массы; гетероферментативные P. shermanii, L. bucheri, L. diolivorans — аэробную стабильность и баланс кислот.",
    "High efficiency of the drug due to the combined action of Homo – and heterofermentative strains: homofermentative lactic acid bacteria L. Plantarum provide a reliable start of fermentation and a consistently low pH of the silage mass; heterofermentative P. shermanii, L. bucheri, l.diolivorans provide aerobic stability of plant mass and the balance of acids of fermentation.",
  ),
  benefits: TList(
    [
      "Лиофилизат — удобное хранение, транспорт и внесение",
      "Отличная растворимость в воде, без осадка и закупорки форсунок",
      "Высокая активность 10¹⁰–10¹¹",
      "Меньше нежелательных кислот и соединений при ферментации",
      "Длительное сохранение качества сырья",
      "Повышение биологической ценности",
      "Антагонизм к нежелательной микрофлоре",
      "Быстрая фаза созревания: 1–3 суток, pH 3,8–4,3",
    ],
    [
      "Lyophilized form of the drug, ease of storage, transportation and application",
      "Excellent solubility in water. Formation of sediment and clogging of nozzles of metering pumps is excluded",
      "High activity of drugs 1010 – 1011",
      "Eliminate the appearance of undesirable acids and other compounds during fermentation",
      "Provides long-term preservation of plant raw materials of perfect quality",
      "Increase the biological value of the product",
      "Have antagonistic properties in relation to undesirable microflora",
      "Provides rapid maturation of the silo – phase 1 lasts from 1 to 3 days with a decrease in acidity to pH 3.8 – 4.3",
    ],
  ),
  application: T(
    "Содержимое пакета растворить в небольшом объёме тёплой воды, через 2–3 ч внести в расходный бак из расчёта 0,5 г биоконсерванта на 1–3 л воды (по расходу рабочего раствора насоса-дозатора). Равномерный распыл рабочего раствора: 1–3 л на 1 т силосной массы.",
    "The Contents of the package are opened and dissolved in a small amount of warm water, after 2-3 hours are introduced into the supply tank at the rate of 0.5 g of bioconservant for 1-3 liters of water (depending on the flow rate of the working solution installed by the dosing pump). Further, the working solution is evenly sprayed with a dosing pump at the rate of 1-3 liters per 1 ton of silage.",
  ),
  form: T("Лиофилизированный порошок", "Lyophilized powder"),
  packaging: T("Фольгированные пакеты трёхслойного материала, нетто 50 г", "foil packs of 3-ply material, net weight 50 g"),
  leadTime: T("См. срок годности по температуре хранения", "See shelf life by storage temperature"),
  tags: TList(["Силос", "Инокулянт"], ["Silage", "Inoculant"]),
  specs: [
    {
      label: T("Состав", "Ingredients"),
      value: T(
        "микрофлора (L. plantarum, P. shermanii, L. bucheri, L. diolivorans), ферментный комплекс (целлюлаза, амилаза, глюканаза, ксиланаза), мальтодекстрин",
        "microflora (Lactobacillus plantarum, Propionbacterium shermanii, Lactobacillus bucheri, Lactobacillus diolivorans), enzyme complex (cellulase, amylase, glucanase, xylase), maltodextrin",
      ),
    },
    { label: T("Растворимость", "Solubility"), value: T("растворим", "soluble") },
    {
      label: T("Срок годности", "Shelf life"),
      value: T(
        "при −12…−18 °C — 3 года; при не выше +6 °C и влажности не более 85% — 1 год",
        "at temperatures from -12 °C to -18 °C – 3 years from the date of manufacture; at a temperature not higher than +6 °C and relative humidity not more than 85% – 1 year from the date of manufacture",
      ),
    },
    {
      label: T("Условия хранения", "Storage conditions"),
      value: T("После вскрытия пакета хранение не допускается", "Storage after opening the package is not allowed"),
    },
  ],
};

const luproGrain: LocalizedProduct = {
  slug: "lupro-grain",
  listingImage: "/media/catalog/crop-feed-solutions-hero.png",
  badge: T("Хранение влажного зерна", "Storage of high moisture grain"),
  name: T("Lupro-Grain", "Lupro-Grain"),
  summary: T(
    "Влажное зерно нужно досушить, иначе начнётся самосогревание и плесень.",
    "The harvested grain with high moisture content must undergo final drying, otherwise the processes of self-warming and growth of molds will begin very soon.",
  ),
  description: T(
    "BASF предлагает технологию хранения без дорогой сушилки: Lupro-Grain (на основе пропионовой кислоты) вносится через форсунки в зерновом транспортере. Пропионовая кислота естественна для рубца; в швейцарском сыре ~1%. Блокирует грибы и плесень, снижает ферментативную активность зерна — влажность до 38% без предварительной сушки. Буферизованный продукт, безопаснее для людей и техники. Зерно не слипается, сохраняет сыпучесть. В корме улучшает вкус и сыпучесть; снижает потери питательности и микотоксинообразование.",
    "While the investments in equipment for drying of grain are quite high, BASF offers an alternative grain storage technology that does not require significant financial investments. According to this storage technology, Lupro-Grain (a liquid product based on propionic acid) is applied to grain through the nozzles in the grain auger conveyor. Propionic acid is a natural substance. The rumen of ruminants produces up to 1800 ml of propionic acid daily; about 1% of propionic acid is contained in Swiss cheese. The technology proposed by BASF utilizes the natural capacity of propionic acid to block the development of fungi and molds, as well as to stop the enzyme activity of grain. As a result, the grain processed with Lupro-Grain, with moisture level of up to 38%, can be stored for long periods without the need for prior drying. Pure acids are rather aggressive for people and technology. Lupro-Grain is a specially prepared (buffered) user-friendly acid product. The grain correctly processed with Lupro-Grain does not glue or form lumps and retains its flowability. Therefore, it can be poured into storage in the same way as the dried grain. Lupro-Grain added to animal feed improves the flavor properties and flowability of feed. Propionic acid and its salts thanks to its antimicrobial properties, the additive prevents the loss of nutrients and the formation of mycotoxins, thereby increasing the productivity and livability of animals.",
  ),
  benefits: TList([], []),
  application: T(
    "Доза рассчитывается по влажности зерна и сроку хранения.",
    "Dose: To be calculated with regard to grain moisture content and the respective storage time",
  ),
  form: T("Буферизованная жидкая кислотная смесь", "Buffered liquid acid product"),
  packaging: T("Контейнер IBC 1000 л", "1,000 l IBC"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Зерно", "BASF", "Пропионовая кислота"], ["Grain", "BASF", "Propionic acid"]),
  specs: [
    { label: T("Пропионовая кислота", "Propionic acid"), value: T("мин. 90 %", "min. 90 %") },
    { label: T("Аммиак", "Ammonia"), value: T("4 %", "4 %") },
    { label: T("1,2-пропандиол", "1,2-propanediol"), value: T("4%", "4%") },
    { label: T("Вода", "Water"), value: T("2%", "2%") },
    { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
  ],
};

const luproMixNcCrop: LocalizedProduct = {
  slug: "lupro-mix-nc",
  listingImage: "/media/catalog/crop-feed-solutions-hero.png",
  badge: T("Силосование и обработка боковых слоёв", "Ensiling and processing of side layers"),
  name: T("Lupro-Mix NC", "Lupro-Mix NC"),
  summary: T(
    "В сложных условиях силосования химические консерванты дают гарантированный эффект.",
    "In challenging ensiling conditions the use of chemical preservatives produces guaranteed effect.",
  ),
  description: T(
    "Быстро снижают pH и создают условия для молочнокислого брожения; «спасательный круг» при ошибках укладки. Верхние и боковые слои траншей и кагатов часто недоуплотнены — рост температуры и порча корма. Lupro-Mix NC — при сложном силосовании и для обработки верхних/боковых слоёв. Муравьиная и пропионовая кислоты и соли подавляют грибы, дрожжи и патогены, pH 4,2–4,8. Улучшает вкус и питательность корма, продуктивность и сохранность животных.",
    "Silage additives of this type alter the environment itself and create conditions for lactic acid fermentation. Chemical preservatives can quickly reduce the pH, thus creating favorable conditions for lactic acid fermentation. The use of chemical preservatives is a “lifeline” giving the opportunity to produce high-quality feed in challenging conditions or to correct the errors made during ensiling. In the process of silage we often have to deal with compaction errors. The top and side layers of silage pits and mounds are subject to damage, as in these hard-to-reach parts it is difficult to create sufficient pressure. The increasing temperature of the silage results in considerable loss of energy and nutritional value, as well as feed spoilage. Lupro-Mix NC is used under difficult ensiling conditions, as well as for the treatment of top and side layers of silage pits and mounds. Formic acid, propionic acid and their salts have a strong fungicidal and bactericidal effect: they inhibit the growth of fungi, yeasts and pathogenic bacteria, and change the pH level to 4.2-4.8, which is a major factor in suppressing unwanted microbiological processes. Lupro-Mix NC improves the taste and the nutritional quality of feeds, and, as a result, increased productivity and livability of animals.",
  ),
  benefits: TList([], []),
  application: T(
    "Силос или сенаж в зависимости от культуры и влажности: 3–5 л/т.",
    "For silage or haylage, depending on the crop and moisture content of the ensiled material: 3-5 l/ton of silage",
  ),
  form: T("Жидкость", "Liquid"),
  packaging: T("Контейнер IBC 1000 л", "1,000 l IBC"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Силос", "BASF"], ["Silage", "BASF"]),
  specs: [
    { label: T("Пропионовая кислота", "Propionic acid"), value: T("38 %", "38 %") },
    { label: T("Муравьиная кислота", "Formic acid"), value: T("34 %", "34 %") },
    { label: T("Аммиак", "Ammonia"), value: T("8 %", "8 %") },
    { label: T("Вода", "Water"), value: T("до 100%", "to 100%") },
    { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
  ],
};

const amasilNaCrop: LocalizedProduct = {
  slug: "amasil-na",
  listingImage: "/media/catalog/crop-feed-solutions-hero.png",
  badge: T("Силосование и обработка боковых слоёв", "Ensiling and processing of side layers"),
  name: T("Amasil NA", "Amasil NA"),
  summary: T(
    "Высокое содержание муравьиной кислоты — сильный консервант против бактерий и дрожжей.",
    "Due to a high content of formic acid, Amasil NA is an excellent preservative suppressing the growth of bacteria and yeast in the diet.",
  ),
  description: T(
    "Улучшает гигиену корма (в т.ч. снижение Salmonella, E. coli, Campylobacter в кормах для птицы по исходному описанию).",
    "Amasil NA is used to improve the feed hygiene by reducing the number of micro-organisms such as Salmonella, E. coli or Campylobacter in poultry feed.",
  ),
  benefits: TList([], []),
  application: T("Гигиена корма: 3–12 кг/т; как кислотный консервант: 3–12 кг/т", "Feed hygiene: 3-12 kg/ton; As acidifier: 3-12 kg/ton"),
  form: T("Жидкость", "Liquid"),
  packaging: T("Контейнер IBC 1000 л", "1,000 l IBC"),
  leadTime: T("По спецификации поставщика", "Per supplier specification"),
  tags: TList(["Силос", "BASF"], ["Silage", "BASF"]),
  specs: [
    { label: T("Муравьиная кислота", "Formic acid"), value: T("75%", "75%") },
    { label: T("Натрий", "Sodium"), value: T("7%", "7%") },
    { label: T("Вода", "Water"), value: T("до 100%", "to 100%") },
    { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
  ],
};

export const cropFeedimportProducts: LocalizedProduct[] = [
  biocontainment,
  luproGrain,
  luproMixNcCrop,
  amasilNaCrop,
];

export const cropFeedimportGroups: LocalizedProductGroup[] = [
  {
    id: "silage",
    title: T("Препараты для силосования", "Products for silage"),
    productSlugs: ["biocontainment-aibi-lbp-15-10-f"],
  },
  {
    id: "high-moisture-grain",
    title: T("Хранение влажного зерна", "Storage of high moisture grain"),
    productSlugs: ["lupro-grain"],
  },
  {
    id: "side-layers",
    title: T("Силосование и обработка боковых слоёв", "Ensiling and processing of side layers"),
    productSlugs: ["lupro-mix-nc", "amasil-na"],
  },
  {
    id: "rolled-maize",
    title: T("Консервация валка кукурузы", "Conservation of rolled maize"),
    productSlugs: ["lupro-mix-nc"],
  },
  { id: "hay-making", title: T("Заготовка сена", "Hay making"), productSlugs: ["lupro-grain"] },
];
