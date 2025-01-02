// скрипт делегування щоб в контенере при натискі на будь яку кнопку відкривилося модалька
const refsContainerButton = {
  containerEl: document.querySelector('.js-modal'),
  //   closeModalBtn: document.querySelector('.js-modal'),
  backdrop: document.querySelector('.js-backdrop'),
  //   modalTitle: document.querySelector('.js-modal-title'),
};

refsContainerButton.containerEl.addEventListener('click', onClickButton);
// refsContainerButton.closeModalBtn.addEventListener('click', onCloseModal);
// refsContainerButton.backdrop.addEventListener('click', onBackdropModal);

function onClickButton(e) {
  if (!e.target.classList.contains('btn')) {
    return;
  }
  console.log(e.target);
  //   window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  onCloseModal();
  //   refsContainerButton.modalTitle.textContent = e.target.textContent;
}

function onCloseModal() {
  //   window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  refsContainerButton.backdrop.classList.add('is-hidden');
}

// function onBackdropModal(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event) {
//   if (event.code === 'Escape') {
//     onCloseModal();
//   }
// }
