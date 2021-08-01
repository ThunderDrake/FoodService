document.addEventListener('DOMContentLoaded', ()=> {
  window.addEventListener('scroll', ()=> {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('section[data-scroll]').forEach((el, i) => {
      if(el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
        document.querySelectorAll('.header__nav .header__item').forEach(el => {
          if (el.classList.contains('header__item--active')) {
            el.classList.remove('header__item--active');
          }
        });

        document.querySelectorAll('.header__nav li')[i].classList.add('header__item--active');
      }
    });
  });

  const links = document.querySelectorAll('.header__link');

  links.forEach(el => {
    el.addEventListener('click', (e)=>{
      e.preventDefault();

      const sectionID = e.target.getAttribute('href').substr(1);
      const sectionPosition = document.getElementById(sectionID).offsetTop;
      
      window.scrollTo({
        top: sectionPosition - 150,
        behavior: 'smooth'
      });
    });
  });
});