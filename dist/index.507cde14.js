!function(){let e=document.querySelectorAll("[data-btn]"),a=["ua","ru","pl","en"];window.location.pathname;let o=localStorage.getItem("language")||i()||"ua",t={};function n(){for(let e in t){let a=document.querySelector(`[data-lang=${e}]`);a&&(a.textContent=t[e][o])}}function i(){let e=navigator.language.slice(0,2).toLowerCase();if(a.some(a=>a===e))return e}t={"header_menu-home":{ua:"Головна",ru:"Главная",pl:"Główna",en:"Home"},"header_menu-service":{ua:"Послуги",ru:"Услуги",pl:"Usługi",en:"Services"},"header_menu-advantages":{ua:"Переваги",ru:"Преимущества",pl:"Zalety",en:"Advantages"},"header_menu-about":{ua:"Про мене",ru:"Обо мне",pl:"O mnie",en:"About me"},"header_menu-contacts":{ua:"Контакти",ru:"Контакты",pl:"Kontakty",en:"Contact"},"header_banner-name":{ua:"Yurii Bukhtii",ru:"Yurii Bukhtii",pl:"Yurii Bukhtii",en:"Yurii Bukhtii"},"header_banner-pre-title":{ua:"Оренда комерційної нерухомості в Варшаві",ru:"Оренда коммерческой недвижимости в Варшаве",pl:"Wynajem nieruchomości komercyjnych w Warszawie",en:"Commercial real estate for rent in Warsaw"},"header_banner-button":{ua:"Залишити заявку",ru:"Оставить заявку",pl:"Bezpłatna Konsultacja",en:"Free consultation"},"header_banner-link":{ua:"Подзвонити",ru:"Позвонить",pl:"Zadzwonić",en:"Call"},service_title:{ua:"Я займаюсь пошуком найкращих варіантів оренди",ru:"Я занимаюсь поиском лучших вариантов аренды",pl:"Szukam najlepszych opcji wynajmu",en:"I`m looking for the best options for rent"},"service_pre-title-1":{ua:"Оренда офісу в Варшаві",ru:"Аренда офису в Варшаве",pl:"Biuro do wynajęcia w Warszawie",en:"Office rental in Warsaw"},"service_description-1":{ua:"Для Вас я знайду офіс в різних районах Варшави.",ru:"Для вас найду помещение под офис в любом районе Варшавы.",pl:"Znajdę dla Ciebie biuro w różnych dzielnicach Warszawy.",en:"I will find an office space in Warsaw."},"service_description-1-2":{ua:"Офіс може бути як готовий мебльований, так і запроєктований згідно Ваших побажань.",ru:"Офис может быть как готов меблирован, так и запроектирован согласно Вашим пожеланиям.",pl:"Biuro może być w pełni umeblowane lub zaprojektowane według Waszych potrzeb.",en:"The office can be designed according to your needs or an office space wich is fully serviced and ready to move in. "},"service_description-1-3":{ua:"Метраж від 100 до 30 000 мкв",ru:"Метраж от 100 до 30000 мкв.",pl:"Powierzchnia od 100 do 30 000 m2.",en:"Area from 100 to 30 000 sq.m."},"service_description-1-4":{ua:"*Послуга повністю безкоштовна і немає прихованих комісій",ru:"*Услуга полностью бесплатная и нет скрытых комиссий",pl:"*Usługa jest całkowicie bezpłatna i nie zawiera żadnych ukrytych opłat",en:"*My service is free and there are no hidden costs."},"service_button-1":{ua:"Залишити заявку",ru:"Оставить заявку",pl:"Bezpłatna Konsultacja",en:"Free consultation"},"service_link-1":{ua:"Подзвонити",ru:"Позвонить",pl:"Zadzwonić",en:"Call"},"service_pre-title-2":{ua:"Склад в Польщі",ru:"Склад в Польше",pl:"Magazyn w Polsce",en:"Warehouse in Poland"},"service_description-2":{ua:"Я також займаюся орендою складів в Польщі.",ru:"Я также занимаюсь арендой складов в Польше.",pl:"Wynajmuję również magazyny w Polsce.",en:"I also rent warehouses in Poland."},"service_description-2-2":{ua:"В доступі є база власників/операторів Складів в Польщі з офісними приміщеннями.",ru:"В доступе есть база владельцев/операторов в Польше с офисными помещениями.",pl:"Dostępna jest baza danych właścicieli/operatorów Magazynów w Polsce.",en:"I have access to a database of owners/operators of warehouses."},"service_description-2-3":{ua:"Добра поблизу інфраструктура і доїзд.",ru:"Хорошая инфраструктура вблизи и доезд.",pl:"W pobliżu dobra infrastruktura i dojazd.",en:"Good infrastructure nearby and easy access."},"service_description-2-4":{ua:"Метраж від 100 до 30 000 мкв",ru:"Метраж от 100 до 30000 мкв.",pl:"Powierzchnia od 500 do 30 000 m2.",en:"Area from 500 to 30 000 sq.m."},"service_description-2-5":{ua:"*Послуга повністю безкоштовна і немає прихованих комісій",ru:"*Услуга полностью бесплатна и нет скрытых комиссий",pl:"*Usługa jest całkowicie bezpłatna i nie zawiera żadnych ukrytych opłat",en:"*My service is free and there are no hidden costs."},"service_button-2":{ua:"Залишити заявку",ru:"Оставить заявку",pl:"Bezpłatna Konsultacja",en:"Free consultation"},"service_link-2":{ua:"Подзвонити",ru:"Позвонить",pl:"Zadzwonić",en:"Call"},"service_pre-title-3":{ua:"Реєстрації фірми в Польщі та супровід",ru:"Регистрации фирмы в Польше и сопровождение",pl:"Rejestracja firmy w Polsce",en:"I assist in:"},"service_description-3":{ua:"Допомогаю в відкритті фірм в Польщі, повний супровід її діяльності.",ru:"Помощью в открытии фирм в Польше, полное сопровождение ее деятельности.",pl:"Pomagam w otwieraniu firm w Polsce, pełne wsparcie jej działalności.",en:"- the process of registering companies and all the services,"},"service_description-3-1":{ua:"Легалізація працівників Вашої фірми.",ru:"Легализация работников вашей фирмы.",pl:"Legalizacja pracowników Twojej firmy.",en:"- legalisation of your company`s employees."},"service_description-3-2":{ua:"Звертайтеся я з радістю Вам допоможу",ru:"Обращайтесь с радостью Вам помогу",pl:"Skontaktuj się ze mną, chętnie Ci pomogę",en:"Contact me with pleasure, I will help you."},"service_description-3-3":{ua:"*Послуга платна",ru:"*Услуга платная",pl:"*Usługa jest płatna",en:"*Service is paid."},"service_button-3":{ua:"Залишити заявку",ru:"Оставить заявку",pl:"Darmowa konsultacja",en:"Free consultation"},"service_link-3":{ua:"Подзвонити",ru:"Позвонить",pl:"Zadzwonić",en:"Call"},advantages_title:{ua:"5 причин співпрацювати зі мною",ru:"5 причин сотрудничать со мной",pl:"5 powodów, żeby ze mną współpracować",en:"5 reasons to work with me"},"advantages_pre-title-1":{ua:"Маю успішний досвід в комерційній нерухомісті",ru:"Имею успешный опыт в коммерческой недвижимости",pl:"Posiadam udane doświadczenie w obrocie nieruchomościami komercyjnymi",en:"I have successful experience in commercial real estate"},"advantages_pre-title-2":{ua:"Пропоную тільки найкращі варіанти оренди",ru:"Предлагаю только лучшие варианты оренды",pl:"Oferuję tylko najlepsze opcje wynajmu",en:"I offer only the best rental options"},"advantages_pre-title-3":{ua:"Мої послуги безкоштовні і я не беру ніяких комісій",ru:"Мои услуги бесплатные и я не беру никаких комиссий",pl:"Moje usługi są bezpłatne i nie pobieram żadnych prowizji",en:"My services are free and I do not charge any commissions"},"advantages_pre-title-4":{ua:"Допомогаю на всіх етапах підписання договору по оренді",ru:"Помогаю на всех этапах подписания договору по оренде",pl:"Pomagam na każdym etapie podpisywania umowy najmu",en:"Assistance in all stages, written on a daily basis, on a daily basis"},"advantages_pre-title-5":{ua:"В мене найбільша база оренди в Варшаві під офіс та склад",ru:"У меня самая большая база аренды в Варшаве под офис и склад",pl:"Posiadam największą bazę wynajmu biur i magazynów w Warszawie",en:"In my current database, in Warsaw, here I am in storage"},about_title:{ua:"Я професіонал і вмію знаходити ідеальну локалізацію",ru:"Я профессионал и умею находить идеальный вариант",pl:"Jestem profesjonalistą i wiem jak znaleźć idealną lokalizację",en:"I am a professional and I know how to find the perfect localization"},about_description:{ua:"Привіт! Мене звати Yurii Bukhtii.",ru:"Привет! Меня зовут Yurii Bukhtii.",pl:"Cześć! Nazywam się Yurii Bukhtii.",en:"Hello! My name is Yurii Bukhtii."},about_description2:{ua:"Я брокер комерційної нерухомості в Варшаві.",ru:"Я брокер коммерческой недвижимости в Варшаве.",pl:"Jestem brokerem nieruchomości komercyjnych w Warszawie.",en:"I am a commercial real estate broker in Warsaw."},about_description3:{ua:"Моя робота полягає у тому, щоб допомогти інвесторам, підприємцям та організаціям знайти ідеальний офіс для їхньої діяльності.",ru:"Моя работа состоит в том, чтобы помочь инвесторам, предпринимателям и организациям найти идеальный офис для их деятельности.",pl:"Moją pracą jest wsparcie inwestorów, przedsiębiorców i organizacji w znalezieniu idealnego biura dla ich biznesu.",en:"My job is to help investors, entrepreneurs, and organizations find the perfect office space for their operations."},about_description4:{ua:"Я проводжу Вас через цілий процес найму комерційної нерухомості до підпису договору найкращого для Вас офісу.",ru:"Я провожу Вас через целый процесс найма коммерческой недвижимости до подписи договора лучшего для Вас офиса.",pl:"Przeprowadzę Cię przez cały proces wynajmu nieruchomości komercyjnej aż do podpisania umowy na najlepsze dla Ciebie biuro.",en:"I will guide you through the entire process of renting commercial real estate you until the contract is signed."},about_description5:{ua:"В мене з клієнтами надійні та прозорі відносини, також я маю доступ до великої бази нерухомості і це дозволяє мені швидко знаходити приміщення для оренди які потрібні моїм клієнтам. ",ru:"У меня с клиентами надежные и прозрачные отношения, также у меня есть доступ к большой базе недвижимости и это позволяет мне быстро находить помещения для аренды которые нужны моим клиентам.",pl:"Mam rzeteln i przejrzyst relacj ze swoimi klientami Mam dostęp do dużej bazy nieruchomości, co pozwala mi szybko znaleźć lokale do wynajęcia, których potrzebują moi klienci.",en:"I have access to a large real estate database, which enables me to find the ideal office space for my clients."},about_description6:{ua:"Проживаю в Варшаві і Ви можете приїхати до мене в офіс або ми можемо зустрітися де Вам буде зручніше. ",ru:"Проживаю в Варшаве и Вы можете приехать ко мне в офис или мы можем встретиться, где Вам будет удобнее.",pl:"Pracuję w Warszawie i możesz przyjechać do mojego biura lub możemy spotkać się tam, gdzie jest wygodniej dla Ciebie.",en:"I work in Warsaw and we can meet at my office or wherever is convenient for you."},about_description7:{ua:"Я готовий допомогти Вам знайти ідеальну Локалізацію!",ru:"Я готов помочь Вам найти идеальную локализацию!",pl:"Jestem gotowy pomóc Ci w znalezieniu idealnej lokalizacji!",en:"I am ready to help you find your perfect location."},contacts_title:{ua:"Дзвоніть, пишіть або залишайте заявку",ru:"Звоните, пишите или оставляйте заявку",pl:"Zadzwoń, napisz lub zostaw prośbę",en:"Call, write or leave a request"},contacts_logo:{ua:"Я безкоштовно знайду для Вас в будь-якому районі Варшави оренду під офіс. Телефонуйте чи заповнюйте форму обратнього зв`язку або пишіть в телеграм.",ru:"Я бесплатно найду для Вас в любом районе Варшавы аренду под офис. Звоните или заполняйте форму обратного связи или пишите в телеграмму.",pl:"Znajdę dla Ciebie biuro w każdej dzielnicy w Warszawie bez prowizji. Zadzwoń lub wypełnij formularz zwrotny lub napisz na Telegram.",en:"I will find you an office space for rent in any district of Warsaw for free. Call or fill out the feedback form or write to Telegram."},form_title:{ua:"Залишити заявку",ru:"Оставить заявку",pl:"Bezpłatne konsultacja",en:"Free consultation"},form_name:{ua:"Ім`я*",ru:"Имя*",pl:"Imię*",en:"Name*"},form_tel:{ua:"Номер телефону*",ru:"Номер телефона*",pl:"Telefon*",en:"Phone number*"},form_comment:{ua:"Коментар",ru:"Комментарий",pl:"Komentarz",en:"Message"},form_btn:{ua:"Відправити",ru:"Отправить",pl:"Wysłać",en:"Send"},form_title2:{ua:"Залишити заявку",ru:"Оставить заявку",pl:"Bezpłatne konsultacja",en:"Free consultation"},form_name2:{ua:"Ім`я*",ru:"Имя*",pl:"Imię*",en:"Name*"},form_tel2:{ua:"Номер телефону*",ru:"Номер телефона*",pl:"Telefon*",en:"Phone number*"},form_comment2:{ua:"Коментар",ru:"Комментарий",pl:"Komentarz",en:"Message"},form_btn2:{ua:"Відправити",ru:"Отправить",pl:"Wysłać",en:"Send"},form_answer1:{ua:"✅ Повідомлення відправлено.",ru:"✅ Сообщение отправлено.",pl:"✅ Wiadomość wysłana.",en:"✅ Message sent."},form_answer12:{ua:"Зв`яжуся з Вами протягом однієї години.",ru:"Я свяжусь с Вами в течении одного часа.",pl:"Skontaktuję się z Tobą w ciągu jednej godziny.",en:"I will contact You within one hour."},form_answer21:{ua:"✅ Повідомлення відправлено.",ru:"✅ Сообщение отправлено.",pl:"✅ Wiadomość wysłana.",en:"✅ Message sent."},form_answer22:{ua:"Зв`яжуся з Вами протягом однієї години.",ru:"Я свяжусь с Вами в течении одного часа.",pl:"Skontaktuję się z Tobą w ciągu jednej godziny.",en:"I will contact You within one hour."}},n(),e.forEach(a=>{a.addEventListener("click",t=>{t.target.classList.contains("header__btn_active")||(o=t.target.dataset.btn,localStorage.setItem("language",t.target.dataset.btn),function(e,a){e.forEach(e=>{e.classList.remove(a)})}(e,"header__btn_active"),a.classList.add("header__btn_active"),n())})}),console.log("navigator.language",i());let r={openModalRef:document.querySelector(".js-button"),closeModalBtnRef:document.querySelector(".js-close-modal"),backdrop2Ref:document.querySelector(".js-backdrop-2")};function u(){r.backdrop2Ref.classList.add("is-hidden-2"),window.removeEventListener("keydown",s),document.body.classList.remove("show-modal")}function s(e){"Escape"===e.code&&u()}r.openModalRef.addEventListener("click",function(e){r.backdrop2Ref.classList.remove("is-hidden-2"),window.addEventListener("keydown",s),document.body.classList.add("show-modal")}),r.closeModalBtnRef.addEventListener("click",u),r.backdrop2Ref.addEventListener("click",function(e){e.currentTarget===e.target&&u()});let l={containerEl:document.querySelector(".js-modal"),backdrop:document.querySelector(".js-backdrop")};l.containerEl.addEventListener("click",function(e){e.target.classList.contains("btn")&&(console.log(e.target),document.body.classList.remove("show-modal"),l.backdrop.classList.add("is-hidden"))});let c={containerRef:document.querySelector(".service__list"),openModalRef:document.querySelector(".js-button"),closeModalBtnRef:document.querySelector(".js-close-modal"),backdrop2Ref:document.querySelector(".js-backdrop-2")};function d(){c.backdrop2Ref.classList.add("is-hidden-2"),window.removeEventListener("keydown",m),document.body.classList.remove("show-modal")}function m(e){"Escape"===e.code&&d()}c.containerRef.addEventListener("click",function(e){console.log(e),e.target.classList.contains("js-button")&&(c.backdrop2Ref.classList.remove("is-hidden-2"),window.addEventListener("keydown",m),document.body.classList.add("show-modal"))}),c.closeModalBtnRef.addEventListener("click",d),c.backdrop2Ref.addEventListener("click",function(e){e.currentTarget===e.target&&d()}),window.addEventListener("scroll",()=>{let e=window.scrollY;document.querySelectorAll(".scroll").forEach((a,o)=>{a.offsetTop-document.querySelector(".nav").clientHeight<=e&&(document.querySelectorAll(".nav a").forEach(e=>{e.classList.contains("active")&&e.classList.remove("active")}),document.querySelectorAll(".nav li")[o].querySelector("a").classList.add("active"))})}),SmoothScroll({animationTime:800,stepSize:75,accelerationDelta:30,accelerationMax:2,keyboardSupport:!0,arrowScroll:50,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,touchpadSupport:!0});let p=document.querySelector(".form__text1"),w=document.querySelector(".form_answer1");document.getElementById("form1").addEventListener("submit",function(e){e.preventDefault();let a=`<b>\u{411}\u{415}\u{421}\u{41F}\u{41B}\u{410}\u{422}\u{41D}\u{410}\u{42F} \u{41A}\u{41E}\u{41D}\u{421}\u{423}\u{41B}\u{42C}\u{422}\u{410}\u{426}\u{418}\u{42F}</b>
`;a+=`<b>\u{418}\u{43C}\u{44F}: </b> ${this.name.value}
<b>\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: </b> ${this.tel.value}
<b>\u{41A}\u{43E}\u{43C}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{438}\u{439}: </b> ${this.comment.value}
`,axios.post("https://api.telegram.org/bot8169061476:AAHtDS5WvAkDO9fKRI7oDyzOKKibMVvLoN0/sendMessage",{chat_id:"-1002317382342",parse_mode:"html",text:a}).then(e=>{this.name.value="",this.tel.value="",this.comment.value="",p.classList.add("form__none1"),w.classList.add("form_answer-block1")}).catch(e=>{console.log(e)}).finally(()=>{console.log("Конец")})});let f=document.querySelector(".form__text2"),h=document.querySelector(".form_answer2");document.getElementById("form2").addEventListener("submit",function(e){e.preventDefault();let a=`<b>\u{411}\u{415}\u{421}\u{41F}\u{41B}\u{410}\u{422}\u{41D}\u{410}\u{42F} \u{41A}\u{41E}\u{41D}\u{421}\u{423}\u{41B}\u{42C}\u{422}\u{410}\u{426}\u{418}\u{42F}</b>
`;a+=`<b>\u{418}\u{43C}\u{44F}: </b> ${this.name.value}
<b>\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: </b> ${this.tel.value}
<b>\u{41A}\u{43E}\u{43C}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{438}\u{439}: </b> ${this.comment.value}
`,axios.post("https://api.telegram.org/bot8169061476:AAHtDS5WvAkDO9fKRI7oDyzOKKibMVvLoN0/sendMessage",{chat_id:"-1002317382342",parse_mode:"html",text:a}).then(e=>{this.name.value="",this.tel.value="",this.comment.value="",f.classList.add("form__none2"),h.classList.add("form_answer-block2")}).catch(e=>{console.log(e)}).finally(()=>{console.log("Конец")})}),new Splide("#slider1").mount(),new Splide("#slider2").mount(),new Splide("#slider3").mount();let y=[],b=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){y.push(e.target);let a=(y.length-1)*300;e.target.setAttribute("data-aos-delay",`${a}`),setTimeout(()=>{y.shift()},a)}})},{rootMargin:"0px",threshold:.2});document.querySelectorAll("[data-aos]:not([data-aos-delay])").forEach(e=>{b.observe(e)})}();
//# sourceMappingURL=index.507cde14.js.map