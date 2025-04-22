const img = document.getElementById("notung");
const btntung = document.getElementById("switch");
const btnrenshu = document.getElementById("renshu");
const btnsnaur = document.getElementById("snaur");

const notung = "image/1.png";
const tung = "image/2.png";

const tungaudio = new Audio("audio/tung.wav");
const renshu = new Audio("audio/renshu.wav");
renshu.loop = false;

let isplaying = false;

btntung.addEventListener("mousedown", () => {
  img.src = tung;
  tungaudio.currentTime = 0;
  tungaudio.play();
});
btntung.addEventListener("mouseup", () => {
  img.src = notung;
});

btnsnaur.addEventListener("click", () => {
  window.open("https://space.bilibili.com/435083", "_blank");
});

btnrenshu.addEventListener("click", () => {
  if (!isplaying) {
    renshu.play();
  } else {
    renshu.pause();
  }
  isplaying = !isplaying;
});

console.log("JS Loaded");
