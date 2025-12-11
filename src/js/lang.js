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
  // header_logo: {
  //   ua: 'Брокер Yurii Bukhtii',
  //   ru: 'Брокер Yurii Bukhtii',
  //   pl: 'Agent Yurii Bukhtii',
  //   en: 'Broker Yurii Bukhtii',
  // },
  'header_banner-button-1': {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Zostaw prośbę',
    en: 'Leave a request',
  },
  'header_banner-link-1': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Dzwonić',
    en: 'Call',
  },
  service_title: {
    ua: 'Я займаюсь пошуком найкращих варіантів оренди офісів',
    ru: 'Я занимаюсь поиском лучших вариантов аренды офисов',
    pl: 'Szukam najlepszych opcji wynajmu biur',
    en: 'I am looking for the best options for renting offices',
  },
  'service_title-1': {
    ua: 'Оренда офісу в Варшаві',
    ru: 'Аренда офиса в Варшаве',
    pl: 'Wynajem biura w Warszawie',
    en: 'Office rental in Warsaw',
  },
  'service_desc-1-1': {
    ua: 'Для Вас я знайду офіс в різних районах Варшави',
    ru: 'Для Вас я найду офис в разных районах Варшавы',
    pl: 'Znajdę dla Ciebie biuro w różnych dzielnicach Warszawy',
    en: 'I will find an office for you in different districts of Warsaw',
  },
  'service_desc-1-2': {
    ua: 'Офіс може бути як готовий мебльований, так і спроектований згідно Ваших побажань',
    ru: 'Офис может быть как готов меблирован, так и спроектирован согласно Вашим пожеланиям',
    pl: 'Biuro może być w pełni umeblowane lub zaprojektowane według Państwa życzeń.',
    en: 'The office can be either fully furnished or designed according to your wishes',
  },
  'service_desc-1-3': {
    ua: 'Метраж від 100 до 3000 мкв',
    ru: 'Метраж от 100 до 3000 мкв',
    pl: 'Powierzchnia od 100 do 3000 mkw',
    en: 'Area from 100 to 3000 sq m',
  },
  'service_desc-1-4': {
    ua: '*Послуга повністю безкоштовна і немає прихованих комісій',
    ru: '*Услуга полностью бесплатна и нет скрытых комиссий',
    pl: '*Usługa jest całkowicie bezpłatna i nie ma żadnych ukrytych opłat',
    en: '*The service is completely free and there are no hidden fees',
  },
  'service_btn-1': {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Zostaw prośbę',
    en: 'Leave a request',
  },
  'service_btn-1-2': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Dzwonić',
    en: 'Call',
  },
  'service_title-2': {
    ua: 'Склад в Польщі',
    ru: 'Склад в Польше',
    pl: 'Magazyn w Polsce',
    en: 'Warehouse in Poland',
  },
  'service_desc-2-1': {
    ua: 'Я також займаюсь орендою складів в Польщі',
    ru: 'Я также занимаюсь арендой складов в Польше',
    pl: 'Wynajmuję również magazyny w Polsce',
    en: 'I also rent warehouses in Poland',
  },
  'service_desc-2-2': {
    ua: 'В доступі є база власників/операторів складів в Польщі з офіційними приміщеннями',
    ru: 'В доступе есть база владельцев/операторов складов в Польше с официальными помещениями',
    pl: 'Dostępna jest baza danych właścicieli/operatorów magazynów w Polsce posiadających siedziby urzędowe',
    en: 'A database of warehouse owners/operators in Poland with official premises is available',
  },
  'service_desc-2-3': {
    ua: 'Добра поблизу інфраструктура і доїзд',
    ru: 'Рядом поблизости инфраструктура и доезд',
    pl: 'Dobra infrastruktura i dojazd w pobliżu',
    en: 'Good nearby infrastructure and access',
  },
  'service_desc-2-4': {
    ua: 'Метраж від 100 до 3000 мкв',
    ru: 'Метраж от 100 до 3000 мкв',
    pl: 'Powierzchnia od 100 do 3000 mkw',
    en: 'Area from 100 to 3000 sq m',
  },
  'service_desc-2-5': {
    ua: '*Послуга повністю безкоштовна і немає прихованих комісій',
    ru: '*Услуга полностью бесплатна и нет скрытых комиссий',
    pl: '*Usługa jest całkowicie bezpłatna i nie ma żadnych ukrytych opłat',
    en: '*The service is completely free and there are no hidden fees',
  },
  'service_btn-2': {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Zostaw prośbę',
    en: 'Leave a request',
  },
  'service_btn-2-2': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Dzwonić',
    en: 'Call',
  },
  'service_title-3': {
    ua: 'Реєстрація фірми в Польщі та супровід',
    ru: 'Регистрация фирмы в Польше и сопровождение',
    pl: 'Rejestracja firmy w Polsce i wsparcie',
    en: 'Company registration in Poland and support',
  },
  'service_desc-3-1': {
    ua: 'Допомогаю відкрити фірму в Польщі з повним супровідом',
    ru: 'Помощь открыть фирму в Польше с полным сопровождением',
    pl: 'Pomagam otworzyć firmę w Polsce z pełnym wsparciem',
    en: 'I help you open a company in Poland with full support',
  },
  'service_desc-3-2': {
    ua: 'Легалізація працівників Вашої фірми',
    ru: 'Легализация работников вашей фирмы',
    pl: 'Legalizacja pracowników Twojej firmy',
    en: 'Legalization of your company`s employees',
  },
  'service_desc-3-3': {
    ua: 'Звертайтеся я з радістю Вам допоможу',
    ru: 'Обращайтесь с радостью Вам помогу',
    pl: 'Proszę się ze mną skontaktować, chętnie pomogę',
    en: 'Please contact me, I will be happy to help you',
  },
  'service_desc-3-4': {
    ua: '*Послуга платна',
    ru: '*Услуга платная',
    pl: '*Usługa jest płatna',
    en: '*Service is paid',
  },
  'service_btn-3': {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Zostaw prośbę',
    en: 'Leave a request',
  },
  'service_btn-3-2': {
    ua: 'Подзвонити',
    ru: 'Позвонить',
    pl: 'Dzwonić',
    en: 'Call',
  },

  'my-services_title-2': {
    ua: '5 причин співпрацювати зі мною',
    ru: '5 причин сотрудничать со мной',
    pl: '5 powodów, dla których warto ze mną współpracować',
    en: '5 reasons to work with me',
  },
  'my-services-desc-1': {
    ua: 'Має успішний досвід в комерційній нерухомості',
    ru: 'Имею успешный опыт в коммерческой недвижимости',
    pl: 'Posiada udane doświadczenie w obrocie nieruchomościami komercyjnymi',
    en: 'Has successful experience in commercial real estate',
  },
  'my-services-desc-2': {
    ua: 'Пропоную тільки найкращі варіанти оренди',
    ru: 'Предлагаю только самые лучшие варианты аренды',
    pl: 'Oferuję tylko najlepsze opcje wynajmu',
    en: 'I offer only the best rental options',
  },
  'my-services-desc-3': {
    ua: 'Мої послуги безкоштовні і я не беру ніяких комісій',
    ru: 'Мои услуги бесплатны и я не принимаю никаких комиссий',
    pl: 'Moje usługi są bezpłatne i nie pobieram żadnych prowizji',
    en: 'My services are free and I do not charge any commissions',
  },
  'my-services-desc-4': {
    ua: 'Допомогаю на всіх етапах підписання договору по оренді',
    ru: 'Помощью на всех этапах подписания договора по аренде',
    pl: 'Pomagam na każdym etapie podpisywania umowy najmu',
    en: 'I help at all stages of signing a lease agreement',
  },
  'my-services-desc-5': {
    ua: 'В мене найбільша база оренди офісів та складів в Варшаві',
    ru: 'У меня самая большая база аренды офисов и складов в Варшаве',
    pl: 'Wybór biura do wynajęcia z indywidualnym remontem dla najemcy',
    en: 'I have the largest base of office and warehouse rentals in Warsaw',
  },
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
    pl: 'Personal selection',
    en: 'Personal selection',
  },
  'advantages_pre-title-6': {
    ua: 'Без комісії для орендаря',
    ru: 'Без комиссии для арендатора',
    pl: 'Brak opłat dla najemcy',
    en: 'No fee for the tenant',
  },
  // меню header
  'header_menu-home': {
    ua: 'Головна',
    ru: 'Главная',
    pl: 'Dom',
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
  'header_banner-pre-title': {
    ua: 'Оренда офісів, комерційної нерухомості у Варшаві',
    ru: 'Аренда офисов, коммерческой недвижимости в Варшаве',
    pl: 'Wynajem biur, nieruchomości komercyjnych w Warszawie',
    en: 'Rent of offices, commercial real estate in Warsaw',
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
    pl: 'Jestem profesjonalistą, który wie jak znaleźć idealną lokalizację',
    en: 'I am a professional who knows how to find the perfect localization',
  },
  about_title: {
    ua: 'Я професіонал і вмію знаходити ідеальну локалізацію',
    ru: 'Я профессионал и умею находить идеальную локализацию',
    pl: 'Jestem profesjonalistą, który wie jak znaleźć idealną lokalizację',
    en: 'I am a professional who knows how to find the perfect localization',
  },
  about_description: {
    ua: 'Привіт! Мене звати Yurii Bukhtii',
    ru: 'Привет! Меня зовут Yurii Bukhtii',
    pl: 'Cześć! Mam na imię Yurii Bukhtii',
    en: 'Hello! My name is Yurii Bukhtii',
  },
  about_description2: {
    ua: 'Я брокер комерційної нерухомості в Варшаві',
    ru: 'Я брокер коммерческой недвижимости в Варшаве',
    pl: 'Jestem pośrednikiem w obrocie nieruchomościami komercyjnymi w Warszawie',
    en: 'I am a commercial real estate broker in Warsaw',
  },
  about_description3: {
    ua: 'Моя робота полягає у тому, щоб допомогти інвесторам, підприємцям та організаціям знайти ідеальний офіс для їхньої діяльності',
    ru: 'Моя работа заключается в том, чтобы помочь инвесторам, предпринимателям и организациям найти идеальный офис для их деятельности',
    pl: 'Moim zadaniem jest pomoc inwestorom, przedsiębiorcom i organizacjom w znalezieniu idealnego biura dla ich działalności',
    en: 'My job is to help investors, entrepreneurs and organizations find the perfect office for their business',
  },
  about_description4: {
    ua: 'Я проводжу Вас через цілий процес найму комерційної нерухомості до підпису договору найкращого для Вас офісу',
    ru: 'Я провожу Вас через целый процесс найма коммерческой недвижимости до подписи договора лучшего для Вас офиса',
    pl: 'Przeprowadzę Cię przez cały proces wynajmu nieruchomości komercyjnej, aż do podpisania umowy na najlepsze dla Ciebie biuro',
    en: '1. I know the market and constantly study Warsaw`s offers and always offer only the most relevant and profitable options',
  },
  about_description5: {
    ua: 'В мене з клієнтами надійні та прозорі відносини, також я маю доступ до великої бази нерухомості і це дозволяє мені швидко знаходити приміщення для оренди які потрібні моїм клієнтам',
    ru: 'У меня с клиентами надежные и прозрачные отношения, также у меня есть доступ к большой базе недвижимости и это позволяет мне быстро находить помещения для аренды которые нужны моим клиентам',
    pl: 'Utrzymuję rzetelne i przejrzyste relacje z klientami, a także mam dostęp do obszernej bazy danych nieruchomości, co pozwala mi szybko znaleźć przestrzeń do wynajęcia, której potrzebują moi klienci',
    en: 'I have reliable and transparent relationships with my clients, and I also have access to a large real estate database, which allows me to quickly find the rental space my clients need',
  },
  about_description6: {
    ua: 'Проживаю в Варшаві і Ви можете приїхати до мене в офіс або ми можемо зустрітися де Вам буде зручнои',
    ru: 'Проживаю в Варшаве и Вы можете приехать ко мне в офис или мы можем встретиться, где Вам будет удобно',
    pl: 'Mieszkam w Warszawie i możesz przyjść do mojego biura lub możemy spotkać się w innym dogodnym dla Ciebie miejscu',
    en: 'I live in Warsaw and you can come to my office or we can meet wherever is convenient for you',
  },
  about_description7: {
    ua: 'Я готовий Вам допомогти знайти ідеальну Локалізацію!',
    ru: 'Я готов помочь Вам найти идеальную Локализацию!',
    pl: 'Chętnie pomogę Ci znaleźć idealną lokalizację!',
    en: 'I am ready to help you find the perfect Localization!',
  },
  contacts_title: {
    ua: 'Дзвоніть, пишіть або залишайте заявку',
    ru: 'Звоните, пишите или оставляйте заявку',
    pl: 'Zadzwoń, napisz lub zostaw prośbę',
    en: 'Call, write or leave a request',
  },
  contacts_logo: {
    ua: 'Я безкоштовно знайду для Вас офіс в будь-якому райні Варшави. Телефонуйте або заповнюйте форму зворотнього зв`язку чи пишіть в телеграм',
    ru: 'Я бесплатно найду для Вас офис в любом районе Варшавы. Звоните или заполняйте форму обратной связи или пишите в телеграм',
    pl: 'Znajdę dla Ciebie biuro w dowolnej dzielnicy Warszawy za darmo. Zadzwoń, wypełnij formularz kontaktowy lub napisz na Telegramie',
    en: 'I will find an office for you in any district of Warsaw for free. Call or fill out the feedback form or write to Telegram',
  },
  form_title: {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Zostaw prośbę',
    en: 'Leave a request',
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
    pl: 'Telefon*',
    en: 'Phone*',
  },
  form_comment: {
    ua: 'Повідомлення',
    ru: 'Сообщение',
    pl: 'Wiadomość',
    en: 'Message',
  },
  form_btn: {
    ua: 'Відправити',
    ru: 'Отправить',
    pl: 'Wysłać pytanie',
    en: 'Send an enquiry',
  },
  form_title2: {
    ua: 'Залишити заявку',
    ru: 'Оставить заявку',
    pl: 'Zostaw prośbę',
    en: 'Leave a request',
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
    pl: 'Telefon*',
    en: 'Phone*',
  },
  form_comment2: {
    ua: 'Повідомлення',
    ru: 'Сообщение',
    pl: 'Wiadomość',
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
