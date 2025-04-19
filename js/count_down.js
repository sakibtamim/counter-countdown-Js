// var countDownDate = new Date("Apr 23, 2025 00:00:00").getTime();

// var x = setInterval(function () {
//   var now = new Date().getTime();

//   var distance = countDownDate - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));

//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("demo1").innerHTML = days + "d ";
//   document.getElementById("demo2").innerHTML = hours + "h ";
//   document.getElementById("demo3").innerHTML = minutes + "m ";
//   document.getElementById("demo4").innerHTML = seconds + "s ";

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo1").innerHTML = "EXPIRED";
//   }
// }, 1000);

let countDownDate = new Date("Apr 23 2025 00:00:00").getTime();

function dateCountDown() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#demo1").innerHTML = days + "d";
  document.querySelector("#demo2").innerHTML = hours + "h";
  document.querySelector("#demo3").innerHTML = mins + "m";
  document.querySelector("#demo4").innerHTML = secs + "s";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#demo1").innerHTML = "expired";
    document.querySelector("#demo2").innerHTML = "expired";
    document.querySelector("#demo3").innerHTML = "expired";
    document.querySelector("#demo4").innerHTML = "expired";
  }
}
let x = setInterval(() => {
  dateCountDown();
}, 1000);
