const solutionsSwiper = new Swiper(".solutions-swiper", {
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  autoplayDisableOnInteraction: 1,
});
solutionsSwiper.on("click", function () {
  solutionsSwiper.autoplay.stop();
});

document.querySelector(".solutions-prev").addEventListener("click", () => {
  solutionsSwiper.autoplay.stop();
});
document.querySelector(".solutions-next").addEventListener("click", () => {
  solutionsSwiper.autoplay.stop();
});

const solutions = document.getElementById("solutions");
window.addEventListener("scroll", () => {
  let position = solutions.getBoundingClientRect().top;
  if (position <= 0) {
    solutionsSwiper.autoplay.stop();
  } else {
    solutionsSwiper.autoplay.start();
  }
});
