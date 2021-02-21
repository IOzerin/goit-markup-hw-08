(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobile-menu-portfolio-open]'),
    closeModalBtn: document.querySelector('[mobile-menu-portfolio-close]'),
    modal: document.querySelector('[mobile-menu-portfolio-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();