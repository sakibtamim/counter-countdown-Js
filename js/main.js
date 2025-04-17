let counter = document.querySelector(".counter");
let count = 0;
function counterUp() {
  count++;
  if (count <= 10) {
    counter.innerHTML = count;
  }
}
setInterval(() => {
  counterUp();
}, 500);
