window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky-header", window.scrollY > 0);
});
let dtext = document.querySelector(".d-text");
document.addEventListener("DOMContentLoaded", function () {
  var dataText = ["YouTuber", "Web Developer", "Freelancer", "App Developer"];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      dtext.innerHTML = text.substring(0, i + 1);

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 200);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

function opentab(tabname, tabtitle) {
  tabname = document.getElementById(tabname);
  tabtitle = document.getElementById(tabtitle);
  let tabtitles = document.getElementsByClassName("tab-name");
  let tabnames = document.getElementsByClassName("tab-contain");
  for (let i = 0; i < tabtitles.length; i++) {
    tabtitles[i].classList.remove("active");
    tabnames[i].classList.remove("active");
  }
  tabname.classList.add("active");
  tabtitle.classList.add("active");
}
const time = document.getElementById("time");
time.value = new Date();

const url = "https://script.google.com/macros/s/AKfycbxy3NQWWc-tMdUsBgySQl1_3hFi5lyiNgCF9G-7PebuTUqeboe-QTPwrUMWTTpPAF4cWA/exec";
const form = document.forms["form"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url, { method: "POST", body: new FormData(form) })
  .then((res) => alert("Thanks for contacting me. I will get back to you soon."))
  .then(() => {window.location.href = "index.html";})
  .catch((err) => console.log("Error! " . err))

});