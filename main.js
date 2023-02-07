document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("#menu").classList.toggle("cross");
  document.querySelector(".nav").classList.toggle("change");
});
let slides = document.querySelectorAll(".slide");
let counter = 0;
slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});

let slideImage = () => {
  slides.forEach((slide) => {
    console.log(counter);
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
let btnPrev = document.querySelector(".fa-angle-right");
let btnNext = document.querySelector(".fa-angle-left");

btnNext.addEventListener("click", () => {
  counter++;
  if (counter < slides.length) {
    slideImage();
  } else {
    counter = slides.length - 1;
  }
});
btnPrev.addEventListener("click", () => {
  counter--;
  if (counter > -1) {
    slideImage();
  } else {
    counter = 0;
  }
});
