document.addEventListener('DOMContentLoaded', ()=> {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expended', true);
        control.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expended', false);
        control.setAttribute('aria-hidden', true);
      }
    });
  });
});