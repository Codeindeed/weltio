import { defaultProps, targetElements } from "./scrollconfig.js";
let pointer = document.querySelector(".language__down");
let dropDown = document.querySelector(".language__drop--down");
let language = document.querySelector(".language");
let arrowDown = document.querySelector(".fa");
let m = document.getElementsByClassName("svg");
const { body } = document;
const nav = document.querySelector(".navbar");
const div = document.querySelector(".loader");
const card = document.querySelector(".cards");
const cards = document.querySelectorAll(".cards__box");
const overview = document.querySelector(".invest__overview");
const buttons = document.querySelectorAll(".button");
const coins = document.querySelectorAll(".idcrypto__cards");
const menubars = document.querySelector("#menu-bars");
const mobileMenu = document.querySelector(".mobile__menu ");
const navbarlist = document.querySelector(".navbar__list");
const scrollinner = document.querySelector(".card__container");
const positionInner = document.querySelector(".slider__inner");
const wrapper = document.querySelector(".invest__cards");
const el = document.querySelector(".scroll");
let slides = Array.from(cards);
console.log(body);
const ball = document.querySelector(".ball");
let lastHeight = window.scrollY;

window.onload = function () {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".svg path",
      fill: "#fff",
      delay: (el, i) => 100 * i,
      duration: 1000,
    })
    .add({
      targets: ".svg #dot",
      opacity: 0,
      backgroundColor: "#fff",
      delay: 0,
    })
    .add({
      targets: ".loader__dot",
      backgroundColor: "#fff",
      translateY: [-50, 0],
      delay: 1000,
      duration: 1000,
    })
    .add({
      targets: ".loader__dot",
      scale: [10, 400],
      delay: 0,
      duration: 1000,
    });
  setTimeout(() => {
    div.style.display = "none";
  }, 5000);
};
window.addEventListener("scroll", () => {
  if (lastHeight > window.scrollY) {
    nav.classList.add("fixednav");
  } else {
    nav.classList.remove("fixednav");
  }
  lastHeight = window.scrollY;
});
pointer.addEventListener("mouseenter", () => {
  console.log(arrowDown, language);
  dropDown.classList.toggle("hidden");
  arrowDown.classList.toggle("rotate");
});
pointer.addEventListener("mouseleave", () => {
  console.log(arrowDown, language);
  dropDown.classList.toggle("hidden");
  arrowDown.classList.toggle("rotate");
});
function initScrollReveal(Elements, Props) {
  if (!targetElements.length) return;
  ScrollReveal({ reset: false });
  console.log(Elements);
  Elements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, Props, animation));
  });
}
window.addEventListener("mousemove", (e) => {
  ball.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});
function toggle() {
  menubars.classList.toggle("change");
  mobileMenu.classList.toggle("hide");
  language.classList.toggle("hidden");
  navbarlist.classList.toggle("hidden");
  nav.classList.toggle("hidden");
}
menubars.addEventListener("click", toggle);

function animate() {
  var tween3 = new TimelineMax();
  tween3.add([
    TweenMax.to(coins, 1, {
      y: -100,
    }),
  ]);
  var tween4 = new TimelineMax();
  tween4.add([
    TweenMax.to(".header__left--figure", 1, {
      y: -100,
    }),
  ]);
  let control = new ScrollMagic.Controller();
  let scene3 = new ScrollMagic.Scene({
    triggerElement: ".idcrypto__contents",
    triggerHook: 0.5,
    duration: 1000,
  })
    .setTween(tween3)
    .addTo(control);
  let scene4 = new ScrollMagic.Scene({
    triggerElement: ".header",
    triggerHook: 0.1,
    duration: 1000,
  })
    .setTween(tween4)
    .addTo(control);

  if (window.innerWidth >= 1250) {
    const controller = new ScrollMagic.Controller();
    var tween = new TimelineMax();
    tween.add([
      TweenMax.to(slides[0], 1, {
        x: 0,
        y: -10,
        opacity: 0.39,
        scale: 0.95,
      }),
      TweenMax.fromTo(
        slides[1],
        1,
        { y: 100 },
        { y: 0, opacity: 0.9, delay: 2 }
      ),
      TweenMax.fromTo(
        slides[2],
        1,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, delay: 3 }
      ),
    ]);
    var tween2 = new TimelineMax();
    tween2.add([
      TweenMax.to(overview, 1, { x: -650, y: -150 }),
      TweenMax.to(".main__container", 1, {
        backgroundColor: " #262333",
        color: "rgb(222, 229, 251)",
      }),
      TweenMax.to(".cardbox", 1, {
        color: "rgb(222, 229, 251)",
      }),
      TweenMax.to(".main__container", 1, {
        delay: 1,
        backgroundColor: "#f7f8f2",
        color: "rgb(51, 51, 51)",
      }),
      TweenMax.to(".cardbox", 1, {
        delay: 1,
        color: "rgb(51, 51, 51)",
      }),
    ]);

    let Scene = new ScrollMagic.Scene({
      triggerElement: ".cards",
      triggerHook: 0,
      duration: 3000,
    })
      .setPin(".cards")
      .setTween(tween)
      .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
      triggerElement: overview,
      triggerHook: 0,
      duration: 3000,
    })
      .setPin(overview)
      .setTween(tween2)
      .addTo(controller);
  }
}

animate();
initScrollReveal(targetElements, defaultProps);
