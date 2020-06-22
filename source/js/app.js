var mainNav =  document.querySelector(".main-nav");
mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--clsd");

var mainNavTogl = document.querySelector(".main-nav__togl");

mainNavTogl.addEventListener("click", function(evt) {
  mainNav.classList.toggle("main-nav--clsd");
})

var opinList = document.querySelector(".opins__list");
var opinDots = document.querySelectorAll(".opin-dots__item");
var actvOpinNum = 0;

for (var i = 0; i < opinDots.length; i++) {
  opinDots[i].addEventListener("click", function(evt) {
    var j = 0;
    while (opinDots[j] !== evt.target && j < opinDots.length) {
      j++;
    }
    opinDots[actvOpinNum].classList.remove("dot--actv");
    opinDots[j].classList.add("dot--actv");
    opinList.classList.remove("opins__list--goto" + (actvOpinNum + 1).toString());
    opinList.offsetWidth = opinList.offsetWidth;
    opinList.classList.add("opins__list--goto" + (j + 1).toString());
    actvOpinNum = j;
  })
}

var leftArrw = document.querySelector(".opins__arrw--left");

leftArrw.addEventListener("click", function(evt) {
  if (actvOpinNum > 0) {
    opinDots[actvOpinNum].classList.remove("dot--actv");
    opinDots[actvOpinNum - 1].classList.add("dot--actv");
    opinList.classList.remove("opins__list--goto" + (actvOpinNum + 1).toString());
    opinList.offsetWidth = opinList.offsetWidth;
    opinList.classList.add("opins__list--goto" + ((actvOpinNum + 1) - 1).toString());
    actvOpinNum--;
  }
})

var rghtArrw = document.querySelector(".opins__arrw--rght");

rghtArrw.addEventListener("click", function(evt) {
  if (actvOpinNum < opinDots.length - 1) {
    opinDots[actvOpinNum].classList.remove("dot--actv");
    opinDots[actvOpinNum + 1].classList.add("dot--actv");
    opinList.classList.remove("opins__list--goto" + (actvOpinNum + 1).toString());
    opinList.offsetWidth = opinList.offsetWidth;
    opinList.classList.add("opins__list--goto" + ((actvOpinNum + 1) + 1).toString());
    actvOpinNum++;
  }
})

var tarfList = document.querySelector(".tarfs__table");
var tarfDots = document.querySelectorAll(".tarf-dots__item");
var actvTarfNum = 1;

for (var i = 0; i < tarfDots.length; i++) {
  tarfDots[i].addEventListener("click", function(evt) {
    var j = 0;
    while (tarfDots[j] !== evt.target && j < tarfDots.length) {
      j++;
    }
    tarfDots[actvTarfNum].classList.remove("dot--actv");
    tarfDots[j].classList.add("dot--actv");
    tarfList.classList.remove("tarfs__table--goto" + (actvTarfNum + 1).toString());
    tarfList.offsetWidth = tarfList.offsetWidth;
    tarfList.classList.add("tarfs__table--goto" + (j + 1).toString());
    actvTarfNum = j;
  })
}
