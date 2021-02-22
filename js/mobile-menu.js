(() => {
  const refs = {
    openModalBtn: document.querySelector('.mobile-menu-open-btn'),
    closeModalBtn: document.querySelector('.mobile-menu-close-btn'),
    modal: document.querySelector('#mobile-menu-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();