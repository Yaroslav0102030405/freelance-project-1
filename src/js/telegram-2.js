const TOKEN = '6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8';
const CHAT_ID = '-1002084469289';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
// const success2 = document.querySelector('success-2');

document.getElementById('form2').addEventListener('submit', function (e) {
  e.preventDefault();

  let message1 = `<b>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</b>\n`;
  message1 += `<b>Имя: </b> ${this.name.value}\n`;
  message1 += `<b>Телефон: </b> ${this.tel.value}\n`;
  message1 += `<b>Комментарий: </b> ${this.comment.value}\n`;
  //   message += `<b>Телефон: </b> ${this.phone.value}\n`;
  //   message += `<b>Коментар: </b> ${this.comment.value}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message1,
    })
    .then(res => {
      this.name.value = '';
      this.tel.value = '';
      this.comment.value = '';
      //   this.phone.value = '';
      //   this.comment.value = '';
      //   this.topic.value = '';
      //   this.checkbox.value = '';
      this.comment.value = `✅ Thank you! Your message has been sent. We will call you back within 10 minutes.`;
      // success1.textContent = `Дякуємо за замовлення`;
      // success1.classList.add('success-1');
      // '<p class="message2">Message sent!</p class="message2"><p>A manager will contact you in 15 minutes!</p>';
      // success1.style.display = 'block';
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('Конец');
    });
});
