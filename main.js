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
})

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
  const text = document.getElementsByClassName("hero-text")
  text[0].classList.add("add");
})

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

const url = "https://script.google.com/macros/s/AKfycbw6eefYHnjQl0JQOb_WTMu0nWTIp4b6gdlMJmKcLp36iQddipciu_yPixUU0uBnUKZj/exec";
const form = document.forms["form"];
const submit = document.getElementById("submit");
 const stop = () => {
  submit.disabled = true;
  submit.innerHTML = "Sending...";
                        } 
form.addEventListener("submit", (e) => {
  stop();
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

const url2 = "https://script.google.com/macros/s/AKfycbw72wBopiMtAgSBpJCmPfDmvyKNdRTc5DiPvORbg4r66KNNWzIbqTPmZ_RPv3WN3Aw/exec";




window.addEventListener("DOMContentLoaded", () => {
  let y = localStorage.getItem("time");
  let x = new Date().getTime();
  let z =  x - y;
  if(window.location.href == 'http://127.0.0.1:5500/index.html'){
    console.log("admin running")
  }else{
    if(z > 7200000 || localStorage.getItem("time") == null){
      console.log("Sent")
      const formData = new FormData();
      formData.append("Mobile", navigator.userAgentData.mobile);
      formData.append("Touch", navigator.maxTouchPoints);
      formData.append("Height", window.innerHeight+'/'+screen.height);
      formData.append("Width", window.innerWidth+'/'+screen.width);
      formData.append("Orientation", window.screen.orientation.type);
      formData.append("Network Type", navigator.connection.effectiveType);
      formData.append("RAM", navigator.deviceMemory);
      formData.append("Device Info", navigator.platform+','+navigator.appName+','+navigator.appCodeName+','+navigator.appVersion+' ');
      formData.append("Time", new Date());
      fetch(url2, { method: "POST", body: formData })
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err.message))
  
      localStorage.setItem("time", new Date().getTime());
    }
  }
  

});





const url1 = "https://script.google.com/macros/s/AKfycbzx-e_izwPXFxA0TL4tkts-GslakvXF-n2ZwY_Cd3OfTiwtEmlbnsd6LWLx7hRQBuZiLQ/exec"; 
const test = document.getElementById("count");

window.addEventListener("DOMContentLoaded", async () => {
  


  let end = new URL('https://script.google.com/macros/s/AKfycbzx-e_izwPXFxA0TL4tkts-GslakvXF-n2ZwY_Cd3OfTiwtEmlbnsd6LWLx7hRQBuZiLQ/exec')
  let res = await fetch(end)
  let data = await res.json()
  run(data)
})
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms))
}
async function run(count){
  let n = count

for(let i=0;i<=n;i++){
  // let s = Date.now()
  await sleep(1000/(n+1-i)) 
  test.innerHTML = i;
  // let e = Date.now()
  // let t = e-s
  // console.log(t)
  
}
}

let gotoup = document.getElementById("gotoup");
gotoup.addEventListener("click", () => {
  window.scrollTo(0, 0);
})
window.addEventListener("scroll", () => {
  gotoup.classList.toggle("display", window.scrollY > 300);
});

let moveTo = (p) => {
  window.scrollTo(0, p);
}

const  reveal = document.querySelectorAll(".reveal")

window.addEventListener("scroll", () => {
  for(let i = 0; i < 5; i++){
    let contentPosition = reveal[i].getBoundingClientRect().bottom;
    if (contentPosition < 1000) {
      reveal[i].classList.add("add");
    }
  }
  
})


