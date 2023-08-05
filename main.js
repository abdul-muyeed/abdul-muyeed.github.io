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

const url1 = "https://script.google.com/macros/s/AKfycbzx-e_izwPXFxA0TL4tkts-GslakvXF-n2ZwY_Cd3OfTiwtEmlbnsd6LWLx7hRQBuZiLQ/exec"; 
const test = document.getElementById("count");

window.addEventListener("DOMContentLoaded", async function run(){
  


  let end = new URL('https://script.google.com/macros/s/AKfycbzx-e_izwPXFxA0TL4tkts-GslakvXF-n2ZwY_Cd3OfTiwtEmlbnsd6LWLx7hRQBuZiLQ/exec')
  let res = await fetch(end)
  let data = await res.json()
  console.log(data)
  run1(data)
})
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms))
}
async function run1(count){
  let n= count

for(let i=0;i<=n;i++){
  // let s = Date.now()
  await sleep(1000/(n+1-i)) 
  test.innerHTML = i;
  // let e = Date.now()
  // let t = e-s
  // console.log(t)
  
}
}
console.log(navigator.appCodeName)
console.log(navigator.userAgentData.mobile)
console.log(navigator.appName)
console.log(navigator.appVersion)
console.log(navigator.connection.effectiveType)
console.log(navigator.connection.rtt)
console.log(navigator.connection.downlink)
console.log(navigator.connection.saveData)
console.log(navigator.cookieEnabled)
console.log(navigator.deviceMemory)
console.log(navigator.platform)
console.log(navigator.javaEnabled())
console.log(navigator.hardwareConcurrency)
console.log(navigator.maxTouchPoints)
console.log(window.innerHeight)
console.log(window.innerWidth)
console.log(screen.height)
console.log(screen.width)
console.log(window.devicePixelRatio)


console.log(navigator.maxTouchPoints)


