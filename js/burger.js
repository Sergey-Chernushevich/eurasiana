"use strict";

var burgerButton = document.getElementById("burgerBtn");
var closeBnt = document.getElementById("closeBurgerBtn");
var burgerNavigationWrapper = document.getElementById("burgerWrapper");
var wrapper = document.getElementById("wrapper");
var infoBtn = document.getElementById("burger-info-button");
var burgerNavigation = document.querySelectorAll(".burger-navigationItem");
var burgerLogo = document.querySelector(".burgerLogo");
function showBurger() {
  burgerNavigationWrapper.classList.toggle("active");
  document.body.style.overflow = "hidden";
  closeBnt.classList.add("show");
  infoBtn.classList.add("show");
  burgerLogo.classList.add("show");
  burgerNavigation.forEach(function (el) {
    el.classList.add("show");
  });
}
function hideBurger() {
  burgerNavigationWrapper.classList.toggle("active");
  document.body.style.overflow = "visible";
  closeBnt.classList.remove("show");
  infoBtn.classList.remove("show");
  burgerLogo.classList.remove("show");
  burgerNavigation.forEach(function (el) {
    el.classList.remove("show");
  });
}
burgerButton.addEventListener("click", function () {
  showBurger();
});
closeBnt.addEventListener("click", function () {
  hideBurger();
});
burgerNavigation.forEach(function (item) {
  item.addEventListener("click", function () {
    hideBurger();
  });
});
infoBtn.addEventListener("click", function (e) {
  // e.preventDefault();
  hideBurger();
});