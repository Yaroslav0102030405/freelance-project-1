// const TOKEN = '6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8';
const TOKEN = '8169061476:AAHtDS5WvAkDO9fKRI7oDyzOKKibMVvLoN0';
// const CHAT_ID = '-1002084469289';
const CHAT_ID = '-1002317382342';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('form1').addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</b>\n`;
  message += `<b>Имя: </b> ${this.name.value}\n`;
  message += `<b>Телефон: </b> ${this.tel.value}\n`;
  message += `<b>Комментарий: </b> ${this.comment.value}\n`;
  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(res => {
      this.name.value = '';
      this.tel.value = '';
      this.comment.value = '';
      this.comment.value = `✅ Thank you! Your message has been sent. We will call you back within 10 minutes.`;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log('Конец');
    });
});
