import type { LocalizedProduct } from "../../catalog";

import { T, TList } from "./l10n";

export const mycotoxinBinderProducts: LocalizedProduct[] = [
  {
    slug: "novasil-plus",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Адсорбенты микотоксинов", "Mycotoxin adsorbents"),
    name: T("НовоСорб Ультра", "NovoSorb Ultra"),
    summary: T(
      "НовоСорб Ультра — адсорбент микотоксинов на основе природной смектитовой глины с высоким содержанием кальциевого монтмориллонита.",
      "NovoSorb Ultra is a mycotoxin adsorbent based on natural smectite clay rich in calcium montmorillonite.",
    ),
    description: T(
      "НовоСорб Ультра — адсорбент микотоксинов на основе природной смектитовой глины с высоким содержанием кальциевого монтмориллонита.",
      "NovoSorb Ultra is a mycotoxin adsorbent based on natural smectite clay rich in calcium montmorillonite.",
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
      ["Микотоксины", "Адсорбент", "Монтмориллонит"],
      ["Mycotoxins", "Adsorbent", "Montmorillonite"],
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
      { label: T("Производитель", "Manufacturer"), value: T("По спецификации поставщика", "Per supplier specification") },
      { label: T("Внешний вид", "Appearance"), value: T("Серый порошок", "Grey powder") },
      {
        label: T("Условия хранения", "Storage conditions"),
        value: T("36 месяцев с даты производства", "36 months from production date"),
      },
      {
        label: T("Условия хранения", "Storage conditions"),
        value: T("В сухом месте при температуре от −5 °C до +40 °C", "In a dry place at from -5°С to +40°С"),
      },
      { label: T("Упаковка", "Packaging"), value: T("Мешки 25 кг", "25 kg paper bags") },
    ],
  },
];
