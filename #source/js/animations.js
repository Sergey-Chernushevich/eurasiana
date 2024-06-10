const header = document.querySelector(".header");
const welcomeInfo = document.querySelector(".welcome-info");
const welcomeImg = document.querySelector(".welcome-img ");
const aboutImg = document.querySelector(".about-img");
const aboutInfo = document.querySelector(".about-info");
const consultancyBlock1Img = document.querySelector(".consultancy-block1-img");
const consultancyBlock1Info = document.querySelector(
  ".consultancy-block1-info"
);
let elements = document.querySelectorAll(".anim");

const offset = window.innerHeight;

function showElement(element) {
  element.classList.add("show");
}

function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("load", () => {
  elements.forEach((el) => {
    let position = el.getBoundingClientRect().top;
    if (position - offset < 0) {
      showElement(el);
    }
  });
});

function handleScroll() {
  let elements = document.querySelectorAll(".anim");

  for (let i = 0; i < elements.length; i++) {
    let position = elements[i].getBoundingClientRect().top;
    if (position - offset < 0) {
      elements[i].classList.add("show");
    } else {
      elements[i].classList.remove("show");
    }
  }
}
window.addEventListener("scroll", handleScroll);
addEventListener("resize", handleScroll);
