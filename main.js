window.addEventListener('touchmove', (e) => {
  console.log(e);
},{passive: true});
document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("#menu").classList.toggle("cross");
  document.querySelector(".nav").classList.toggle("change");
});


