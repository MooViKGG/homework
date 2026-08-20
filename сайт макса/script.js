// Слайдер
(function () {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  const prevBtn = document.querySelector('.hero__arrow--prev');
  const nextBtn = document.querySelector('.hero__arrow--next');
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('hero__slide--active');
    dots[current].classList.remove('hero__dot--active');
    dots[current].setAttribute('aria-selected', 'false');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('hero__slide--active');
    dots[current].classList.add('hero__dot--active');
    dots[current].setAttribute('aria-selected', 'true');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    timer = setInterval(next, 5000);
  }

  function resetAutoplay() {
    clearInterval(timer);
    startAutoplay();
  }

  prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
  nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetAutoplay(); });
  });

  startAutoplay();
})();

// Мобильное меню
(function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  function setMenuOpen(isOpen) {
    nav.classList.toggle('nav--open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  }

  burger.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('nav--open'));
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
})();
