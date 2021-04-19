//main swiper
const mainSwiper = new Swiper('.swiper-container-main', {
    allowTouchMove: false,
    direction: 'horizontal',
    loop: true,
    speed: 1700,
    autoplay:{
      delay: 1500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
})

// stop and start autoplay
const mainBanner = document.getElementById("main-banner");
mainBanner.addEventListener("mouseover", ()=> mainSwiper.autoplay.stop())
mainBanner.addEventListener("mouseleave", ()=> mainSwiper.autoplay.start())



//sells swiper
const swiperNews = new Swiper('.swiper-container-news', {
  direction: 'horizontal',
  resizeObserver: true,
  observeParents: true,
  observer: true,
  allowTouchMove: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});


