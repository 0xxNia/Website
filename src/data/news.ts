import type { Locale, NewsArticle, NewsSection } from "@/types/content";
import { withLocalizedBrand } from "@/lib/branding";

type LocalizedText = Record<Locale, string>;

type LocalizedSection = {
  title: LocalizedText;
  paragraphs: Record<Locale, string[]>;
  list?: Record<Locale, string[]>;
};

type LocalizedArticle = {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  cardImage?: string;
  cardImageTone?: "dark" | "light";
  heroTitle: LocalizedText;
  heroSummary: LocalizedText;
  publishedAt: string;
  sections: LocalizedSection[];
  relatedCategorySlugs: string[];
};

function localizeSections(locale: Locale, items: LocalizedSection[]): NewsSection[] {
  return items.map((item) => ({
    title: item.title[locale],
    paragraphs: item.paragraphs[locale],
    list: item.list?.[locale],
  }));
}

function localizeArticle(locale: Locale, article: LocalizedArticle): NewsArticle {
  return withLocalizedBrand(
    {
    slug: article.slug,
    category: article.category[locale],
    title: article.title[locale],
    excerpt: article.excerpt[locale],
    ...(article.cardImage ? { cardImage: article.cardImage } : {}),
    ...(article.cardImageTone ? { cardImageTone: article.cardImageTone } : {}),
    heroTitle: article.heroTitle[locale],
    heroSummary: article.heroSummary[locale],
    publishedAt: article.publishedAt,
    sections: localizeSections(locale, article.sections),
    relatedCategorySlugs: article.relatedCategorySlugs,
    },
    locale,
  );
}

