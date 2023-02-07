const timer = document.getElementById("timer");

function startTimer() {
  if (+timer.textContent === 0) {
    window.alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  } else {
    timer.textContent = +timer.textContent - 1;
  }
}

let timerId = setInterval(startTimer, 1000);


// const timer = document.getElementById("timer");
// const countDownDate = new Date().setSeconds(new Date().getSeconds() + Number(timer.textContent));

// function startTimer() {
//   const currentDate = new Date().getTime();
//   const countDown = new Date(countDownDate).getTime();
//   const diff = (countDown - currentDate) / 1000;

//   if (diff < 0) {
//     window.alert("Вы победили в конкурсе!");
//     clearInterval(timerId);
//     //window.location = "https://www.google.ru";
//   } else {
//     let hh = String(Math.floor((diff % (60 * 60 * 24)) / (60 * 60))).padStart(2, "0");
//     let mm = String(Math.floor((diff % (60 * 60)) / 60)).padStart(2, "0");
//     let ss = String(Math.floor(diff % 60)).padStart(2, "0");

//     timer.textContent = hh + ":" + mm + ":" + ss;
//   }  
// }

// startTimer();
// let timerId = setInterval(startTimer, 1000);