"use strict";

var header = document.querySelector(".header");
var welcomeInfo = document.querySelector(".welcome-info");
var welcomeImg = document.querySelector(".welcome-img ");
var aboutImg = document.querySelector(".about-img");
var aboutInfo = document.querySelector(".about-info");
var consultancyBlock1Img = document.querySelector(".consultancy-block1-img");
var consultancyBlock1Info = document.querySelector(".consultancy-block1-info");
var elements = document.querySelectorAll(".anim");
var offset = window.innerHeight;
function showElement(element) {
  element.classList.add("show");
}
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
window.addEventListener("load", function () {
  elements.forEach(function (el) {
    var position = el.getBoundingClientRect().top;
    if (position - offset < 0) {
      showElement(el);
    }
  });
});
function handleScroll() {
  var elements = document.querySelectorAll(".anim");
  for (var i = 0; i < elements.length; i++) {
    var position = elements[i].getBoundingClientRect().top;
    if (position - offset < 0) {
      elements[i].classList.add("show");
    } else {
      elements[i].classList.remove("show");
    }
  }
}
window.addEventListener("scroll", handleScroll);
addEventListener("resize", handleScroll);