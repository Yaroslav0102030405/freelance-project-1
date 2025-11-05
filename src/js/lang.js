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
  // 'home_page-title': {
  //   ua: 'Yurii Bukhtii',
  //   ru: 'Yurii Bukhtii',
  //   pl: 'Yurii Bukhtii',
  //   en: 'Yurii Bukhtii',
  // },
  // 'header_logo-title': {
  //   ua: 'Yurii Bukhtii',
  //   ru: 'Yurii Bukhtii',
  //   pl: 'Yurii Bukhtii',
  //   en: 'Yurii Bukhtii',
  // },
  'portfolio-title': {
    ua: 'Кейс якій я закрив для іт компанії',
    ru: 'Кейс которой я закрыл для ит компании',
    pl: 'Sprawa, którą zamknąłem dla firmy IT',
    en: 'The case I closed for an IT company',
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
  'header_menu-home': {
    ua: 'Головна',
    ru: 'Главная',
    pl: 'Główna',
    en: 'Home',
  },
  'header_menu-service': {
    ua: 'Послуги',
    ru: 'Услуги',
    pl: 'Usługi',
    en: 'Services',
  },
  'header_menu-advantages': {
    ua: 'Переваги',
    ru: 'Преимущества',
    pl: 'Zalety',
    en: 'Advantages',
  },
  'header_menu-about': {
    ua: 'Про мене',
    ru: 'Обо мне',
    pl: 'O mnie',
    en: 'About me',
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
  // 'header_banner-title': {
  //   ua: 'Брокер комерційної нерухомості в Варшаві',
  //   ru: 'Брокер коммерческой недвижимости в Варшаве',
  //   pl: 'Broker nieruchomości komercyjnych w Warszawie',
  //   en: 'Commercial real estate broker in Warsaw',
  // },
  'header_banner-pre-title': {
    ua: 'Брокер комерційної нерухомості в Варшаві',
    ru: 'Брокер коммерческой недвижимости в Варшаве',
    pl: 'Pośrednik w obrocie nieruchomościami komercyjnymi w Warszawie',
    en: 'Commercial real estate broker in Warsaw',
  },
  // 'header_banner-advantages-1': {
  //   ua: '✓ оренду офісу в Варшаві',
  //   ru: '✓ аренду офиса Варшаве',
  //   pl: '✓ wynajem biura w Warszawie',
  //   en: '✓ office space to rent',
  // },
  // 'header_banner-advantages-2': {
  //   ua: '✓ склад в Польщі',
  //   ru: '✓ склад в Польше',
  //   pl: '✓ magazyn w Polsce',
  //   en: '✓ warehouses to rent',
  // },
  // 'header_banner-advantages-3': {
  //   ua: '✓ зареєструвати фірму в Польщі',
  //   ru: '✓ зарегистрировать фирму в Польше',
  //   pl: '✓ rejestracja firmy w Polsce',
  //   en: '✓ assistance with company registration',
  // },
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
  service_title: {
    ua: 'Мої послуги з підбору приміщень у Варшаві',
    ru: 'Мои услуги по подбору помещений в Варшаве',
    pl: 'Moje usługi w zakresie wyboru lokalu w Warszawie',
    en: 'My services for selecting premises in Warsaw',
  },
  'service_pre-title-1': {
    ua: 'Підбір приміщень у Варшаві для ресторану (під оренду)',
    ru: 'Подбор помещений в Варшаве для ресторана (под аренду)',
    pl: 'Wybór lokalu w Warszawie na restaurację (do wynajęcia)',
    en: 'Selection of premises in Warsaw for a restaurant (for rent)',
  },
  'service_description-1': {
    ua: 'Відкриття успішного ресторану починається з правильної локації. Я знайду оптимальне місце, яке відповідає всім Вашим вимогам.',
    ru: 'Открытие удачного ресторана начинается с правильной локации. Я найду оптимальное место, отвечающее всем Вашим требованиям.',
    pl: 'Otwarcie udanej restauracji zaczyna się od odpowiedniej lokalizacji. Znajdę optymalne miejsce, które spełni wszystkie Twoje wymagania.',
    en: 'Opening a successful restaurant starts with the right location. I will find the optimal place that meets all your requirements.',
  },
  'service_description-1-3': {
    ua: 'Метраж від 20 до 100 мкв',
    ru: 'Метраж от 20 до 100 мкв.',
    pl: 'Powierzchnia od 20 do 100 m2.',
    en: 'Area from 20 to 100 sq.m.',
  },
  'service_description-1-4': {
    ua: '*Послуга безкоштовна',
    ru: '*Услуга бесплатная',
    pl: '*Usługa jest bezpłatna.',
    en: '*The service is free.',
  },
  'service_button-1': {
    ua: 'Отримати консультацію',
    ru: 'Получить консультацию',
    pl: 'Uzyskaj konsultację',
    en: 'Get a consultation',
  },
  'service_link-1': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  'service_pre-title-2': {
    ua: 'Підбір приміщень у Варшаві для стоматології (під оренду)',
    ru: 'Подбор помещений в Варшаве для стоматологии (под аренду)',
    pl: 'Wybór lokali w Warszawie na gabinet stomatologiczny (do wynajęcia)',
    en: 'Selection of premises in Warsaw for dentistry (for rent)',
  },
  'service_description-2': {
    ua: 'Відкриття стоматології вимагає приміщення, яке відповідає польським стандартам. Я спеціалізуюсь на пошуку таких приміщень.',
    ru: 'Открытие стоматологии требует помещения, отвечающего польским стандартам. Я специализируюсь на поиске таких помещений.',
    pl: 'Otwarcie gabinetu stomatologicznego wymaga lokalu spełniającego polskie standardy. Specjalizuję się w wyszukiwaniu takich lokali.',
    en: 'Opening a dentistry requires premises that meet Polish standards. I specialize in finding such premises.',
  },
  'service_description-2-4': {
    ua: 'Метраж від 100 до 1000 мкв',
    ru: 'Метраж от 100 до 1000 мкв.',
    pl: 'Powierzchnia od 100 do 1000 m2.',
    en: 'Area from 100 to 1000 sq.m.',
  },
  'service_description-2-5': {
    ua: '*Послуга безкоштовна',
    ru: '*Услуга бесплатная',
    pl: '*Usługa jest bezpłatna',
    en: '*The service is free',
  },
  'service_button-2': {
    ua: 'Отримати консультацію',
    ru: 'Получить консультацию',
    pl: 'Uzyskaj konsultację',
    en: 'Get a consultation',
  },
  'service_link-2': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  'service_pre-title-3': {
    ua: 'Підбір приміщень у Варшаві для офісу (під оренду)',
    ru: 'Подбор помещений в Варшаве для офиса (под аренду)',
    pl: 'Wybór lokalu w Warszawie na biuro (do wynajęcia)',
    en: 'Selection of premises in Warsaw for an office (for rent)',
  },
  'service_description-3': {
    ua: 'Офіс — це обличчя Вашої компанії та ключовий фактор продуктивності команди. Я забезпечу підбір офісних приміщень у Варшави.',
    ru: 'Офис – это лицо Вашей компании и ключевой фактор производительности команды. Я обеспечу подбор офисных помещений в Варшаве.',
    pl: 'Biuro to wizytówka Twojej firmy i kluczowy czynnik wpływający na produktywność zespołu. Zapewnię wybór powierzchni biurowych w Warszawie.',
    en: 'The office is the face of your company and a key factor in team productivity. I will provide a selection of office space in Warsaw.',
  },
  'service_description-3-5': {
    ua: 'Метраж від 500 до 10 000 мкв',
    ru: 'Метраж от 500 до 10  000 мкв.',
    pl: 'Powierzchnia od 500 do 10 000 m2.',
    en: 'Area from 500 to 10 000 sq.m.',
  },
  'service_description-3-3': {
    ua: '*Послуга безкоштовна',
    ru: '*Услуга беслптаная',
    pl: '*Usługa jest bezpłatna',
    en: '*The service is free',
  },
  'service_button-3': {
    ua: 'Отримати консультацію',
    ru: 'Получить консультацию',
    pl: 'Uzyskaj konsultację',
    en: 'Get a consultation',
  },
  'service_link-3': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Zadzwonić',
    en: 'Call',
  },
  advantages_title: {
    ua: 'Переваги співпраці зі мною',
    ru: 'Преимущества сотрудничать со мной',
    pl: 'Zalety współpracy ze mną',
    en: 'Advantages of working with me',
  },
  'advantages_pre-title-1': {
    ua: 'Знаю всі нюанси на ринку комерційної нерухомості Варшави',
    ru: 'Знаю все нюансы на рынке коммерческой недвижимости Варшавы',
    pl: 'Znam wszystkie niuanse warszawskiego rynku nieruchomości komercyjnych',
    en: 'I know all the nuances of the Warsaw commercial real estate market',
  },
  'advantages_pre-title-2': {
    ua: 'Маю широкій вибір приміщень, якій щотижня оновлюється',
    ru: 'Имею широкий выбор помещений, которой еженедельно обновляется',
    pl: 'Dysponuję szerokim wyborem pokoi, który jest aktualizowany co tydzień',
    en: 'I have a wide selection of rooms, which is updated weekly',
  },
  'advantages_pre-title-3': {
    ua: 'Мої послуги безкоштовні і я не беру ніяких комісій',
    ru: 'Мои услуги бесплатные и я не беру никаких комиссий',
    pl: 'Moje usługi są bezpłatne i nie pobieram żadnych prowizji',
    en: 'My services are free and there are no hidden costs',
  },
  'advantages_pre-title-4': {
    ua: 'В мене індивідуальний підхід до потреб та вимог клієнта',
    ru: 'У меня индивидуальный подход к потребностям и требованиям клиента',
    pl: 'Do potrzeb i wymagań klienta podchodzę indywidualnie',
    en: 'I have an individual approach to the client`s needs and requirements',
  },
  'advantages_pre-title-5': {
    ua: 'Cупровід на всіх етапах угоди з оренди приміщення',
    ru: 'Сопровождение на всех этапах сделки по аренде помещения',
    pl: 'Wsparcie na każdym etapie umowy najmu',
    en: 'Support at all stages of the lease agreement',
  },
  about_title: {
    ua: 'Про мене',
    ru: 'Обо мне',
    pl: 'O mnie',
    en: 'About me',
  },
  // about_name: {
  //   ua: 'Yurii Bukhtii',
  //   ru: 'Yurii Bukhtii',
  //   pl: 'Yurii Bukhtii',
  //   en: 'Yurii Bukhtii',
  // },
  about_description: {
    ua: 'Привіт! Мене звуть Юрій Бухтій.',
    ru: 'Привет! Меня зовут Юрий Бухтий.',
    pl: 'Cześć! Nazywam się Yuriy Bukhty.',
    en: 'Hello! My name is Yurii Bukhtii.',
  },
  about_description2: {
    ua: 'Я Ваш експерт з оренди комерційної нерухомості у Варшаві. Моя робота дуже проста: я допомагаю іноземному бізнесу — від маленьких стартапів до великих корпорацій — знайти найкраще місце для роботи, магазину чи офісу у Варшаві. Я знаю, наскільки це важливо для Вашого успіху.',
    ru: 'Я ваш эксперт по аренде коммерческой недвижимости в Варшаве. Моя работа очень проста: я помогаю иностранному бизнесу – от маленьких стартапов до крупных корпораций – найти лучшее место для работы, магазина или офиса в Варшаве. Я знаю, насколько это важно для вашего успеха.',
    pl: 'Jestem Waszym ekspertem w zakresie wynajmu nieruchomości komercyjnych w Warszawie. Moja praca jest bardzo prosta: pomagam zagranicznym firmom — od małych startupów po duże korporacje — znaleźć najlepsze miejsce do pracy, na zakupy lub biuro w Warszawie. Wiem, jak ważne jest to dla Waszego sukcesu.',
    en: 'I am your expert in commercial real estate leasing in Warsaw. My job is very simple: I help foreign businesses — from small startups to large corporations — find the best place to work, shop or office in Warsaw. I know how important it is for your success.',
  },
  about_description3: {
    ua: 'Чим я корисний?',
    ru: 'Чем я полезен?',
    pl: 'Jak mogę się przydać?',
    en: 'How can I be useful?',
  },
  about_description4: {
    ua: '1. Я знаю ринок: Я постійно вивчаю пропозиції Варшави і завжди пропоную Вам лише актуальні та найвигідніші варіанти.',
    ru: '1. Я знаю рынок: Я постоянно изучаю предложения Варшавы и всегда предлагаю Вам только самые актуальные и выгодные варианты.',
    pl: '1. Znam rynek: stale analizuję oferty Warszawy i zawsze oferuję Wam tylko najbardziej trafne i opłacalne opcje.',
    en: '1. I know the market: I constantly study Warsaw іs offers and always offer you only the most relevant and profitable options.',
  },
  about_description5: {
    ua: '2. Я думаю про Ваш бізнес: Я не просто шукаю квадратні метри. Я розбираюся у Ваших потребах, щоб знайти місце, яке дійсно допоможе Вам рости.',
    ru: '2. Я думаю о вашем бизнесе: я не просто ищу квадратные метры. Я разбираюсь в ваших потребностях, чтобы найти место, которое действительно поможет вам расти.',
    pl: '2. Myślę o Waszym biznesie: nie szukam tylko metrów kwadratowych. Rozumiem Wasze potrzeby, aby znaleźć miejsce, które naprawdę pomoże Wam się rozwijać.',
    en: '2. I think about your business: I am not just looking for square meters. I understand your needs to find a place that will really help you grow.',
  },
  about_description6: {
    ua: '3. Я все владнаю: Я супроводжую Вас від першої розмови до моменту, коли Ви підписуєте договір оренди. Зі мною це безпечно та зрозуміло.',
    ru: '3. Я все устрою: Я сопровождаю Вас от первого разговора до момента, когда Вы подписываете договор аренды. Со мной это безопасно и понятно.',
    pl: '3. Zarządzam wszystkim: towarzyszę Wam od pierwszej rozmowy do momentu podpisania umowy najmu. Ze mną wszystko jest bezpieczne i jasne.',
    en: '3. I manage everything: I accompany you from the first conversation to the moment you sign the lease agreement. With me, it is safe and clear.',
  },
  about_description7: {
    ua: 'Я хочу стати Вашим надійним партнером у Варшаві. Якщо Ви готові знайти ідеальне приміщення, просто напишіть або зателефонуйте мені!',
    ru: 'Я хочу стать вашим надежным партнером в Варшаве. Если вы готовы найти идеальное помещение, просто напишите или позвоните мне!',
    pl: 'Chcę zostać Waszym niezawodnym partnerem w Warszawie. Jeśli jesteście gotowi znaleźć idealną przestrzeń, po prostu napiszcie lub zadzwońcie! ',
    en: 'I want to become your reliable partner in Warsaw. If you are ready to find the perfect space, just write or call me!',
  },
  contacts_title: {
    ua: 'Безкоштовна консультація',
    ru: 'Бесплатная консультация',
    pl: 'Darmowa konsultacja',
    en: 'Free consultation',
  },
  contacts_logo: {
    ua: 'Професійний підбір офісних приміщень у будь-якому районі Варшави',
    ru: 'Профессиональный выбор офисных помещений в любом районе Варшавы.',
    pl: 'Profesjonalny dobór powierzchni biurowych w dowolnym rejonie Warszawy',
    en: 'Professional selection of office space in any area of ​​Warsaw',
  },
  form_title: {
    ua: 'Залиште свої контактні дані для зворотного зв`язку',
    ru: 'Оставьте свои контактные данные для обратной связи',
    pl: 'Zostaw swoje dane kontaktowe, abyśmy mogli przesłać Ci opinię',
    en: 'Leave your contact details for feedback',
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
    ua: 'Залиште свої контактні дані для зворотного зв`язку',
    ru: 'Оставьте свои контактные данные для обратной связи',
    pl: 'Zostaw swoje dane kontaktowe, abyśmy mogli przesłać Ci opinię',
    en: 'Leave your contact details for feedback',
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
    ua: '✅ Повідомлення відправлено.',
    ru: '✅ Сообщение отправлено.',
    pl: '✅ Pytanie wysłano',
    en: '✅ Message sent.',
  },
  form_answer12: {
    ua: 'Зв`яжуся з Вами протягом однієї години.',
    ru: 'Я свяжусь с Вами в течении одного часа.',
    pl: 'Skontaktuję się z Tobą w ciągu godziny.',
    en: 'I will contact you within one hour.',
  },
  form_answer21: {
    ua: '✅ Повідомлення відправлено.',
    ru: '✅ Сообщение отправлено.',
    pl: '✅ Wiadomość wysłana.',
    en: '✅ Message sent.',
  },
  form_answer22: {
    ua: 'Зв`яжуся з Вами протягом однієї години.',
    ru: 'Я свяжусь с Вами в течении одного часа.',
    pl: 'Skontaktuję się z Tobą w ciągu jednej godziny.',
    en: 'I will contact You within one hour.',
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
