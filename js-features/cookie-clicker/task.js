const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let firstClick;

function clicker() {
  counter.textContent = Number(counter.textContent) + 1;

  if (Number(counter.textContent) % 2 !== 0) {
    image.width = image.width * 1.5;
  } else {
    image.width = image.width / 1.5;
  }

  if (Number(counter.textContent) === 1) {
    firstClick = new Date().getTime(); //время 1го клика
  } else {
    const lastClick = new Date().getTime(); //время последнго клика
    const totalTime = (lastClick - firstClick) / 1000; // общее время кликанья в сек
    speed.textContent = (Number(counter.textContent) / totalTime).toFixed(2);
  }
}

image.onclick = clicker;
