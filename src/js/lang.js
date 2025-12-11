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
  'my-services_title-2': {
    ua: 'Я пропоную',
    ru: 'Я предлагаю',
    pl: 'Sugeruję',
    en: 'I suggest',
  },
  'my-services_title-3': {
    ua: 'Формат офісу може бути адаптований під Ваш Бізнес',
    ru: 'Формат офиса может быть адаптирован под Ваш Бизнес',
    pl: 'Format biura można dostosować do potrzeb Twojej firmy',
    en: 'The office format can be adapted to your business',
  },
  'my-services-desc-1': {
    ua: 'Офіси в офісних будівлях',
    ru: 'Офисы в офисных зданиях',
    pl: 'Biura w budynkach biurowych',
    en: 'Offices in office buildings',
  },
  'my-services-desc-11': {
    ua: 'Офіс без меблів. Ви отримуєте приміщення без меблів',
    ru: 'Офис без мебели. Вы получаете помещение без мебели',
    pl: 'Biuro nieumeblowane. Dostajesz pokój bez mebli',
    en: 'Unfurnished office. You get a room without furniture',
  },
  'my-services-desc-2': {
    ua: 'Офіси в бізнес-центрах',
    ru: 'Офисы в бизнес-центрах',
    pl: 'Biura w centrach biznesowych',
    en: 'Offices in business centers',
  },
  'my-services-desc-22': {
    ua: 'Мебльований Офіс зі столами, стільцями, шафи та переговорна кімната',
    ru: 'Мебельный офис со столами, стульями, шкафы и переговорная комната',
    pl: 'Umeblowane biuro ze stołami, krzesłami, szafkami i salą konferencyjną',
    en: 'Furnished Office with tables, chairs, cabinets and meeting room',
  },
  'my-services-desc-3': {
    ua: 'Офіси в хмарочосах Варшави',
    ru: 'Офисы в небоскребах Варшавы',
    pl: 'Biura w warszawskich wieżowcach',
    en: 'Offices in Warsaw`s skyscrapers',
  },
  'my-services-desc-33': {
    ua: 'Офіс з індивідуальним ремонтом під клієнта згідно з вашим технічним завданням',
    ru: 'Офис с индивидуальным ремонтом под клиента согласно вашему техническому заданию',
    pl: 'Biuro z indywidualnym remontem dla klienta według Państwa specyfikacji',
    en: 'Office with individual renovation for the client according to your specifications',
  },
  'my-services-desc-4': {
    ua: 'Офіси в адміністративних будівлях',
    ru: 'Подбор офиса для аренды без мебели',
    pl: 'Wybór biura do wynajęcia bez mebli',
    en: 'Selecting an office for rent without furniture',
  },
  'my-services-desc-5': {
    ua: 'Підбір офісу для оренди з індивідуальним ремонтом під орендаря',
    ru: 'Подбор офиса для аренды с индивидуальным ремонтом под арендатора',
    pl: 'Wybór biura do wynajęcia z indywidualnym remontem dla najemcy',
    en: 'Selection of an office for rent with individual renovation for the tenant',
  },
  'advantages_title-2': {
    ua: 'Мої сильні переваги',
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
    pl: 'Personal selection',
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
    ua: 'Головна',
    ru: 'Главная',
    pl: 'Dom',
    en: 'Home',
  },
  'header_menu-advantages': {
    ua: 'Послуги',
    ru: 'Услуги',
    pl: 'Usługi',
    en: 'Services',
  },
  'header_menu-about': {
    ua: 'Про мене',
    ru: 'Обо мне',
    pl: 'O mnie',
    en: 'About me',
  },
  'header_menu-service': {
    ua: 'Переваги',
    ru: 'Преимущества',
    pl: 'Zalety',
    en: 'Advantages',
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
    ua: 'Брокер з оренди офісів преміум класу у Варшаві',
    ru: 'Брокер по аренде офисов премиум класса в Варшаве',
    pl: 'Pośrednik w wynajmie biur premium w Warszawie',
    en: 'Broker for renting premium offices in Warsaw',
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
  about_title: {
    ua: 'Про мене',
    ru: 'Обо мне',
    pl: 'O mnie',
    en: 'About me',
  },
  about_title1: {
    ua: 'Офіси в офісних будівлях',
    ru: 'Офисы в офисных зданиях',
    pl: 'Biura w budynkach biurowych',
    en: 'Offices in office buildings',
  },
  about_title2: {
    ua: 'Офіси в бізнес-центрах',
    ru: 'Офисы в бизнес-центрах',
    pl: 'Biura w centrach biznesowych',
    en: 'Offices in business centers',
  },
  about_title3: {
    ua: 'Офіси в хмарочосах Варшави',
    ru: 'Офисы в небоскребах Варшавы',
    pl: 'Biura w warszawskich wieżowcach',
    en: 'Offices in Warsaw skyscrapers',
  },
  about_description: {
    ua: 'Привіт! Я Юрій Бухтій',
    ru: 'Привет! Меня зовут Юрий Бухтий',
    pl: 'Cześć! Nazywam się Yuriy Bukhty',
    en: 'Hello! My name is Yurii Bukhtii',
  },
  about_description2: {
    ua: 'Брокер з оренди офісів у Варшаві з досвідом 3 років. Я допомагаю іноземному бізнесу — від маленьких стартапів до великих корпорацій — знайти ідеальний офіс під оренду для введення бізнесу у Варшаві',
    ru: 'Брокер по аренде коммерческой недвижимости в Варшаве с опытом 5 лет. Я помогаю иностранному бизнесу – от маленьких стартапов до крупных корпораций – найти идеальный офис в аренду для введения бизнеса в Варшаве',
    pl: 'Pośrednik w wynajmie nieruchomości komercyjnych w Warszawie z 5-letnim doświadczeniem. Pomagam zagranicznym firmom — od małych startupów po duże korporacje — znaleźć idealne biuro do wynajęcia, aby rozpocząć działalność w Warszawie',
    en: 'Commercial real estate rental broker in Warsaw with 5 years of experience. I help foreign businesses — from small startups to large corporations — find the perfect office for rent to launch their business in Warsaw',
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
  // about_description01: {
  //   ua: 'Офіси в офісних будівлях',
  //   ru: 'Привет! Меня зовут Юрий Бухтий',
  //   pl: 'Cześć! Nazywam się Yuriy Bukhty',
  //   en: 'Hello! My name is Yurii Bukhtii',
  // },
  about_description02: {
    ua: '- це окремі будівлі, які мають різні класи (A, B, C)',
    ru: ' - Это отдельные здания, имеющие разные классы (A, B, C)',
    pl: '- Są to oddzielne budynki posiadające różne klasy (A, B, C)',
    en: '- These are separate buildings that have different classes (A, B, C)',
  },
  about_description03: {
    ua: 'Розташовані по всьому місту у різних районах Варшави',
    ru: 'Расположены по всему городу в разных районах Варшавы',
    pl: 'Znajdują się w różnych dzielnicach Warszawy',
    en: 'Located throughout the city in different districts of Warsaw',
  },
  about_description04: {
    ua: 'Особливості: Часто пропонують кабінетну систему планування',
    ru: 'Особенности: Часто предлагают кабинетную систему планирования',
    pl: 'Cechy: Często oferują system planowania szafek',
    en: 'Features: Often offer a cabinet planning system',
  },
  about_description05: {
    ua: 'Підходять: Малому та середньому бізнесу, локальним компаніям, яким важлива функціональність і паркінг',
    ru: 'Подходят: Малому и среднему бизнесу, локальным компаниям, которым важна функциональность и паркинг',
    pl: 'Odpowiednie dla: Małych i średnich przedsiębiorstw, lokalnych firm ceniących funkcjonalność i parking',
    en: 'Suitable for: Small and medium businesses, local companies that value functionality and parking',
  },
  about_description06: {
    ua: 'Престиж: Низький/Середній',
    ru: 'Престиж: Низкий/Средний',
    pl: 'Prestiż: niski/średni',
    en: 'Prestige: Low/Medium',
  },
  about_description07: {
    ua: 'Ціна (м²) 10€ – 14€',
    ru: 'Цена (м²) 10€ – 14€',
    pl: 'Cena (m²) 10€ – 14€',
    en: 'Price (m²) 10€ – 14€',
  },
  // about_description011: {
  //   ua: 'Офіси в бізнес-центрах',
  //   ru: 'Привет! Меня зовут Юрий Бухтий',
  //   pl: 'Cześć! Nazywam się Yuriy Bukhty',
  //   en: 'Hello! My name is Yurii Bukhtii',
  // },
  about_description022: {
    ua: '- це сучасні комплекси з розвиненою внутрішньою інфраструктурою (рецепція, охорона, кафе, конференц-зали, (Класи A та A+)',
    ru: '- это современные комплексы с развитой внутренней инфраструктурой (рецепция, охрана, кафе, конференц-залы, (Классы A и A+)',
    pl: '- są to nowoczesne kompleksy z rozwiniętą infrastrukturą wewnętrzną (recepcja, ochrona, kawiarnia, sale konferencyjne, (klasy A i A+)',
    en: '- these are modern complexes with developed internal infrastructure (reception, security, cafe, conference rooms, (Classes A and A+)',
  },
  about_description033: {
    ua: 'Розташовані в ділових районах та центрі міста Wola, Rondo Daszyńskiego, Śródmieście, Mokotów та Domaniewska',
    ru: 'Расположены в деловых районах и центре города Wola, Rondo Daszyńskiego, Śródmieście, Mokotów и Domaniewska',
    pl: 'Zlokalizowany w dzielnicach biznesowych i centrum Woli, Rondo Daszyńskiego, Śródmieściu, Mokotowie i Domaniewskiej',
    en: 'Located in the business districts and city center of Wola, Rondo Daszyńskiego, Śródmieście, Mokotów and Domaniewska',
  },
  about_description044: {
    ua: 'Особливості: Сучасні системи вентиляції, підземні паркінги. Мають сертифікати екологічності (BREEAM/LEED)',
    ru: 'Современные системы вентиляции, подземные паркинги. Имеют сертификаты экологичности (BREEAM/LEED)',
    pl: 'Cechy: Nowoczesne systemy wentylacji, parking podziemny. Posiadają certyfikaty środowiskowe (BREEAM/LEED)',
    en: 'Features: Modern ventilation systems, underground parking. Have environmental certificates (BREEAM/LEED)',
  },
  about_description055: {
    ua: 'Для кого: Корпорації, IT-компанії, міжнародні філії. Тут ви отримуєте "все включено" в межах однієї будівлі',
    ru: 'Для кого: Корпорации, IT компании, международные филиалы. Здесь вы получаете "все включено" в пределах одного здания',
    pl: 'Dla kogo: Korporacje, firmy IT, oddziały międzynarodowe. U nas otrzymasz „all inclusive” w jednym budynku',
    en: 'For whom: Corporations, IT companies, international branches. Here you get "all inclusive" within one building',
  },
  about_description066: {
    ua: 'Престиж: Високий',
    ru: 'Престиж: Высокий',
    pl: 'Prestiż: wysoki',
    en: 'Prestige: High',
  },
  about_description077: {
    ua: 'Ціна (м²) 15€ – 21€',
    ru: 'Цена (м²) 15€ – 21€',
    pl: 'Cena (m²) 15€ – 21€',
    en: 'Price (m²) 15€ – 21€',
  },
  // about_description0111: {
  //   ua: 'Офіси в хмарочосах Варшави',
  //   ru: 'Привет! Меня зовут Юрий Бухтий',
  //   pl: 'Cześć! Nazywam się Yuriy Bukhty',
  //   en: 'Hello! My name is Yurii Bukhtii',
  // },
  about_description0222: {
    ua: '- Найпрестижніші офіси на високих поверхах значущих будівель з панорамними видами на місто',
    ru: '- Самые престижные офисы на высоких этажах значимых зданий с панорамными видами на город',
    pl: '- Najbardziej prestiżowe biura na najwyższych piętrach znaczących budynków z panoramicznym widokiem na miasto',
    en: '- The most prestigious offices on the high floors of significant buildings with panoramic views of the city',
  },
  about_description0333: {
    ua: 'Розташовані виключно діловий центр — Rondo ONZ, Rondo Daszyńskiego та вздовж вулиці Emilii Plater.Особливості',
    ru: 'Расположены исключительно деловой центр — Rondo ONZ, Rondo Daszyńskiego и вдоль улицы Emilii Plater',
    pl: 'Położone wyłącznie w centrum biznesowym - Rondzie ONZ, Rondzie Daszyńskiego i wzdłuż ulicy Emilii Plater.',
    en: 'Located exclusively in the business center - Rondo ONZ, Rondo Daszyńskiego and along Emilii Plater Street. Features',
  },
  about_description0444: {
    ua: 'Особливості: Панорамні краєвиди на місто, найвищий рівень безпеки та престижу',
    ru: 'Особенности: Панорамные виды на город, высокий уровень безопасности и престижа',
    pl: 'Cechy: Panoramiczny widok na miasto, najwyższy poziom bezpieczeństwa i prestiż',
    en: 'Features: Panoramic views of the city, the highest level of security and prestige',
  },
  about_description0555: {
    ua: 'Для кого: Банки, юридичні фірми, великі консалтингові компанії, інвестиційні фонди',
    ru: 'Для кого: Банки, юридические фирмы, крупные консалтинговые компании, инвестиционные фонды',
    pl: 'Dla kogo: Banki, kancelarie prawne, duże firmy konsultingowe, fundusze inwestycyjne',
    en: 'For whom: Banks, law firms, large consulting companies, investment funds',
  },
  about_description0666: {
    ua: 'Престиж: Ексклюзивний',
    ru: 'Престиж: Эксклюзивный',
    pl: 'Prestiż: Ekskluzywny',
    en: 'Prestige: Exclusive',
  },
  about_description0777: {
    ua: 'Ціна (м²) 22€ – 30€',
    ru: 'Цена (м²) 22€ – 30€',
    pl: 'Cena (m²) 22€ – 30€',
    en: 'Price (m²) 22€ – 30€',
  },
  contacts_logo: {
    ua: 'Загалом, я успішно допоміг вже 40 компаніям знайти офіс в оренду. Буду радий допомогти і Вам!',
    ru: 'В общем, я успешно помог уже 40 компаниям найти офис в аренду. Буду рад помочь и вам!',
    pl: 'W sumie pomogłem ponad 50 firmom znaleźć biuro do wynajęcia. Chętnie pomogę również Tobie!',
    en: 'In total, I have successfully helped over 50 companies find an office for rent. I would be happy to help you too!',
  },
  contacts_logo3: {
    ua: 'Шукаєте офіс у Варшаві? Звертайтеся і я запропоную Вам найкращі варіанти +48 735 775 810',
    ru: 'Ищете офис в Варшаве? Обращайтесь и я предложу Вам самые лучшие варианты +48 735 775 810',
    pl: 'Szukasz biura w Warszawie? Skontaktuj się ze mną, a przedstawię Ci najlepsze opcje. +48 735 775 810',
    en: 'Looking for an office in Warsaw? Contact me and I will offer you the best options +48 735 775 810',
  },
  contacts_logo2: {
    ua: 'Безкоштовний пошук офісу у Варшаві під ваші індивідуальні потреби',
    ru: 'Бесплатный подбор офисов в Варшаве под ваши индивидуальные потребности',
    pl: 'Bezpłatny wybór biur w Warszawie dostosowanych do Twoich indywidualnych potrzeb',
    en: 'Free selection of offices in Warsaw to suit your individual needs',
  },
  form_title: {
    ua: 'З питань оренди офісу у Варшаві зв`язатися зі мною',
    ru: 'Оставьте свои контактные данные для получения консультации',
    pl: 'Zostaw swoje dane kontaktowe',
    en: 'Leave your contact details for a consultation',
  },
  form_name: {
    ua: 'Ім`я*',
    ru: 'Имя*',
    pl: 'Imię*',
    en: 'Name*',
  },
  form_tel: {
    ua: 'Телефон*',
    ru: 'Телефон*',
    pl: 'Phone number*',
    en: 'Phone number*',
  },
  form_comment: {
    ua: 'Повідомлення',
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
    ua: 'З питань оренди офісу у Варшаві зв`язатися зі мною',
    ru: 'Оставьте свои контактные данные для получения консультации',
    pl: 'Zostaw swoje dane kontaktowe',
    en: 'Leave your contact details for a consultation',
  },
  form_name2: {
    ua: 'Ім`я*',
    ru: 'Имя*',
    pl: 'Imię*',
    en: 'Name*',
  },
  form_tel2: {
    ua: 'Телефон*',
    ru: 'Телефон*',
    pl: 'Phone number*',
    en: 'Phone number*',
  },
  form_comment2: {
    ua: 'Повідомлення',
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
