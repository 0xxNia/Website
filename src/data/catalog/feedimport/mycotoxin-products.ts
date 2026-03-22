import type { LocalizedProduct } from "../../catalog";

import { T, TList } from "./l10n";

export const mycotoxinBinderProducts: LocalizedProduct[] = [
  {
    slug: "novasil-plus",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Связыватель микотоксинов", "Mycotoxin binder"),
    name: T("Novasil Plus", "Novasil Plus"),
    summary: T(
      "Novasil™ Plus — «платиновый» стандарт среди связывателей микотоксинов. Природная смектитовая глина, богатая кальциевым монтмориллонитом.",
      "Novasil™ Plus – the platinum standard of mycotoxin binders. Natural smectite clay rich in calcium montmorillonite",
    ),
    description: T(
      "Novasil™ Plus — «платиновый» стандарт среди связывателей микотоксинов. Природная смектитовая глина, богатая кальциевым монтмориллонитом.",
      "Novasil™ Plus – the platinum standard of mycotoxin binders. Natural smectite clay rich in calcium montmorillonite",
    ),
    benefits: TList(
      [
        "Снижает негативное воздействие микотоксинов на животных и птицу;",
        "Связывает микотоксины в процессе пищеварения так, что они не всасываются;",
        "Стабилен в корме;",
        "Не связывает питательные вещества и не снижает продуктивность и здоровье;",
        "Самый изученный препарат в мире: более 60 публикаций и исследований in vitro и in vivo.",
      ],
      [
        "Minimizes the adverse effects of mycotoxins on animals and poultry;",
        "Binds mycotoxins during digestion and converts them so that they cannot be absorbed by animals and poultry;",
        "Stable in the feed;",
        "Does not bind nutrients and has no negative impact on the productivity and health of animals and poultry;",
        "The most studied and researched drug in the world: more than 60 scientific publications, as well as in vitro and in vivo studies.",
      ],
    ),
    application: T(
      "Кормопроизводство, интегрированные хозяйства КРС и птицы.",
      "Feed production, integrated livestock and poultry operations.",
    ),
    form: T("Серый порошок", "Grey powder"),
    packaging: T("Бумажные мешки по 25 кг", "25 kg paper bags"),
    leadTime: T("36 месяцев с даты производства", "36 months shelf life from production date"),
    tags: TList(
      ["Микотоксины", "BASF", "Монтмориллонит"],
      ["Mycotoxin binder", "BASF", "Montmorillonite"],
    ),
    specs: [
      { label: T("Адсорбция DON, %", "DON adsorption %"), value: T("45,00", "45,00") },
      {
        label: T("Адсорбция зеараленона, %", "Zearalenone adsorption %"),
        value: T("45,00", "45,00"),
      },
      {
        label: T("Адсорбция афлатоксина, %", "Aflatoxin adsorption %"),
        value: T("98,00", "98,00"),
      },
      {
        label: T("Адсорбция фумонизина, %", "Fumonisin adsorption %"),
        value: T("88,00", "88,00"),
      },
      { label: T("Производитель", "Manufacturer"), value: T("BASF, Германия", "BASF, Germany") },
      { label: T("Внешний вид", "Appearance"), value: T("Серый порошок", "Grey powder") },
      {
        label: T("Срок годности", "Shelf life"),
        value: T("36 месяцев с даты производства", "36 months from production date"),
      },
      {
        label: T("Условия хранения", "Storage conditions"),
        value: T("В сухом месте при температуре от −5 °C до +40 °C", "In a dry place at from -5°С to +40°С"),
      },
      { label: T("Упаковка", "Packaging"), value: T("Мешки 25 кг", "25 kg paper bags") },
    ],
  },
  {
    slug: "maxisorb",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Связыватель микотоксинов", "Mycotoxin binder"),
    name: T("Maxisorb ®", "Maxisorb ®"),
    summary: T(
      "Благодаря инновационной формуле Maxisorb® снижает всасывание эндо- и микотоксинов и помогает снижать технологический стресс.",
      "Thanks to its innovative formula, Maxisorb® prevents the absorption of endo-, mycotoxins, and levels technological stresses.",
    ),
    description: T(
      "Благодаря инновационной формуле Maxisorb® снижает всасывание эндо- и микотоксинов и помогает снижать технологический стресс. Сорбционная ёмкость: афлатоксин B1 — не менее 95%; охратоксин A — не менее 90%; зеараленон — не менее 70%; фумонизин — не менее 72,1%; токсин T-2 — не менее 61%; DON — не менее 69%. Maxisorb® связывает микотоксины, практически не взаимодействуя с питательными веществами, включая витамины и минералы, даже при длительном применении. Рекомендуется для сельскохозяйственных животных и птицы в лечебных и профилактических целях при микотоксикозах.",
      "Thanks to its innovative formula, Maxisorb® prevents the absorption of endo-, mycotoxins, and levels technological stresses. Sorption capacity for aflatoxin B1 – not less than 95%; ochratoxin A – not less than 90%; zearalenone – not less than 70%, fumonisin – not less than 72.1%, T-2 toxin – not less than 61%, DON – not less than 69%. Maxisorb® binds mycotoxins without interacting with nutrients, including vitamins and mineral elements, even in case of prolonged use. It is recommended for farm animals and poultry, both for the treatment and prevention of mycotoxicosis.",
    ),
    benefits: TList(
      [
        "Повышает питательную ценность корма, снижая риск отравлений;",
        "Дополнительный источник микро- и макроэлементов и других компонентов корма;",
        "Улучшает усвояемость питательных веществ;",
        "Обладает гепатопротекторными свойствами, повышает продуктивность;",
        "Высокая стабильность при различных pH и термообработке.",
      ],
      [
        "Increases the nutritional value of feed, preventing poisoning;",
        "It is an additional source of micro-, macroelements and other feed components;",
        "Improves the digestibility of feed nutrients and their digestibility;",
        "It has hepatoprotective properties, increases productivity;",
        "Maxisorb® is highly stable under various pH conditions and heat treatment.",
      ],
    ),
    application: T(
      "Норма ввода: 0,5–2,5 кг на 1 т комбикорма или 10 г/гол/сут профилактика; терапия — 40 г/гол/сут.",
      "Input rate: 0.5 – 2.5 kg per 1 ton of compound feed or 10 g / head / day preventive dosage, therapeutic dosage – 40 g / head / day",
    ),
    form: T("Порошок", "Powder"),
    packaging: T("По спецификации поставщика", "Per supplier specification"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Микотоксины", "Адсорбент"], ["Mycotoxin binder", "Adsorbent"]),
    specs: [],
  },
  {
    slug: "toxinon",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Связыватель микотоксинов", "Mycotoxin binder"),
    name: T("ToxiNon ®", "ToxiNon ®"),
    summary: T(
      "ToxiNon ® — минеральный адсорбент микотоксинов с избирательной сорбцией; не связывает питательные вещества и микроэлементы.",
      "ToxiNon ® is a mineral adsorbent of mycotoxins that has selective sorption and does not bind nutrients and trace elements.",
    ),
    description: T(
      "ToxiNon ® — минеральный адсорбент микотоксинов с избирательной сорбцией; не связывает питательные вещества и микроэлементы. Действует против широкого спектра микотоксинов. Сорбционная ёмкость: афлатоксин B1 — не менее 98%; охратоксин A — не менее 98%; зеараленон — не менее 80%; фумонизин — не менее 62%; токсин T-2 — не менее 45%. Высокоэффективен при малых нормах ввода, стабилен при различных pH и термообработке. Связывает и выводит микотоксины из организма животных и птицы, улучшает пищеварение и минерализацию корма. Снижает токсикоз, заболеваемость, повышает продуктивность. Совместим со всеми ингредиентами корма, ЛПМ и добавками. Адсорбирует бактерии, вирусы и эндотоксины.",
      "ToxiNon ® is a mineral adsorbent of mycotoxins that has selective sorption and does not bind nutrients and trace elements. It acts against a wide range of mycotoxins. Sorption capacity for aflatoxin B1 – not less than 98%; ochratoxin A – not less than 98%; zearalenone – not less than 80%, fumonisin – not less than 62%, T-2 toxin – not less than 45%. ToxiNon ® is a highly effective mineral adsorbent of mycotoxins, characterized by high stability under various pH conditions and heat treatment. ToxiNon ® is distinguished by high efficiency with a small input rate. It binds and removes a wide range of mycotoxins from the body of animals and birds. Its use helps to improve digestion and mineralization of feed. ToxiNon ® prevents toxicosis, reduces morbidity, improves production performance. Compatible with all feed ingredients, medicines and other feed additives. It also adsorbs bacteria, viruses and endotoxins.",
    ),
    benefits: TList([], []),
    application: T(
      "Норма ввода: 0,5–2,5 кг/т комбикорма или 20 г/гол/сут профилактика; терапия — 40 г/гол/сут.",
      "Input rate: 0.5-2.5 kg / ton of compound feed or 20 g / head / day preventive dosage, therapeutic dosage 40 g / head / day",
    ),
    form: T("Минеральный адсорбент", "Mineral adsorbent"),
    packaging: T("По спецификации поставщика", "Per supplier specification"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Микотоксины", "Минеральный адсорбент"], ["Mycotoxin binder", "Mineral adsorbent"]),
    specs: [],
  },
  {
    slug: "toxinon-organic",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Связыватель микотоксинов", "Mycotoxin binder"),
    name: T("ToxiNon®Organic", "ToxiNon®Organic"),
    summary: T(
      "Кормовая добавка — адсорбент микотоксинов; многокомпонентная формула для продуктивности и безопасности с/х животных, включая птицу.",
      "Feed additive, mycotoxin adsorbent — multi-component adsorbent for productivity and safety of farm animals, including poultry.",
    ),
    description: T(
      "«ToxiNon® Organic» — многокомпонентный адсорбент микотоксинов для повышения продуктивности и безопасности с/х животных, включая птицу. Состав: кормовой бентонит (содержание монтмориллонита свыше 70%), кристаллический гидратированный алюмосиликат, клеточные стенки дрожжей (Saccharomyces cerevisiae), аморфный диоксид кремния. Введение и дозирование: в корм, комбикорм и смеси на комбикормовых заводах или фермерских ККМ по технологии поэтапного смешивания. 0,5–2,0 кг порошка на тонну корма, 10–50 г порошка на животное 1 раз в сутки.",
      "“ToxiNon® Organic” is a multi-component mycotoxin adsorbent for improving the productivity and safety of farm animals, including poultry. Composition: feed-grade bentonite (with a montmorillonite content of over 70%), crystalline hydrated aluminosilicate, yeast cell walls (Saccharomyces cerevisiae), amorphous silicon dioxide. Administration and dosage: add to feed, compound feed, and feed mixtures at feed mills or farm feed mills in accordance with existing step-mixing technologies. 0.5 – 2.0 kg of powder per ton of feed, 10 – 50 g of powder per animal once daily.",
    ),
    benefits: TList(
      [
        "Сочетает минералы и органику в уникальной формуле",
        "Связывает до 95% микотоксинов в корме",
        "Улучшает биохимические показатели животных",
        "Совместим со всеми кормами и препаратами",
        "Повышает безопасность конечной продукции",
        "Экономия до 40% на лечении по сравнению с импортными аналогами",
      ],
      [
        "Combines minerals and organics in a unique formula",
        "Binds up to 95% of mycotoxins in feed",
        "Improves animal biochemical parameters",
        "Compatible with all feeds and medications",
        "Guarantees the safety of the final product",
        "Saves up to 40% on treatment costs, comparable to imported analogues",
      ],
    ),
    application: T(
      "0,5–2,0 кг/т корма; 10–50 г на животное 1 раз в сутки.",
      "0.5 – 2.0 kg of powder per ton of feed, 10 – 50 g of powder per animal once daily",
    ),
    form: T("Порошок", "Powder"),
    packaging: T("По спецификации поставщика", "Per supplier specification"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Микотоксины", "Органика", "Многокомпонентный"], ["Mycotoxin binder", "Organic", "Multi-component"]),
    specs: [
      { label: T("Афлатоксин B1", "Aflatoxin B1"), value: T("Не менее 95%", "Not less than 95%") },
      { label: T("Охратоксин A", "Ochratoxin A"), value: T("Не менее 90%", "Not less than 90%") },
      { label: T("Зеараленон", "Zearalenone"), value: T("Не менее 70%", "Not less than 70%") },
      { label: T("Токсин T-2", "T-2 toxin"), value: T("Не менее 40%", "Not less than 40%") },
      { label: T("Фумонизин B1", "Fumonisin B1"), value: T("Не менее 70%", "Not less than 70%") },
      { label: T("Деоксиниваленол", "Deoxynivalenol"), value: T("Не менее 55%", "Not less than 55%") },
    ],
  },
];