const articleRecords: LocalizedArticle[] = [
  {
    slug: "mobile-lab-feed-audit",
    cardImage: "/media/news/mobile-lab-feed-audit.jpg",
    category: {
      ru: "Технологическое сопровождение",
      en: "Technological support",
      kk: "Технологиялық сүйемелдеу",
    },
    title: {
      ru: "Мобильная лаборатория IMPXFIT провела аудит кормового сырья на площадке клиента",
      en: "IMPXFIT mobile laboratory completed a feed raw material audit at a client site",
      kk: "IMPXFIT мобильді зертханасы клиент алаңында жемдік шикізат аудитін жүргізді",
    },
    excerpt: {
      ru: "Команда выехала на площадку для экспресс-оценки сырья, проверки условий хранения и подготовки технических рекомендаций.",
      en: "The team visited the site for rapid raw material assessment, storage checks and technical recommendations.",
      kk: "Команда шикізатты жедел бағалау, сақтау жағдайын тексеру және техникалық ұсыныстар әзірлеу үшін алаңға шықты.",
    },
    heroTitle: {
      ru: "Выездной аудит сырья и условий хранения с мобильной лабораторией IMPXFIT",
      en: "On-site audit of raw materials and storage conditions with the IMPXFIT mobile lab",
      kk: "IMPXFIT мобильді зертханасымен шикізат пен сақтау жағдайына көшпелі аудит",
    },
    heroSummary: {
      ru: "В рамках проекта специалисты оценили ключевые партии сырья, зафиксировали критические точки по хранению и сформировали практический план следующих шагов для технологической службы клиента.",
      en: "Within the project, specialists assessed key raw material batches, mapped storage risk points and prepared a practical next-step plan for the client's technology team.",
      kk: "Жоба аясында мамандар негізгі шикізат партияларын бағалап, сақтау тәуекел нүктелерін белгілеп, клиенттің технологиялық қызметіне арналған келесі қадам жоспарын дайындады.",
    },
    publishedAt: "2026-02-18",
    sections: [
      {
        title: {
          ru: "Что проверяли на площадке",
          en: "What was checked on site",
          kk: "Алаңда не тексерілді",
        },
        paragraphs: {
          ru: [
            "Аудит включал экспресс-оценку влажности, визуальный контроль хранения, анализ логики движения сырья по площадке и обсуждение с технологами текущих ограничений по рецептуре.",
            "Такой формат помогает быстро понять, где именно начинается риск: на этапе приемки, хранения, внутренней логистики или уже в кормовой схеме.",
          ],
          en: [
            "The audit included moisture screening, visual storage checks, review of internal raw material flow and a discussion with technologists about current formula constraints.",
            "This format helps identify where the risk really starts: during intake, storage, internal logistics or later in the feeding scheme.",
          ],
          kk: [
            "Аудит ылғалдылықты жедел бағалауды, сақтау жағдайын визуалды тексеруді, ішкі шикізат қозғалысын талдауды және технологтармен ағымдағы рецепт шектеулерін талқылауды қамтыды.",
            "Мұндай формат тәуекелдің қайдан басталатынын тез анықтауға мүмкіндік береді: қабылдау, сақтау, ішкі логистика немесе қоректендіру схемасы кезеңінен.",
          ],
        },
        list: {
          ru: [
            "проверка ключевых партий зерновой и белковой группы",
            "оценка критических зон хранения",
            "фиксация отклонений, влияющих на стабильность рецепта",
          ],
          en: [
            "check of key grain and protein batches",
            "assessment of critical storage zones",
            "capture of deviations affecting formula stability",
          ],
          kk: [
            "дәнді және ақуыз тобының негізгі партияларын тексеру",
            "сақтаудың сындарлы аймақтарын бағалау",
            "рецепт тұрақтылығына әсер ететін ауытқуларды белгілеу",
          ],
        },
      },
      {
        title: {
          ru: "Какие выводы получили",
          en: "Key findings",
          kk: "Негізгі қорытындылар",
        },
        paragraphs: {
          ru: [
            "По итогам выезда клиент получил не только диагностическую картину, но и прикладные рекомендации: какие партии использовать в первую очередь, где усилить контроль и как скорректировать текущую логистику внутри площадки.",
            "Следующим этапом команда IMPXFIT предложила объединить лабораторные наблюдения с технологическим аудитом рациона, чтобы решение было связано с конечным производственным эффектом.",
          ],
          en: [
            "After the visit, the client received both a diagnostic picture and applied recommendations: which batches should be used first, where control must be tightened and how internal logistics can be adjusted.",
            "As a next step, the IMPXFIT team proposed combining the field observations with a ration audit so the action plan is linked to the final production effect.",
          ],
          kk: [
            "Сапар қорытындысында клиент диагностикалық көрініспен қатар қолданбалы ұсыныстар алды: қай партияны алдымен пайдалану, қай жерде бақылауды күшейту және ішкі логистиканы қалай түзету керек.",
            "Келесі қадам ретінде IMPXFIT командасы далалық бақылауларды рацион аудитімен біріктіруді ұсынды, сонда шешім соңғы өндірістік нәтижемен байланысады.",
          ],
        },
      },
    ],
    relatedCategorySlugs: ["technical-support", "crop-feed-solutions"],
  },
  {
    slug: "broiler-seminar-efficiency",
    cardImage: "/media/news/broiler-seminar-efficiency.jpg",
    category: {
      ru: "Птицеводство",
      en: "Poultry",
      kk: "Құс шаруашылығы",
    },
    title: {
      ru: "IMPXFIT провела рабочий семинар по эффективности программ для бройлера",
      en: "IMPXFIT held a working seminar on broiler program efficiency",
      kk: "IMPXFIT бройлер бағдарламаларының тиімділігі бойынша жұмыс семинарын өткізді",
    },
    excerpt: {
      ru: "На встрече с технологами и производственными командами обсудили конверсию корма, контроль кишечных рисков и структуру продуктовой программы.",
      en: "The meeting with technologists and production teams focused on feed conversion, gut risk control and product program structure.",
      kk: "Технологтармен және өндірістік командалармен кездесуде жем конверсиясы, ішек тәуекелі және өнім бағдарламасының құрылымы талқыланды.",
    },
    heroTitle: {
      ru: "Рабочая сессия по программам для бройлера: от рецептуры до производственного результата",
      en: "Broiler program working session: from formula to production result",
      kk: "Бройлер бағдарламалары бойынша жұмыс сессиясы: рецепттен өндірістік нәтижеге дейін",
    },
    heroSummary: {
      ru: "Семинар был построен не как презентация продукта, а как совместный разбор производственных сценариев с фокусом на управляемость программы, экономику партии и стабильность технологических решений.",
      en: "The seminar was structured not as a product presentation, but as a joint review of production scenarios with focus on program control, batch economics and technological stability.",
      kk: "Семинар өнім презентациясы емес, өндірістік сценарийлерді бірлесіп талқылау форматында өтті, негізгі назар бағдарлама басқарылуына, партия экономикасына және технология тұрақтылығына аударылды.",
    },
    publishedAt: "2026-01-24",
    sections: [
      {
        title: {
          ru: "Фокус обсуждения",
          en: "Discussion focus",
          kk: "Талқылау фокусы",
        },
        paragraphs: {
          ru: [
            "Участники разобрали, как корректировать программу для бройлера в условиях переменного сырьевого качества и повышенного давления на себестоимость.",
            "Отдельно обсуждали связку между рецептурой, фактической поедаемостью и теми контрольными точками, которые технологическая служба может отслеживать внутри партии.",
          ],
          en: [
            "Participants reviewed how to adjust broiler programs under variable raw material quality and increased cost pressure.",
            "A separate topic was the connection between formula design, actual intake and the checkpoints that the technology team can track within the batch.",
          ],
          kk: [
            "Қатысушылар шикізат сапасы құбылмалы және өзіндік құн қысымы жоғары жағдайда бройлер бағдарламасын қалай түзету керектігін қарастырды.",
            "Сонымен қатар рецепт құрастыру, нақты жейтіндік және технологиялық қызмет партия ішінде бақылай алатын нүктелер арасындағы байланыс талқыланды.",
          ],
        },
      },
      {
        title: {
          ru: "Практический результат",
          en: "Practical result",
          kk: "Практикалық нәтиже",
        },
        paragraphs: {
          ru: [
            "По итогам сессии заказчик получил набор рабочих сценариев для стартовой и ростовой фазы, а также структуру пилотного внедрения одной из продуктовых линий IMPXFIT.",
            "Такой формат помогает перейти от общего интереса к конкретной производственной задаче без перегруженной коммерческой коммуникации.",
          ],
          en: [
            "After the session, the client received a set of working scenarios for starter and grower phases plus a pilot implementation structure for one of the IMPXFIT lines.",
            "This format helps move from general interest to a concrete production task without overloaded commercial communication.",
          ],
          kk: [
            "Сессия нәтижесінде клиент старт және өсім кезеңдеріне арналған жұмыс сценарийлерін және IMPXFIT желілерінің бірін пилоттық енгізу құрылымын алды.",
            "Мұндай формат артық коммерциялық коммуникациясыз жалпы қызығушылықтан нақты өндірістік міндетке өтуге көмектеседі.",
          ],
        },
      },
    ],
    relatedCategorySlugs: ["poultry", "technical-support"],
  },
  {
    slug: "raw-material-risk-map",
    cardImage: "/media/news/raw-material-risk-map.png",
    cardImageTone: "light",
    category: {
      ru: "Сырьевые решения",
      en: "Raw material solutions",
      kk: "Шикізат шешімдері",
    },
    title: {
      ru: "IMPXFIT подготовила карту сырьевых рисков для сезона 2026",
      en: "IMPXFIT prepared a raw material risk map for the 2026 season",
      kk: "IMPXFIT 2026 маусымына арналған шикізат тәуекел картасын дайындады",
    },
    excerpt: {
      ru: "Экспертный обзор охватывает вариативность сырья, логистические ограничения и приоритеты для пересборки рецептурных матриц.",
      en: "The expert review covers raw material variability, logistics constraints and priorities for formula matrix redesign.",
      kk: "Сараптамалық шолу шикізат өзгергіштігін, логистикалық шектеулерді және рецепт матрицасын қайта құру басымдықтарын қамтиды.",
    },
    heroTitle: {
      ru: "Сырьевые риски сезона 2026: как предприятиям перестраивать матрицу без потери управляемости",
      en: "Raw material risks in 2026: how businesses can rebuild the matrix without losing control",
      kk: "2026 маусымындағы шикізат тәуекелі: матрицаны басқарылуды жоғалтпай қалай қайта құру керек",
    },
    heroSummary: {
      ru: "Обзор подготовлен для клиентов, которым важно заранее понимать, какие зоны сырьевой политики потребуют адаптации, а какие решения стоит заложить в работу уже сейчас.",
      en: "The review is designed for clients who need an early view on which raw material policy areas require adaptation and which decisions should be prepared now.",
      kk: "Шолу шикізат саясатының қай аймақтары бейімдеуді талап ететінін және қандай шешімдерді қазірден жұмысқа енгізу керектігін алдын ала түсінгісі келетін клиенттерге арналған.",
    },
    publishedAt: "2025-12-11",
    sections: [
      {
        title: {
          ru: "Что вошло в обзор",
          en: "What the review includes",
          kk: "Шолуға не енді",
        },
        paragraphs: {
          ru: [
            "Команда IMPXFIT собрала сигналы по доступности ключевых компонентов, изменению логистики, сезонным факторам хранения и потенциальным ограничениям по качеству.",
            "Материал не заменяет закупочную стратегию клиента, но помогает определить зоны, в которых нужно заранее подготовить альтернативную матрицу.",
          ],
          en: [
            "The IMPXFIT team gathered signals on availability of key components, logistics changes, seasonal storage factors and potential quality constraints.",
            "The material does not replace the client's procurement strategy, but it helps identify where an alternative matrix should be prepared in advance.",
          ],
          kk: [
            "IMPXFIT командасы негізгі компонент қолжетімділігі, логистика өзгерістері, маусымдық сақтау факторлары және ықтимал сапа шектеулері бойынша деректер жинады.",
            "Материал клиенттің сатып алу стратегиясын алмастырмайды, бірақ қай жерде баламалы матрицаны алдын ала дайындау қажет екенін көрсетеді.",
          ],
        },
      },
      {
        title: {
          ru: "Как использовать материал",
          en: "How to use the material",
          kk: "Материалды қалай қолдану керек",
        },
        paragraphs: {
          ru: [
            "Для части клиентов карта рисков стала основой для проектной работы по пересчету рецептур и планированию продуктовых замен внутри каталога IMPXFIT.",
            "В сочетании с аудитом сырья и консультацией по категории это позволяет быстрее перейти от общего анализа к рабочему действию.",
          ],
          en: [
            "For some clients the risk map became the starting point for formula recalculation projects and product substitution planning inside the IMPXFIT catalog.",
            "Combined with a raw material audit and category consultation, it helps move from general analysis to practical action faster.",
          ],
          kk: [
            "Кейбір клиенттер үшін тәуекел картасы рецептті қайта есептеу жобалары мен IMPXFIT каталогы ішіндегі өнім алмастыруды жоспарлаудың бастапқы нүктесіне айналды.",
            "Шикізат аудиті және категория бойынша кеңеспен бірге бұл жалпы талдаудан практикалық әрекетке тез өтуге көмектеседі.",
          ],
        },
      },
    ],
    relatedCategorySlugs: ["crop-feed-solutions", "feed-production"],
  },
  {
    slug: "transition-program-dairy-case",
    cardImage: "/media/news/transition-program-dairy-case.jpg",
    category: {
      ru: "КРС",
      en: "Cattle",
      kk: "ІҚМ",
    },
    title: {
      ru: "На молочном комплексе запущена программа IMPXFIT по транзитному периоду",
      en: "A dairy complex launched the IMPXFIT transition-period program",
      kk: "Сүт кешенінде IMPXFIT өтпелі кезең бағдарламасы іске қосылды",
    },
    excerpt: {
      ru: "Проект объединил кормовую настройку, аудит объемистых кормов и рабочий контроль ранней лактации.",
      en: "The project combined feeding adjustments, forage audit and practical control during early lactation.",
      kk: "Жоба азықтауды баптауды, көлемді азық аудитін және ерте лактациядағы практикалық бақылауды біріктірді.",
    },
    heroTitle: {
      ru: "Пилот по транзитному периоду: как IMPXFIT связал продукт, рацион и контроль по группе",
      en: "Transition-period pilot: how IMPXFIT linked product, ration and group control",
      kk: "Өтпелі кезең пилоты: IMPXFIT өнімді, рационды және топтық бақылауды қалай байланыстырды",
    },
    heroSummary: {
      ru: "На одном из клиентских молочных комплексов была запущена пилотная схема для сухостойных и раннелактирующих групп с последующим мониторингом производственных показателей.",
      en: "At one client dairy site a pilot scheme was launched for dry and early-lactation groups with subsequent monitoring of production indicators.",
      kk: "Клиенттің бір сүт кешенінде құрғақ және ерте лактация топтарына арналған пилоттық схема іске қосылып, кейін өндірістік көрсеткіштер бақылауға алынды.",
    },
    publishedAt: "2025-11-03",
    sections: [
      {
        title: {
          ru: "Исходная задача",
          en: "Initial task",
          kk: "Бастапқы міндет",
        },
        paragraphs: {
          ru: [
            "Клиенту было важно сгладить переход между сухостойным периодом и стартом лактации, не увеличивая сложность программы и не перегружая команду дополнительными действиями.",
            "Команда IMPXFIT начала с аудита объемистых кормов, структуры рациона и ключевых наблюдений по группе.",
          ],
          en: [
            "The client needed to smooth the transition between the dry period and lactation start without increasing program complexity or overloading the team.",
            "The IMPXFIT team started with an audit of forage quality, ration structure and key group observations.",
          ],
          kk: [
            "Клиентке құрғақ кезең мен лактация басталуы арасындағы өтуді бағдарлама күрделілігін арттырмай және команданы жүктемей тегістеу маңызды болды.",
            "IMPXFIT командасы көлемді азық сапасын, рацион құрылымын және топ бойынша негізгі бақылауларды аудиттен бастады.",
          ],
        },
      },
      {
        title: {
          ru: "Что сделали",
          en: "What was implemented",
          kk: "Не іске асырылды",
        },
        paragraphs: {
          ru: [
            "Далее была предложена программа на базе IMPXFIT Transition Dairy с привязкой к рабочему контролю группы и корректировкой кормовой схемы на старте лактации.",
            "Проект сопровождался обсуждением наблюдений с технологической службой, чтобы решение оставалось рабочим для персонала фермы.",
          ],
          en: [
            "A program based on IMPXFIT Transition Dairy was then introduced and linked to group control plus feeding adjustments at lactation start.",
            "The project included ongoing discussions with the technology team so the solution remained practical for farm personnel.",
          ],
          kk: [
            "Кейін IMPXFIT Transition Dairy негізіндегі бағдарлама топтық бақылаумен және лактация басындағы қоректендіру сызбасын түзетумен бірге енгізілді.",
            "Жоба технологиялық қызметпен тұрақты талқылаумен сүйемелденді, сондықтан шешім ферма қызметкерлері үшін практикалық болып қалды.",
          ],
        },
      },
    ],
    relatedCategorySlugs: ["cattle", "technical-support"],
  },
];

export function getNews(locale: Locale): NewsArticle[] {
  return articleRecords
    .map((article) => localizeArticle(locale, article))
    .sort(
      (left, right) =>
        new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
    );
}

export function getNewsArticle(locale: Locale, slug: string) {
  const article = articleRecords.find((item) => item.slug === slug);
  return article ? localizeArticle(locale, article) : undefined;
}

export function getLatestNews(locale: Locale, limit = 3) {
  return getNews(locale).slice(0, limit);
}

export function getAllNewsParams() {
  return articleRecords.map((article) => ({ slug: article.slug }));
}
