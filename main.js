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
  .then((res) => {
    if(res.ok){
      alert("Thank You for contacting me.")
    }else{
      console.log("Not Successful")
    }
  })
  .then(() => window.location='index.html' )
  .catch((err) => console.log(err.message))

});

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
navigator.getBattery()
.then( e => {
  console.log(e.charging)
  console.log(e.level * 100)
})
let online = () => {
  console.log("online")
}
let offline = () => {
  console.log("offline")
}


  window.addEventListener("online", () => {
    online()
  })
  window.addEventListener("offline", () => {
    offline()
  })








window.addEventListener("DOMContentLoaded", async () => {
  let end = new URL('https://api.ipify.org')
  let res = await fetch(end)
  let data = await res.text()
  const ip =  data;
  console.log(ip)
  let end1 = new URL('https://ipapi.co/'+ip+'/json/')
  let res1 = await fetch(end1)
  let data1 = await res1.json()
  console.log(data1.city)
  console.log(data1.country)
  console.log(data1.country_calling_code)
  console.log(data1.country_capital)
  console.log(data1.country_code)
  console.log(data1.country_name)
  console.log(data1.latitude)
  console.log(data1.longitude)
  console.log(data1.org)
  console.log(data1.postal)
  console.log(data1.region)
  console.log(data1.utc_offset)


})


