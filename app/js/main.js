
//Burger

const burgerBtn = document.querySelector('.burger__btn'),
  menu = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  document.body.classList.toggle('lock');
});

menu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    menu.classList.remove('active');
    burgerBtn.classList.remove('active');
    document.body.classList.remove('lock');
  }

});

// End Burger


// Slider swiper

const slider = document.querySelector('.slider__testimonial');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 70,
  slideClass: 'slide',
  wrapperClass: 'slider__wrap',

  slideToClickedSlide: true,

  loop: true,

  centeredSlides: true,

  // centeredSlidesBounds: true,

  initialSlide: 2,

  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  pagination: {
    el: '.slider-pagination',
    type: 'fraction',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  breakpoints: {
    767: {
      slidesPerView: '1.9',
    }
  }

});

// End Slider swiper









//# sourceMappingURL=main.js.map
