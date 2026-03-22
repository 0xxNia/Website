import type { LocalizedProduct, LocalizedProductGroup } from "../../catalog";

import { T, TList } from "./l10n";

import { mycotoxinBinderProducts } from "./mycotoxin-products";

const aminoProducts: LocalizedProduct[] = [
  {
    slug: "methionine",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Аминокислоты", "Amino acids"),
    name: T("Метионин", "Methionine"),
    summary: T(
      "Метионин — незаменимая аминокислота, важна для обмена веществ; участвует в синтезе белков тканей, витаминов, гормонов и ферментов.",
      "Methionine is an essential amino acid, plays an important role in metabolism. It takes an active part in the synthesis of tissue proteins, as well as the synthesis of a number of vitamins, hormones, enzymes.",
    ),
    description: T(
      "Метионин — незаменимая аминокислота, важна для обмена веществ; активно участвует в синтезе белков тканей, витаминов, гормонов и ферментов. При дефиците у животных и птицы: снижение аппетита, анемия, атрофия мышц, ожирение печени, нарушения почек, снижение оплодотворяемости, замедление рода молодняка и продуктивности взрослой птицы, нарушение оперения — снижается эффективность использования корма. Высокая сыпучесть и хорошая смешиваемость; в отличие от жидкого метионингидроксианалога не вызывает коррозии оборудования, безопасен в обращении, применяется на любом этапе приготовления кормосмеси. Кормовой метионин — производитель: ВЗОС, Россия — активность: 99% — фасовка: 25 кг. DL-метионин кормовой — производитель: Degussa, Германия — активность: 99% — фасовка: 25 кг.",
      "Methionine is an essential amino acid, plays an important role in metabolism. He takes an active part in the synthesis of tissue proteins, as well as the synthesis of a number of vitamins, hormones, enzymes. With a lack of methionine in the body of animals and birds there is loss of appetite, anemia, muscle atrophy, obesity of the liver, impaired renal function, decreased fertilization, reduced growth rate of young and productivity of adult birds, violation of plumage and plumage in birds as a Result, there is a low efficiency of feed use. Due to the high flowability and good Miscibility of the drug is easy to use, and, unlike liquid methioningidroxyanaloga does not cause corrosion and wear of equipment, safe to handle and can be used at any stage of preparation of feed mixture. Feed methionine — Manufacturer: ВЗОС, Russia — The activity of the main component: 99% — Packaging: 25 kg — DL-Methionine feed — Manufacturer: Degussa, Germany — The activity of the main component: 99% — Packaging: 25 kg",
    ),
    benefits: TList([], []),
    application: T("Смешивание на комбикормовом заводе или ферме.", "Feed mixing at mill or farm level."),
    form: T("DL-метионин кормовой", "DL-Methionine feed"),
    packaging: T("25 кг", "25 kg"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Аминокислоты", "Метионин"], ["Amino acids", "Methionine"]),
    specs: [
      { label: T("Кормовой метионин — производитель", "Feed methionine — Manufacturer"), value: T("ВЗОС, Россия", "ВЗОС, Russia") },
      { label: T("Активность", "Activity"), value: T("99%", "99%") },
      { label: T("Упаковка", "Packaging"), value: T("25 кг", "25 kg") },
      { label: T("DL-метионин — производитель", "DL-Methionine — Manufacturer"), value: T("Degussa, Германия", "Degussa, Germany") },
      { label: T("Активность", "Activity"), value: T("99%", "99%") },
      { label: T("Упаковка", "Packaging"), value: T("25 кг", "25 kg") },
    ],
  },
  {
    slug: "lysine",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Аминокислоты", "Amino acids"),
    name: T("Лизин", "Lysine"),
    summary: T(
      "ЛИЗИН — первая лимитирующая аминокислота в кормах для свиней и вторая после метионина в кормах для птицы.",
      "LYSINE — the first limiting amino acid in pig feed and the second after methionine in poultry feed.",
    ),
    description: T(
      "ЛИЗИН — первая лимитирующая аминокислота в кормах для свиней и вторая после метионина в кормах для птицы. При дефиците лизина снижается эффективность биосинтеза белка. Лизин из зерна усваивается на 75–85%, из животного белка — на 85–95%; синтетический лизин — на 100%. В типовых рационах свиней лизин опережает другие аминокислоты. Доступный лизин идёт на синтез белков скелетных тканей, ферментов и гормонов.",
      "LYSINE the first limiting amino acid in pig feed and the second after methionine in poultry feed. With a lack of lysine in feed efficiency of protein biosynthesis in animals is reduced. Lysine contained in cereals is usually absorbed by 75-85%, animal protein lysine – by 85-95%. Lysine biosynthetic utilized 100%. In all commonly used pig rations lysine is significantly ahead of other amino acids. Available lysine is more fully used for the synthesis of proteins especially necessary for the formation of skeletal tissues, enzymes and hormones.",
    ),
    benefits: TList([], []),
    application: T("Обогащение рационов свиней и птицы.", "Enrichment of pig and poultry rations."),
    form: T("L-лизин", "L-Lysine"),
    packaging: T("25 кг", "25 kg"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Аминокислоты", "Лизин"], ["Amino acids", "Lysine"]),
    specs: [
      { label: T("Производитель", "Manufacturer"), value: T("Paik Kwang Industrial Co., Корея", "Paik Kwang Industrial Co, Korea") },
      { label: T("Активность основного компонента", "The activity of the main component"), value: T("99%", "99%") },
      { label: T("Упаковка", "Packaging"), value: T("25 кг", "25 kg") },
    ],
  },
  {
    slug: "feed-threonine",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Аминокислоты", "Amino acids"),
    name: T("Кормовой треонин", "Feed threonine"),
    summary: T(
      "Треонин — аминокислота; особенно важен при балансировке рационов на пшенице, ячмене и сорго.",
      "Threonine is an amino acid. It is especially important when balancing rations based on wheat, barley and sorghum.",
    ),
    description: T(
      "Треонин — аминокислота; особенно важен при балансировке рационов на пшенице, ячмене и сорго. Добавление чистых аминокислот в рацион свиней позволяет без снижения темпов роста снизить содержание белка в корме и улучшить его использование. В птицеводстве снижение уровня белка за счёт концентрированных аминокислот обеспечивает развитие ремонтного молодняка, яйценоскость несушек, прирост и конверсию у бройлеров.",
      "Threonine is an amino acid. It is especially important when balancing rations based on wheat, barley and sorghum. The addition of pure amino acids in the diet of pigs allows without reducing the growth rate to reduce the protein content in the feed and improve its use. In poultry farming, serious attention is paid to the task of reducing the level of protein in the feed by introducing concentrated amino acids, which ensures optimal development of repair young animals and maximum egg productivity in laying hens, and maximum weight gain and feed conversion in broilers.",
    ),
    benefits: TList([], []),
    application: T("Обогащение рационов свиней и птицы.", "Diet enrichment for pigs and poultry."),
    form: T("Кормовой треонин", "Feed-grade threonine"),
    packaging: T("25 кг", "25 kg"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Аминокислоты", "Треонин"], ["Amino acids", "Threonine"]),
    specs: [
      { label: T("Производитель", "Manufacturer"), value: T("Meihua Holdings Group Co., Китай", "Meihua Holdings Group Co, Китай") },
      { label: T("Активность основного компонента", "The activity of the main component"), value: T("98,5%", "98,5%") },
      { label: T("Упаковка", "Packaging"), value: T("25 кг", "25 kg") },
    ],
  },
  {
    slug: "tryptophan",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Аминокислоты", "Amino acids"),
    name: T("Триптофан", "Tryptophan"),
    summary: T(
      "Триптофан определяет физиологическую активность ферментов ЖКТ, участвует в обновлении белков плазмы.",
      "Tryptophan is an amino acid that determines the physiological activity of digestive tract enzymes, participates in the renewal of plasma proteins.",
    ),
    description: T(
      "Триптофан определяет физиологическую активность ферментов ЖКТ, участвует в обновлении белков плазмы, нормальную работу эндокринной и кроветворной систем, репродуктивной системы. При дефиците: замедление роста молодняка, снижение яйценоскости, рост затрат корма, атрофия желёз, слепота, анемия, снижение иммунитета, оплодотворяемости и вывода цыплят. У свиней — снижение кормления, извращённый аппетит, грубая щетина, истощение, ожирение печени; стерильность, возбудимость, судороги, катаракта, отрицательный азотистый баланс, потеря массы.",
      "Tryptophan is an amino acid that determines the physiological activity of digestive tract enzymes, participates in the renewal of plasma proteins, causes the normal functioning of the endocrine and hematopoietic apparatus, the reproductive system. When there is a lack of tryptophan in the diet, the growth of young animals slows down, the egg-laying capacity of laying hens decreases, feed costs for products increase, endocrine and sexual glands atrophy, blindness occurs, anemia develops, resistance and immune properties of the body, fertilization and hatching of eggs decrease. In pigs, receiving a diet, poor tryptophan, reduced feed intake, there is a perverted appetite, coarsening bristles and exhaustion, there is obesity of the liver. Deficiency of this amino acid also leads to sterility, increased excitability, convulsions, cataract formation, negative nitrogen balance and loss of body weight.",
    ),
    benefits: TList([], []),
    application: T("Обогащение рационов свиней и птицы.", "Diet enrichment for pigs and poultry."),
    form: T("Триптофан", "Tryptophan"),
    packaging: T("20 кг", "20 kg"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Аминокислоты", "Триптофан"], ["Amino acids", "Tryptophan"]),
    specs: [
      {
        label: T("Производитель", "Manufacturer"),
        value: T("«Henan Julong Biologicac Engineering Co.» Ltd, Китай", "«Henan Julong Biologicac Engineering Co.» LTD, China"),
      },
      { label: T("Активность основного компонента", "The activity of the main component"), value: T("98 %", "98 %") },
      { label: T("Упаковка", "Packaging"), value: T("20 кг", "20 kg") },
    ],
  },
];

const protectedAcids: LocalizedProduct[] = [
  {
    slug: "balangut",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Защищённые кислоты", "Protected acids"),
    name: T("Балангут", "Balangut"),
    summary: T(
      "Комплекс защищённых кислот BalanGut (моно-, ди- и триглицериды жирных кислот) от BASF.",
      "Complex of protected BalanGut acids (mono-, di- and triglycerides of fatty acids) from BASF.",
    ),
    description: T(
      "Комплекс защищённых кислот BalanGut (моно-, ди- и триглицериды жирных кислот) от BASF: стимулирует развитие, поддерживает здоровье и быстрое восстановление кишечника за счёт доставки масляной кислоты эпителию (от 0,3 кг/т); санитария кишечника от широкого спектра патогенов (сальмонелла, кишечная палочка, клостридии и др.) и восстановление микрофлоры (от 1 кг/т); концепция снижения антибиотиков (от 2 кг/т). Совместим с ветпрепаратами и добавками, синергия с ними. Термостабилен.",
      "Complex of protected BalanGut acids (mono-, di- and triglycerides of fatty acids) from BASF, designed for: To stimulate the development, support the health and rapid recovery of the intestines of the animal due to the effective supply of the intestinal epithelium with butyric acid (available at a dosage of 0.3 kg / t and above). To ensure the sanitation of the animal’s intestines from a fairly wide range of pathogenic microflora, such as salmonella, escherichia, clostridium, etc., and restore the normal balance of microflora (available at a dosage of 1 kg/t and above). For use within the framework of the concept of partial or complete rejection of the use of antibacterial drugs in animal rearing (available at dosages of 2 kg/ t and above). The drug is fully compatible with any veterinary drugs and feed additives, has a synergistic effect with them, weakening the protection of bacteria – mono-di-triglycerides of fatty acids in the composition of BalanGut make it much more vulnerable even to small dosages of products used at the enterprise as animal treatment. The drug is thermostable.",
    ),
    benefits: TList([], []),
    application: T("Дозировки 0,3–2+ кг/т в зависимости от задачи.", "Dosages 0.3–2+ kg/t depending on objective."),
    form: T("Порошок и жидкость", "Powder and liquid"),
    packaging: T(
      "Порошок в мешках 25 кг, жидкость в канистрах 20 л и IBC 1000 л",
      "Powder in bags of 25 kg, liquid in cans of 20 liters and IBC containers of 1000 liters",
    ),
    leadTime: T("24 месяца с даты производства", "24 months from the date of manufacture"),
    tags: TList(["Защищённые кислоты", "BASF", "Масляная кислота"], ["Protected acids", "BASF", "Butyric acid"]),
    specs: [
      { label: T("Производитель", "Manufacturer"), value: T("SILO S.p.A., Италия", "SILO S.p.A., Italy") },
      { label: T("Срок годности", "Expiration date"), value: T("24 месяца с даты производства", "24 months from the date of manufacture") },
    ],
  },
];

const proteinMaterials: LocalizedProduct[] = [
  {
    slug: "sunflower-meal",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Белковое сырьё", "Protein materials"),
    name: T("Подсолнечный шрот", "Sunflower meal"),
    summary: T(
      "Подсолнечный шрот — концентрированный корм, побочный продукт экстракционного производства масла.",
      "Sunflower meal is a concentrated feed, a by-product of oil extraction production.",
    ),
    description: T(
      "Подсолнечный шрот — концентрированный корм после экстракции жира из семян подсолнечника органическими растворителями. Гранулированный, высокобелковый; строгий контроль качества, сертификация по ГОСТ РФ, ветсертификат и сертификат качества. Доставка автотранспортом.",
      "Sunflower meal is a concentrated feed, a by-product of oil extraction production. It is obtained after extraction of fat from sunflower seeds with organic solvents in distillers and evaporators. Granulated, high-protein All products undergo strict quality control, guaranteed by the experience of specialists and modern production technologies. It is certified and corresponds to GOST Of the Russian Federation. Accompanied by a veterinary certificate and a quality certificate. Delivery is carried out by road.",
    ),
    benefits: TList([], []),
    application: T("Производство комбикормов, источник белка.", "Compound feed production, protein source."),
    form: T("Гранулированный шрот", "Granulated meal"),
    packaging: T("Навалом / по договору", "Bulk / per contract"),
    leadTime: T("По договору", "Per contract"),
    tags: TList(["Белок", "Подсолнечник"], ["Protein", "Sunflower"]),
    specs: [],
  },
  {
    slug: "sunflower-cake",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Белковое сырьё", "Protein materials"),
    name: T("Подсолнечный жмых", "Sunflower cake"),
    summary: T(
      "Подсолнечный жмых — концентрированный корм при отжиме масла технологией «холодного прессования».",
      "Sunflower cake is a concentrated feed obtained as a result of pressing sunflower oil on the technology of “cold pressing”.",
    ),
    description: T(
      "Высокобелковая добавка для кормов с высокой кормовой ценностью; применяется для всех видов животных как источник белка выше, чем у зерновых. Гранулированный; контроль качества, ГОСТ РФ, ветсертификат и сертификат качества. Доставка автотранспортом.",
      "Sunflower cake is a concentrated feed obtained as a result of pressing sunflower oil on the technology of “cold pressing”. Cake is a high-protein additive for the production of animal feed, has a high feed value. Sunflower meal can be used in the diet of any species of animals, mainly as a source of proteins, the quality of which is much higher than that of grain cereals. Granulated, high-protein, All products undergo strict quality control, guaranteed by the experience of specialists and modern production technologies. It is certified and corresponds to GOST Of the Russian Federation. Accompanied by a veterinary certificate and a quality certificate. Delivery is carried out by road.",
    ),
    benefits: TList([], []),
    application: T("Производство кормов для животных.", "Animal feed production."),
    form: T("Гранулированный жмых", "Granulated cake"),
    packaging: T("Навалом / по договору", "Bulk / per contract"),
    leadTime: T("По договору", "Per contract"),
    tags: TList(["Белок", "Подсолнечник"], ["Protein", "Sunflower"]),
    specs: [],
  },
  {
    slug: "sunflower-oil",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Белковое сырьё", "Protein materials"),
    name: T("Подсолнечное масло", "Sunflower oil"),
    summary: T(
      "Содержит ~90% ненасыщенных жирных кислот, из них ~55% — линолевая; есть альфа-токоферол.",
      "Sunflower oil — contains 90% of unsaturated fatty acids, of which 55% — linoleic acid, contains alpha-tocopherol.",
    ),
    description: T(
      "Растительные масла усваиваются лучше животных жиров. Широко используется в комбикормах для всех видов. Нерафинированное, навалом; контроль качества, ветсертификат и сертификат качества. Доставка автотранспортом.",
      "Sunflower oil — contains 90% of unsaturated fatty acids, of which 55% — linoleic acid, contains alpha-tocopherol, which has the greatest vitamin value. Vegetable oils are absorbed in animals much better than animal fats. Sunflower oil is widely used for production of various compound feeds for feeding of all kinds of animals. Unrefined sunflower oil press in bulk. The goods pass strict quality control. Accompanied by a veterinary certificate and a quality certificate. Delivery is carried out by road.",
    ),
    benefits: TList([], []),
    application: T("Энергия и источник витамина E в комбикормах.", "Energy and vitamin E source in compound feeds."),
    form: T("Нерафинированное масло, навалом", "Unrefined oil, bulk"),
    packaging: T("Навалом", "Bulk"),
    leadTime: T("По договору", "Per contract"),
    tags: TList(["Жиры", "Подсолнечное масло"], ["Fat", "Sunflower oil"]),
    specs: [],
  },
  {
    slug: "soybean-meal",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Белковое сырьё", "Protein materials"),
    name: T("Соевый шрот", "Soybean meal"),
    summary: T(
      "Высокобелковый шрот при производстве масла из семян сои.",
      "Soybean meal is a high-protein type of meal, which is obtained during the production of oil from soybean seeds.",
    ),
    description: T(
      "Широкий спектр минералов, аминокислот и белков; основа различных кормов. Высокая усвояемость, биологическая ценность близка к животным белкам. Для всех видов и возрастов; особенно для молодняка и птицы. Сертификация по СТ РТ, ветсертификат и сертификат качества. Доставка автотранспортом.",
      "Soybean meal is a high-protein type of meal, which is obtained during the production of oil from soybean seeds. Soybean meal contains a wide range of minerals, amino acids and proteins. It is used as a basis for the production of various animal feed. It is one of the highest quality products of plant origin for feeding farm animals. Soybean meal is well absorbed, and its biological value is close to animal proteins, thus, soybean meal has a high content of easily digestible protein and its usefulness. Soybean feed is fed to all species and age groups of animals. Especially good food they are for young animals and birds. The goods pass strict quality control. Soybean meal is certified and corresponds to SRT. Accompanied by a veterinary certificate and a quality certificate. Delivery is carried out by road.",
    ),
    benefits: TList([], []),
    application: T("Высокобелковые рецептуры кормов.", "High-protein feed formulation."),
    form: T("Шрот", "Meal"),
    packaging: T("Навалом / по договору", "Bulk / per contract"),
    leadTime: T("По договору", "Per contract"),
    tags: TList(["Белок", "Соя"], ["Protein", "Soybean"]),
    specs: [],
  },
];

const vitamins: LocalizedProduct[] = [
  {
    slug: "choline-chloride",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Витамины и витаминные смеси", "Vitamins and vitamin mixtures"),
    name: T("Хлорид холина", "Choline chloride"),
    summary: T(
      "Один из основных липотропных агентов, снижающих жировое перерождение печени.",
      "Choline chloride is one of the main agents of the so-called lipotropic substances that prevent or significantly reduce fatty liver infiltration.",
    ),
    description: T(
      "Холин — источник метильных групп для обмена жиров и передачи нервного возбуждения. Потребность закрывается синтезом в организме и добавками в корм; наибольшая потребность у птицы в начале продуктивного периода.",
      "Choline chloride is one of the main agents of the so-called lipotropic substances that prevent or significantly reduce fatty liver infiltration. Choline is also an important source of methyl groups necessary for the ongoing biochemical processes in the body, necessary for fat metabolism and transmission of nervous excitation. The necessary amount of choline for animals should be provided by its synthesis in the body, as well as additives to feed. The highest need for an additional knee is experienced by a bird in the initial productive period.",
    ),
    benefits: TList([], []),
    application: T("Обогащение кормов для птицы и животных.", "Poultry and livestock feed enrichment."),
    form: T("Хлорид холина на носителе", "Choline chloride on carrier"),
    packaging: T("25 кг", "25 kg"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Витамины", "Холин"], ["Vitamins", "Choline"]),
    specs: [
      { label: T("Производитель", "Manufacturer"), value: T("TAIAN HAVAY CHEMICALS Co., Ltd, Китай", "“TAIAN HAVAY CHEMICALS Co., Ltd”, China") },
      {
        label: T("Активность основного компонента", "The activity of the main component"),
        value: T("60 %, кукурузный носитель до 100 %", "60 %, corn carrier up to 100 %"),
      },
      { label: T("Упаковка", "Packaging"), value: T("25 кг", "25 kg") },
    ],
  },
  {
    slug: "vitamin-e",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Витамины и витаминные смеси", "Vitamins and vitamin mixtures"),
    name: T("Витамин E", "Vitamin E"),
    summary: T(
      "Антиоксидантное действие; снижает риск некроза печени и дегенерации мышц у с/х животных и птицы.",
      "Vitamin E in the feeding of agricultural animals and poultry has an antioxidant effect, prevents liver necrosis and muscle degeneration.",
    ),
    description: T(
      "Регулирует гормональный обмен и функции половых желёз. Дефицит: поражение сердечной и скелетной мышц, нарушения плодовитости, СС и нервной систем, печени, жировых депо (бурый жир у свиней); у свиней — нарушение движений и судороги; у телят и ягнят — «белое мясо»; у птицы — меньше выводимых цыплят.",
      "Vitamin E in the feeding of agricultural animals and poultry has an antioxidant effect, prevents liver necrosis and muscle degeneration, performs the regulation of hormonal metabolism and the functions of the gonads. Manifestations of vitamin E deficiency is expressed in damage to the muscles of the heart and skeletal (dystrophy, myopathy), fertility disorders, changes in the cardiovascular or nervous systems, liver damage and changes in the fat depot (brown fat in pigs). With a deficiency of vitamin E in the body of pigs characterized by impaired movement and muscle cramps, calves and lambs observed white meat, poultry reduced the number of hatching chickens.",
    ),
    benefits: TList([], []),
    application: T("Антиоксидантная подкормка в кормах.", "Antioxidant supplementation in feed."),
    form: T("Премикс витамина E", "Vitamin E premix"),
    packaging: T("25 кг", "25 kg"),
    leadTime: T("По спецификации поставщика", "Per supplier specification"),
    tags: TList(["Витамины", "Витамин E"], ["Vitamins", "Vitamin E"]),
    specs: [
      { label: T("Производитель", "Manufacturer"), value: T("Zhejiang Medicine Co., Ltd, Китай", "“Zhejiang Medicine Co., Ltd”, China") },
      { label: T("Активность основного компонента", "The activity of the main component"), value: T("50 %", "50 %") },
      { label: T("Упаковка", "Packaging"), value: T("25 кг", "25 kg") },
    ],
  },
];

const minerals: LocalizedProduct[] = [
  {
    slug: "monocalcium-phosphate",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Минеральные комплексы", "Mineral complexes"),
    name: T("Монокальцийфосфат", "Monocalcium phosphate"),
    summary: T(
      "Ca(H2PO4)2 — около 22% фосфора и 16% кальция.",
      "Monocalcium phosphate – Ca(H2PO4)2 – contains 22 % phosphorus and 16 % calcium.",
    ),
    description: T(
      "Кормовая добавка для обогащения и баланса P и Ca. Снижает риск заболеваний при дефиците макроэлементов, поддерживает обмен, иммунитет и репродукцию. Фосфор почти полностью водорастворим, эффективен для всех видов. Неорганический фосфор усваивается как органический. Повышает эффективность кормления (прирост, качество мяса, удой). Белый или сероватый порошок, хорошо растворим в воде. Доставка автотранспортом.",
      "Monocalcium phosphate – Ca(H2PO4)2 – contains 22 % phosphorus and 16 % calcium. Feed additive for enrichment and balancing of diets of farm animals on phosphorus and calcium. The introduction of feed phosphates in the diet allows to avoid diseases associated with the lack of these macronutrients, to ensure proper metabolism in the body, and consequently, the effective functioning of the immune and reproductive systems. Phosphorus-calcium feed additive, which has about 100% water-soluble phosphorus, is effective for all kinds of animals. The effectiveness of the use of monocalcium phosphate in animal husbandry is explained by the fact that phosphorus of inorganic origin is absorbed by animals as well as organic. The use of feed phosphates increases the usefulness of feeding animals and poultry, increases their productivity (daily weight gain, meat quality, milk yield). Calcium and phosphorus play a huge role in the life of animals and birds. It is a white or grayish powder consisting of small granules, easily soluble in water. Delivery is carried out by road",
    ),
    benefits: TList([], []),
    application: T("Баланс P и Ca в рационах.", "P and Ca balancing in rations."),
    form: T("Белый или сероватый порошок", "White or grayish powder"),
    packaging: T("По договору", "Per contract"),
    leadTime: T("По договору", "Per contract"),
    tags: TList(["Минералы", "Фосфор", "Кальций"], ["Minerals", "Phosphorus", "Calcium"]),
    specs: [],
  },
  {
    slug: "magnesium-sulfate",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Минеральные комплексы", "Mineral complexes"),
    name: T("Сульфат магния", "Magnesium sulfate"),
    summary: T(
      "MgSO4 — обогащение рационов магнием и серой в производстве кормов.",
      "Magnesium sulfate MgSO4 is used in the production of feed for enrichment and balancing the diet of farm animals for magnesium and sulfur.",
    ),
    description: T(
      "Применяется для КРС, лошадей, овец и коз. Магний — важнейший минерал, участвует в ферментах и синтезе белка. Сера — в образовании кератина (шерсть, кожа, рога). Улучшает обмен, мышечную функцию, СС и костную ткань.",
      "Magnesium sulfate MgSO4 is used in the production of feed for enrichment and balancing the diet of farm animals for magnesium and sulfur. It is used in feeding cattle, horses, sheep and goats. It contains macroelements magnesium Mg and sulfur S. Magnesium is one of the most important mineral substances and should be included in the daily diet of animals. This macrocell is involved in the formation of enzymes, is an activator necessary for the synthesis of proteins. Sulfur in magnesium sulfate promotes the formation of keratin – an essential component of hair, skin and horns. The use of magnesium sulfate improves metabolism and muscle function, strengthens the cardiovascular system, animal bone tissue.",
    ),
    benefits: TList(
      [
        "высокое содержание активных веществ",
        "высокое содержание магния и серы",
        "низкое содержание примесей тяжёлых металлов",
        "размер кристаллов менее 0,8 мм",
      ],
      [
        "high content of active components",
        "high content of magnesium and sulfur macronutrients",
        "lack of impurities of heavy metals",
        "crystal size – less than 0.8 mm",
      ],
    ),
    application: T("Обогащение кормов Mg и S.", "Mg and S enrichment in feed."),
    form: T("Кристаллический порошок", "Crystalline powder"),
    packaging: T("Мешки 25 кг", "25 kg bags"),
    leadTime: T("2 года", "2 years"),
    tags: TList(["Минералы", "Магний", "Сера"], ["Minerals", "Magnesium", "Sulfur"]),
    specs: [
      { label: T("Содержание активных веществ", "The content of active components"), value: T("не менее 98,8%", "not less than 98.8%") },
      { label: T("Производитель", "Manufacturer"), value: T("KALI, Германия", "KALI, Germany") },
      { label: T("Упаковка", "Packaging"), value: T("Мешки 25 кг", "25 kg bags") },
      { label: T("Срок годности", "Expiration date"), value: T("2 года", "2 years") },
    ],
  },
];

const enzymes: LocalizedProduct[] = [
  {
    slug: "luminase-5500-hr",
    listingImage: "/media/catalog/feed-production-hero.png",
    badge: T("Ферменты", "Enzymes"),
    name: T("Luminase 5500 ХР", "Luminase 5500 ХР"),
    summary: T(
      "Кормовая добавка для улучшения усвояемости кормов и продуктивности птицы и свиней.",
      "Luminase 5500 ХР is a feed additive for improving the digestibility of feeds and increasing the productivity of poultry and pigs.",
    ),
    description: T(
      "Многоферментный комплекс индийской микробиологической отрасли: ксиланаза, амилаза, целлюлаза, фитаза, β-глюканаза, маннаназа, протеаза, пектиназа — улучшают усвояемость, энергию рациона, вкусовые качества. Положительно влияет на здоровье и продуктивность.",
      "Luminase 5500 ХР is a feed additive for improving the digestibility of feeds and increasing the productivity of poultry and pigs. It is a Multi-enzyme complex developed by a leader of Indian microbiological industry. Contains a large number of enzymes: Xylanase, Amylase, Cellulase, Phytase, β-Glucanase, Mannanase, Protease and Pectinase, which improve the digestibility of feeds, the digestibility of nutrients in diets, add energy in diets, improve the eating qualities and palatability of feeds. The use of enzymes in feeds has a positive effect on the health and productivity of poultry and pigs.",
    ),
    benefits: TList(
      [
        "высокое содержание ферментов",
        "несколько ксиланаз к растворимым и нерастворимым арабиноксиланам",
        "несколько протеаз — экзо- и эндогенных",
        "несколько амилаз к разным крахмалам",
        "обогащение рациона за счёт усвояемости",
        "снижение себестоимости корма",
        "эффективность при разных pH",
        "термостабильность при высоких температурах",
      ],
      [
        "high enzyme content",
        "multiple xylanases acting on both types of arabinoxylans – soluble and insoluble",
        "multiple proteases – exogenous and endogenous, which allows the use of a wide range of protein sources of plant and animal origin",
        "multiple amylases are effective against different starches",
        "enrichment of diets due to greater digestibility of nutrients",
        "allows to reduce the cost of feed due to a higher intake percentage",
        "effective at different pH levels",
        "thermostable at high temperatures",
      ],
    ),
    application: T("Норма ввода: 50–75 г на тонну корма", "Input Rate: 50-75 g per ton of feed"),
    form: T("Порошок белый — светло-коричневый", "white-light-brown powder"),
    packaging: T("Мешки 25 кг", "25 kg bags"),
    leadTime: T("12 месяцев с даты производства", "12 months from the date of manufacture"),
    tags: TList(["Ферменты", "Мультиферментный комплекс"], ["Enzymes", "Multi-enzyme"]),
    specs: [
      { label: T("Целлюлаза", "Cellulase"), value: T("1 200 000 Е/г", "1200000 U/g") },
      { label: T("Амилаза", "Amylase"), value: T("120 000 Е/г", "120000 U/g") },
      { label: T("Ксиланаза", "Xylanase"), value: T("30 000 Е/г", "30000 U/g") },
      { label: T("β-глюканаза", "β-Glucanase"), value: T("12 000 Е/г", "12000 U/g") },
      { label: T("Фитаза", "Phytase"), value: T("10 000 Е/г", "10000 U/g") },
      { label: T("Протеаза", "Protease"), value: T("1400 Е/г", "1400 U/g") },
      { label: T("Маннаназа", "Mannanase"), value: T("1300 Е/г", "1300 U/g") },
      { label: T("Пектиназа", "Pectinase"), value: T("150 Е/г", "150 U/g") },
      { label: T("Без ГМО", "GMO-free"), value: T("Да", "Yes") },
      { label: T("Производитель", "Manufacturer"), value: T("Lumis Biotech Pvt. Ltd, Индия", "Lumis Biotech Pvt. Ltd, India") },
    ],
  },
];

export const feedProductionFeedimportProducts: LocalizedProduct[] = [
  ...mycotoxinBinderProducts,
  ...aminoProducts,
  ...protectedAcids,
  ...proteinMaterials,
  ...vitamins,
  ...minerals,
  ...enzymes,
];

export const feedProductionFeedimportGroups: LocalizedProductGroup[] = [
  {
    id: "mycotoxin-binder",
    title: T("Связыватели микотоксинов", "Mycotoxin binder"),
    productSlugs: ["novasil-plus", "maxisorb", "toxinon", "toxinon-organic"],
  },
  {
    id: "amino-acids",
    title: T("Аминокислоты", "Amino acids"),
    productSlugs: ["methionine", "lysine", "feed-threonine", "tryptophan"],
  },
  {
    id: "protected-acids",
    title: T("Защищённые кислоты", "Protected acids"),
    productSlugs: ["balangut"],
  },
  {
    id: "protein-materials",
    title: T("Белковое сырьё", "Protein materials"),
    productSlugs: ["sunflower-meal", "sunflower-cake", "sunflower-oil", "soybean-meal"],
  },
  {
    id: "vitamins",
    title: T("Витамины и витаминные смеси", "Vitamins and vitamin mixtures"),
    productSlugs: ["choline-chloride", "vitamin-e"],
  },
  {
    id: "mineral-complexes",
    title: T("Минеральные комплексы", "Mineral complexes"),
    productSlugs: ["monocalcium-phosphate", "magnesium-sulfate"],
  },
  {
    id: "enzymes",
    title: T("Ферменты", "Enzymes"),
    productSlugs: ["luminase-5500-hr"],
  },
];
