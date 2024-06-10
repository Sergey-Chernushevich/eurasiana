const burgerButton = document.getElementById("burgerBtn");
const closeBnt = document.getElementById("closeBurgerBtn");
const burgerNavigationWrapper = document.getElementById("burgerWrapper");
const wrapper = document.getElementById("wrapper");
const infoBtn = document.getElementById("burger-info-button");
const burgerNavigation = document.querySelectorAll(".burger-navigationItem");
const burgerLogo = document.querySelector(".burgerLogo");

function showBurger() {
  burgerNavigationWrapper.classList.toggle("active");
  document.body.style.overflow = "hidden";
  closeBnt.classList.add("show");
  infoBtn.classList.add("show");
  burgerLogo.classList.add("show");
  burgerNavigation.forEach((el) => {
    el.classList.add("show");
  });
}

function hideBurger() {
  burgerNavigationWrapper.classList.toggle("active");
  document.body.style.overflow = "visible";
  closeBnt.classList.remove("show");
  infoBtn.classList.remove("show");
  burgerLogo.classList.remove("show");
  burgerNavigation.forEach((el) => {
    el.classList.remove("show");
  });
}

burgerButton.addEventListener("click", function () {
  showBurger();
});

closeBnt.addEventListener("click", function () {
  hideBurger();
});

burgerNavigation.forEach((item) => {
  item.addEventListener("click", function () {
    hideBurger();
  });
});

infoBtn.addEventListener("click", function (e) {
  // e.preventDefault();
  hideBurger();
});
