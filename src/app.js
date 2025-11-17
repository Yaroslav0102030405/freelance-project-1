// document.addEventListener('DOMContentLoaded', function () {
//   // Ініціалізація AOS (якщо вона там є, або перенесіть її сюди, щоб керувати порядком)
//   // Якщо AOS.init() виконується в HTML, залиште тут тільки вашу логіку IntersectionObserver

//   // Затримка для гарантованого коректного монтування
//   setTimeout(() => {
//     // Ініціалізація Splide
//     new Splide('#slider1').mount();
//     new Splide('#slider2').mount();
//     new Splide('#slider3').mount(); // Ваш проблемний слайдер
//   }, 100); // Невелика затримка (100 мс) гарантує, що всі скрипти виконано
// });

// document.addEventListener('DOMContentLoaded', function () {
//   // Ініціалізація першого слайдера
//   new Splide('#slider1', {
//     // Додаткові опції, якщо потрібні
//     // наприклад: perPage: 1, rewind: true,
//   }).mount();

//   // Ініціалізація другого слайдера
//   new Splide('#slider2', {
//     // Додаткові опції, якщо потрібні
//   }).mount();

//   // Ініціалізація третього слайдера
//   new Splide('#slider3', {
//     // Додаткові опції, якщо потрібні
//     // Оскільки тут лише 2 слайди, Splide за замовчуванням може вимкнути стрілки,
//     // але пагінація має відображатися правильно.
//   }).mount();
// });

// Щоб анімація була послудовною AOS
const stack = [];
const delayFactor = 300;

const options = {
  rootMargin: '0px',
  threshold: 0.2,
};

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      stack.push(entry.target);

      const delay = (stack.length - 1) * delayFactor;

      entry.target.setAttribute('data-aos-delay', `${delay}`);

      setTimeout(() => {
        stack.shift();
      }, delay);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const elementsToTrack = document.querySelectorAll(
  '[data-aos]:not([data-aos-delay])',
);

elementsToTrack.forEach(element => {
  observer.observe(element);
});

// new Splide('#slider1').mount();
// new Splide('#slider2').mount();
// new Splide('#slider3').mount();
import Splide from '@splidejs/splide';
document.addEventListener('DOMContentLoaded', function () {
  // new Splide('#slider1').mount();
  // new Splide('#slider2').mount();
  // new Splide('#slider3').mount();

  // Ініціалізація Splide відбувається тільки після паузи
  new Splide('#slider1').mount();
  new Splide('#slider2').mount();
  new Splide('#slider3').mount();
});

import './js/lang';
import './js/hero-modal';
import './js/modal';
import './js/modal-2';
import './js/scrollPage';
import './js/smoothscroll';
import './js/telegram-1';
import './js/telegram-2';
