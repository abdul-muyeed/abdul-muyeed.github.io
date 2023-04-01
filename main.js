window.addEventListener('scroll', ()=> {
    const header = document.querySelector('header');
  header.classList.toggle('sticky-header', window.scrollY > 0);
});