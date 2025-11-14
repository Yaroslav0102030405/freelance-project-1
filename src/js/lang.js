const htmlEl = document.querySelector('html');
const buttonEl = document.querySelector('.js-container');

buttonEl.addEventListener('click', onClickButton2);

function onClickButton2(e) {
  console.log(e.target.textContent);
  if (e.target.classList.contains('en')) {
    htmlEl.setAttribute('lang', 'en');
    console.log('Привіт');
  } else if (e.target.classList.contains('pl')) {
    htmlEl.setAttribute('lang', 'pl');
  } else if (e.target.classList.contains('ua')) {
    htmlEl.setAttribute('lang', 'ua');
  } else if (e.target.classList.contains('ru')) {
    htmlEl.setAttribute('lang', 'ru');
  }
  return;
}

const homeTexts = {
  'advantages_title-2': {
    ua: 'Мої переваги',
    ru: 'Мои преимущества',
    pl: 'Moje zalety',
    en: 'My advantages',
  },
  'advantages_pre-title-4': {
    ua: 'Ексклюзивна база офісів',
    ru: 'Эксклюзивная база офисов',
    pl: 'Ekskluzywna baza biurowa',
    en: 'Exclusive office base',
  },
  'advantages_pre-title-5': {
    ua: 'Персональний підбір',
    ru: 'Персональный подбор',
    pl: 'Wybór osobisty',
    en: 'Personal selection',
  },
  'advantages_pre-title-6': {
    ua: 'Без комісії для орендаря',
    ru: 'Без комиссии для арендатора',
    pl: 'Brak opłat dla najemcy',
    en: 'No fee for the tenant',
  },
  'portfolio-title': {
    ua: 'Кейс який я закрив для іт компанії',
    ru: 'Кейс который я закрыл для ит компании',
    pl: 'Sprawa, którą zamknąłem dla firmy IT',
    en: 'A case I closed for an IT company',
  },

  'portfolio-title-2': {
    ua: 'Вимоги: сучасний офіс з меблями, в центрі міста в хмарочоці та з гарним виглядом з вікон на місто',
    ru: 'Требования: современный офис с мебелью, в центре города в небоскребе и с красивым видом из окон на город',
    pl: 'Wymagania: nowoczesne biuro z umeblowaniem, w centrum miasta, w wieżowcu, z pięknym widokiem na miasto z okien',
    en: 'Requirements: modern office with furniture, in the city center in a skyscraper and with a beautiful view of the city from the windows',
  },
  'portfolio-title-3': {
    ua: 'Я виконав усі вимоги і іт компанія залишилась задоволена!',
    ru: 'Я выполнил все требования и компания осталась довольна!',
    pl: 'Spełniłem wszystkie wymagania i firma była zadowolona!',
    en: 'I fulfilled all the requirements and the company was satisfied!',
  },
  'portfolio-title-21': {
    ua: 'Кейс який я закрив для YouTube каналу',
    ru: 'Кейс который я закрыл для канала YouTube',
    pl: 'Sprawa, którą zamknąłem dla kanału YouTube',
    en: 'The case I closed for the YouTube channel',
  },
  'portfolio-title-22': {
    ua: 'Вимоги: Теплий дизайн офісу з меблями в хмарочоці та виглядом на палац культури і науки',
    ru: 'Требования: Теплый дизайн офиса с мебелью в небоскребе и видом на дворец культуры и науки',
    pl: 'Wymagania: Ciepła aranżacja biura z meblami w stylu wieżowca i widokiem na Pałac Kultury i Nauki',
    en: 'Requirements: Warm office design with skyscraper furniture and a view of the Palace of Culture and Science',
  },
  'portfolio-title-23': {
    ua: 'Компанія дуже задоволена моєю роботою!',
    ru: 'Компания очень довольна моей работой!',
    pl: 'Firma jest bardzo zadowolona z mojej pracy!',
    en: 'The company is very satisfied with my work!',
  },
  'portfolio-title-31': {
    ua: 'Кейс який я закрив для іт стартапу',
    ru: 'Кейс который я закрыл для ит стартапа',
    pl: 'Sprawa, którą zamknąłem dla startupu IT',
    en: 'A case I closed for an IT startup',
  },
  'portfolio-title-32': {
    ua: 'Вимоги: Офіс з меблями та домашньою атмосферою',
    ru: 'Требования: Офис с мебелью и домашней атмосферой',
    pl: 'Wymagania: Biuro z umeblowaniem i domową atmosferą',
    en: 'Requirements: Office with furniture and a homely atmosphere',
  },
  'portfolio-title-33': {
    ua: 'Хлопці з іт стартапу залишились довольні!',
    ru: 'Ребята из ит стартапа остались довольны!',
    pl: 'Chłopaki ze start-upu IT byli zadowoleni!',
    en: 'The guys from the IT startup were satisfied!',
  },
  // меню header
  'header_menu-home': {
    ua: 'Брокер',
    ru: 'Брокер',
    pl: 'Pośrednik',
    en: 'Broker',
  },
  'header_menu-advantages': {
    ua: 'Переваги',
    ru: 'Преимущества',
    pl: 'Zalety',
    en: 'Advantages',
  },
  // 'header_menu-service': {
  //   ua: 'Хмарочоси',
  //   ru: 'Небоскребы',
  //   pl: 'Wieżowce',
  //   en: 'Skyscrapers',
  // },
  'header_menu-about': {
    ua: 'Досвід',
    ru: 'Опыт',
    pl: 'Doświadczenie',
    en: 'Experience',
  },
  'header_menu-cases': {
    ua: 'Кейси',
    ru: 'Кейсы',
    pl: 'Wyniki',
    en: 'Cases',
  },
  'header_menu-contacts': {
    ua: 'Контакти',
    ru: 'Контакты',
    pl: 'Kontakty',
    en: 'Contact',
  },
  'header_banner-name': {
    ua: 'Yurii Bukhtii',
    ru: 'Yurii Bukhtii',
    pl: 'Yurii Bukhtii',
    en: 'Yurii Bukhtii',
  },
  'header_banner-pre-title': {
    ua: 'Брокер з підбору офісів у Варшаві',
    ru: 'Брокер по подбору офисов в Варшаве',
    pl: 'Broker ds. wyboru biur w Warszawie',
    en: 'Office selection broker in Warsaw',
  },
  'header_banner-button': {
    ua: 'Безкоштовна консультація',
    ru: 'Бесплатная консультация',
    pl: 'Darmowa konsultacja',
    en: 'Free consultation',
  },
  'header_banner-link': {
    ua: 'Або зателефонувати за номером +48 735 775 810',
    ru: 'Или позвонить по номеру +48 735 775 810',
    pl: 'Lub zadzwoń +48 735 775 810',
    en: 'Or call +48 735 775 810',
  },
  // service_title: {
  //   ua: 'Офісні приміщення хмарочосів Варшави',
  //   ru: 'Офисные помещения небоскребов Варшавы',
  //   pl: 'Przestrzenie biurowe warszawskich wieżowców',
  //   en: 'Office spaces of Warsaw skyscrapers',
  // },
  // 'service_pre-title-1': {
  //   ua: '1 Хмарочос Rondo',
  //   ru: '1 Небаскреб Rondo Unii Europejskiej',
  //   pl: '1 Rondo Unii Europejskiej',
  //   en: '1 Rondo Unii Europejskiej',
  // },
  // 'service_description-1': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-1-3': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-1-4': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-1': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // 'service_pre-title-2': {
  //   ua: '2 Офісна будівля',
  //   ru: '2 Офисное здание',
  //   pl: '2 Budynek biurowy',
  //   en: '2 Office building',
  // },
  // 'service_description-2': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-2-4': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-2-5': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-2': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // 'service_pre-title-3': {
  //   ua: '3 Хмарочос Centrum',
  //   ru: '3 Centrum Warszawy',
  //   pl: '3 Centrum Warszawy',
  //   en: '3 Centrum Warszawy',
  // },
  // 'service_description-3': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-3-5': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-3-3': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-3': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // 'service_pre-title-4': {
  //   ua: '4 Офісна будівля',
  //   ru: '4 Офисное здание',
  //   pl: '4 Budynek biurowy',
  //   en: '4 Office building',
  // },
  // 'service_description-4': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-4-5': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-4-3': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-4': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // 'service_pre-title-5': {
  //   ua: '5 Хмарочос Żoliborz',
  //   ru: '5 Небоскреб Żoliborz',
  //   pl: '5 Wieżowiec Żoliborz',
  //   en: '5 Skyscraper Żoliborz',
  // },
  // 'service_description-5': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-5-5': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-5-3': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-5': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // 'service_pre-title-6': {
  //   ua: '6 Офісна будівля',
  //   ru: '6 Офисное здание',
  //   pl: '6 Budynek biurowy',
  //   en: '6 Office building',
  // },
  // 'service_description-6': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-6-5': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-6-3': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-6': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // 'service_pre-title-7': {
  //   ua: '7 Офісна будівля',
  //   ru: '7 Офисное здание',
  //   pl: '7 Budynek biurowy',
  //   en: '7 Office building',
  // },
  // 'service_description-7': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-7-5': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-7-3': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-7': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // 'service_pre-title-9': {
  //   ua: '8 Офісна будівля',
  //   ru: '8 Офисное здание',
  //   pl: '8 Budynek biurowy',
  //   en: '8 Office building',
  // },
  // 'service_description-9': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-9-5': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-9-3': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-9': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // 'service_pre-title-11': {
  //   ua: '9 Хмарочос Śródmieście',
  //   ru: '9 Небоскреб Śródmieście',
  //   pl: '9 Wieżowiec Śródmieście',
  //   en: '9 Skyscraper Śródmieście',
  // },
  // 'service_description-11': {
  //   ua: 'Офісні приміщення в оренду',
  //   ru: 'Офисные помещения в аренду',
  //   pl: 'Powierzchnia biurowa do wynajęcia',
  //   en: 'Office space for rent',
  // },
  // 'service_description-11-5': {
  //   ua: 'Метраж 200 - 3000 m2',
  //   ru: 'Метраж 1000 m2',
  //   pl: 'Metraż 1000 m2',
  //   en: 'Meterage 1000 m2',
  // },
  // 'service_description-11-3': {
  //   ua: 'Ціна 12 - 25 euro за 1 m2',
  //   ru: 'Цена 12 - 25 euro за 1 m2',
  //   pl: 'Cena 12 - 25 euro za 1 m2',
  //   en: 'Price 12 - 25 euro per 1 m2',
  // },
  // 'service_button-11': {
  //   ua: 'Отримати консультацію',
  //   ru: 'Получить консультацию',
  //   pl: 'Uzyskaj konsultację',
  //   en: 'Get a consultation',
  // },
  // advantages_title: {
  //   ua: 'Для кого підійде',
  //   ru: 'Для кого подойдет',
  //   pl: 'Dla kogo jest to odpowiednie?',
  //   en: 'Who is it suitable for?',
  // },
  // 'advantages_pre-title-1': {
  //   ua: 'Стартапи та Малі/Середні Бізнеси, які починають роботу у Варшаві і потрібні офіси',
  //   ru: 'Стартапы и Малые/Средние Бизнесы, начинающие работу в Варшаве и офисы',
  //   pl: 'Startupy i małe/średnie firmy rozpoczynające działalność w Warszawie, potrzebujące biur',
  //   en: 'Startups and Small/Medium Businesses starting their operations in Warsaw and need offices',
  // },
  // 'advantages_pre-title-2': {
  //   ua: 'Консалтингові та Креативні Агенції. Яким важлива унікальна та креативна атмосфера',
  //   ru: 'Консалтинговые и креативные агентства. Какова важна уникальная и креативная атмосфера',
  //   pl: 'Agencje konsultingowe i kreatywne. Dlaczego wyjątkowa i kreatywna atmosfera jest ważna',
  //   en: 'Consulting and Creative Agencies. Why a unique and creative atmosphere is important',
  // },
  // 'advantages_pre-title-3': {
  //   ua: 'Фінансові та Юридичні Установи, інвестиційні фонди, яких важливо бути у центрі міста',
  //   ru: 'Финансовые и Юридические Учреждения, инвестиционные фонды, которых важно находиться в центре города',
  //   pl: 'Instytucje finansowe i prawne, fundusze inwestycyjne, dla których ważne jest, aby znajdowały się w centrum miasta',
  //   en: 'Financial and Legal Institutions, investment funds, which are important to be in the city center',
  // },
  // 'advantages_pre-title-4': {
  //   ua: 'Міжнародні Корпорації (SSC/BPO) які відкривають у Варшаві свої центри послуг',
  //   ru: 'Международные корпорации (SSC/BPO), которые открывают в Варшаве свои центры услуг',
  //   pl: 'Międzynarodowe korporacje (SSC/BPO) otwierają swoje centra usług w Warszawie',
  //   en: 'International Corporations (SSC/BPO) opening their service centers in Warsaw',
  // },
  // 'advantages_pre-title-5': {
  //   ua: 'Великі ІТ-компанії, які шукають інноваційні простори щоб вмістити сотні співробітників',
  //   ru: 'Большие ИТ-компании, которые ищут инновационные пространства, чтобы вместить сотни сотрудников',
  //   pl: 'Duże firmy IT poszukujące innowacyjnych przestrzeni, w których mogą pracować setki pracowników',
  //   en: 'Large IT companies looking for innovative spaces to accommodate hundreds of employees',
  // },
  about_title: {
    ua: 'Мій професійний брокерський досвід',
    ru: 'Мой профессиональный брокерский опыт',
    pl: 'Moje doświadczenie zawodowe w pośrednictwie',
    en: 'My professional brokerage experience',
  },
  about_description: {
    ua: 'Привіт! Я Юрій Бухтій',
    ru: 'Привет! Меня зовут Юрий Бухтий',
    pl: 'Cześć! Nazywam się Yuriy Bukhty',
    en: 'Hello! My name is Yurii Bukhtii',
  },
  about_description2: {
    ua: 'Eксперт з оренди комерційної нерухомості у Варшаві з досвідом 5 років. Я допомагаю іноземному бізнесу — від маленьких стартапів до великих корпорацій — знайти найкраще місце для введення бізнесу у Варшаві',
    ru: 'Эксперт по аренде коммерческой недвижимости в Варшаве с опытом 5 лет. Я помогаю иностранному бизнесу – от маленьких стартапов до крупных корпораций – найти лучшее место для введения бизнеса в Варшаве',
    pl: 'Ekspert w dziedzinie wynajmu nieruchomości komercyjnych w Warszawie z 5-letnim doświadczeniem. Pomagam zagranicznym firmom – od małych startupów po duże korporacje – znaleźć najlepsze miejsce na rozpoczęcie działalności w Warszawie',
    en: 'An expert in commercial real estate leasing in Warsaw with 5 years of experience. I help foreign businesses — from small startups to large corporations — find the best place to launch their business in Warsaw',
  },
  about_description3: {
    ua: 'Чим я корисний?',
    ru: 'Чем я полезен?',
    pl: 'Jak mogę się przydać?',
    en: 'How can I be useful?',
  },
  about_description4: {
    ua: '1. Я знаю ринок і постійно вивчаю пропозиції Варшави і завжди пропоную лише актуальні та найвигідніші варіанти',
    ru: '1. Я знаю рынок и постоянно изучаю предложения Варшавы и всегда предлагаю только самые актуальные и выгодные варианты',
    pl: '1. Znam rynek, stale analizuję oferty Warszawy i zawsze oferuję tylko najbardziej trafne i opłacalne opcje',
    en: '1. I know the market and constantly study Warsaw`s offers and always offer only the most relevant and profitable options',
  },
  about_description5: {
    ua: '2. Я думаю про Ваш бізнес, а не просто шукаю квадратні метри. Я розбираюся у Ваших потребах, щоб знайти місце, яке дійсно допоможе Вашому бізнесу зрости',
    ru: '2. Я думаю о Вашем бизнесе, а не просто ищу квадратные метры. Я разбираюсь в ваших потребностях, чтобы найти место, которое действительно поможет вашему бизнесу возрасти',
    pl: '2. Myślę o Twoim biznesie, a nie tylko o metrażu. Rozumiem Twoją potrzebę znalezienia lokalizacji, która naprawdę pomoże Twojemu biznesowi się rozwijać',
    en: '2. I think about your business, not just looking for square footage. I understand your needs to find a location that will truly help your business grow',
  },
  about_description6: {
    ua: '3. Я супроводжую Вас від першої розмови до моменту, коли Ви підписуєте договір оренди та після, якщо у вас виникнуть якісь додаткові питання. Я завжди на зв`язку з вами і готовий допомогти',
    ru: '3. Я сопровождаю вас от первого разговора до момента, когда вы подписываете договор аренды и после, если у вас возникнут какие-либо дополнительные вопросы. Я всегда на связи с вами и готов помочь',
    pl: '3. Będę Ci towarzyszyć od pierwszej rozmowy, aż do podpisania umowy najmu, a także po jej zakończeniu, jeśli będziesz mieć dodatkowe pytania. Jestem zawsze w kontakcie i chętnie pomogę',
    en: '3. I will accompany you from the first conversation until you sign the lease agreement and after that, if you have any additional questions. I am always in touch with you and ready to help',
  },
  about_description7: {
    ua: 'Я ваш надійним партнером у Варшаві. Якщо Ви готові щоб я знайшов вам ідеальний офіс, просто зателефонуйте мені +48 735 775 810',
    ru: 'Я ваш надежный партнер в Варшаве. Если Вы готовы, чтобы я нашел вам идеальный офис, просто напишите или позвоните мне +48 735 775 810',
    pl: 'Jestem Twoim niezawodnym partnerem w Warszawie. Jeśli chcesz, abym znalazł dla Ciebie idealne biuro, po prostu napisz lub zadzwoń do mnie +48 735 775 810',
    en: 'I am your reliable partner in Warsaw. If you are ready for me to find you the perfect office, just write or call me +48 735 775 810',
  },
  // contacts_title: {
  //   ua: 'Безкоштовний підбір офісних приміщень y хмарочосах Варшави під ваші індивідуальні потреби',
  //   ru: 'Бесплатный подбор офисных помещений в небоскребах Варшавы под ваши индивидуальные нужды',
  //   pl: 'Bezpłatny wybór powierzchni biurowej w warszawskich wieżowcach, dopasowany do Twoich indywidualnych potrzeb',
  //   en: 'Free selection of office space in Warsaw skyscrapers to suit your individual needs',
  // },
  contacts_logo: {
    ua: 'Загалом, я успішно допоміг вже 40 компаніям знайти офіс в оренду. Буду радий допомогти і Вам! Звертайтеся',
    ru: 'В общем, я успешно помог уже 40 компаниям найти офис в аренду. Буду рад помочь и вам! Обращайтесь',
    pl: 'W sumie pomogłem ponad 50 firmom znaleźć biuro do wynajęcia. Chętnie pomogę również Tobie! Skontaktuj się ze mną',
    en: 'In total, I have successfully helped over 50 companies find an office for rent. I would be happy to help you too! Contact me',
  },
  // contacts_logo1: {
  //   ua: 'Не знайшли що шукали? Тоді зателефонуйте мені +48 735 775 810 і я вишлю вам в телеграм більшу кількість варіантів!',
  //   ru: 'Не нашли, что искали? Тогда позвоните мне +48 735 775 810 и я вышлю вам в телеграмм большее количество вариантов!',
  //   pl: 'Nie znalazłeś tego, czego szukałeś? Zadzwoń pod numer +48 735 775 810, a wyślę Ci więcej opcji w Telegramie!',
  //   en: 'Didn`t find what you were looking for? Call +48 735 775 810 and I will send you more options in Telegram!',
  // },
  contacts_logo2: {
    ua: 'Безкоштовний підбір офісів у Варшаві під ваші індивідуальні потреби',
    ru: 'Бесплатный подбор офисов в Варшаве под ваши индивидуальные потребности',
    pl: 'Bezpłatny wybór biur w Warszawie dostosowanych do Twoich indywidualnych potrzeb',
    en: 'Free selection of offices in Warsaw to suit your individual needs',
  },
  form_title: {
    ua: 'Залиште свої контактні дані для отримання консультації',
    ru: 'Оставьте свои контактные данные для получения консультации',
    pl: 'Zostaw swoje dane kontaktowe, aby umówić się na konsultację',
    en: 'Leave your contact details for a consultation',
  },
  form_name: {
    ua: 'Ім`я*',
    ru: 'Имя*',
    pl: 'Imię*',
    en: 'Name*',
  },
  form_tel: {
    ua: 'Номер телефону*',
    ru: 'Номер телефона*',
    pl: 'Phone number*',
    en: 'Phone number*',
  },
  form_comment: {
    ua: 'Коментар',
    ru: 'Комментарий',
    pl: 'Comment',
    en: 'Message',
  },
  form_btn: {
    ua: 'Відправити',
    ru: 'Отправить',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  form_title2: {
    ua: 'Залиште свої контактні дані для отримання консультації',
    ru: 'Оставьте свои контактные данные для получения консультации',
    pl: 'Zostaw swoje dane kontaktowe, aby umówić się na konsultację',
    en: 'Leave your contact details for a consultation',
  },
  form_name2: {
    ua: 'Ім`я*',
    ru: 'Имя*',
    pl: 'Imię*',
    en: 'Name*',
  },
  form_tel2: {
    ua: 'Номер телефону*',
    ru: 'Номер телефона*',
    pl: 'Phone number*',
    en: 'Phone number*',
  },
  form_comment2: {
    ua: 'Коментар',
    ru: 'Комментарий',
    pl: 'Comment',
    en: 'Message',
  },
  form_btn2: {
    ua: 'Відправити',
    ru: 'Отправить',
    pl: 'Wysłać',
    en: 'Send',
  },
  form_answer1: {
    ua: '✅ Повідомлення відправлено',
    ru: '✅ Сообщение отправлено.',
    pl: '✅ Pytanie wysłano',
    en: '✅ Message sent.',
  },
  form_answer12: {
    ua: 'Зв`яжуся з Вами протягом однієї години',
    ru: 'Я свяжусь с Вами в течении одного часа',
    pl: 'Skontaktuję się z Tobą w ciągu godziny',
    en: 'I will contact you within one hour',
  },
  form_answer21: {
    ua: '✅ Повідомлення відправлено',
    ru: '✅ Сообщение отправлено',
    pl: '✅ Wiadomość wysłana',
    en: '✅ Message sent',
  },
  form_answer22: {
    ua: 'Зв`яжуся з Вами протягом однієї години',
    ru: 'Я свяжусь с Вами в течении одного часа',
    pl: 'Skontaktuję się z Tobą w ciągu jednej godziny',
    en: 'I will contact You within one hour',
  },
};

// console.log(htmlEl.lang);
// return;
// const langButtons = document.querySelectorAll('[data-btn]');
const langButtons = document.querySelectorAll('.btn');
const allLangs = ['ua', 'ru', 'pl', 'en'];
const currentPathName = window.location.pathname;
let currentLang = 'ua';
// localStorage.getItem('language') || checkBrowserLang() || 'ua';
let currentTexts = {};

// Проверка пути страницы сайта
function checkPagePathName() {
  switch (currentPathName) {
    case '/index.html':
      currentTexts = homeTexts;
      break;
    // case '/another_page.html':
    //   currentTexts = anotherTexts;
    //   break;

    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach(btn => {
  btn.addEventListener('click', event => {
    if (!event.target.classList.contains('header__btn_active')) {
      currentLang = event.target.dataset.btn;
      // localStorage.setItem('language', event.target.dataset.btn);
      resetActiveClass(langButtons, 'header__btn_active');
      btn.classList.add('header__btn_active');
      changeLang();
    }
  });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
  arr.forEach(elem => {
    elem.classList.remove(activeClass);
  });
}

// Проверка активной кнопки
// function checkActiveLangButton(e) {
//   switch (currentLang) {
//     case 'ua':
//       document.querySelector('[data-btn="ua"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'ua');
//       break;
//     case 'ru':
//       document.querySelector('[data-btn="ru"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'ru');
//       break;
//     case 'pl':
//       document.querySelector('[data-btn="pl"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'pl');
//       break;
//     case 'de':
//       document.querySelector('[data-btn="en"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'en');
//       break;

//     default:
//       document.querySelector('[data-btn="ua"]');
//       // .classList.add('header__btn_active');
//       htmlEl.setAttribute('lang', 'uk');
//       break;
//   }
// }
// checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some(elem => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log('navigator.language', checkBrowserLang());
