let counter = document.getElementById("counter");
let seconds = 60;

function countdown() {
  function tick() {
    seconds--;
    counter.innerHTML = String(seconds);
    setTimeout(tick, 1000);
    if (seconds <= 0) {
      counter.innerHTML = "-";
    }
  }
  tick();
}

window.addEventListener("DOMContentLoaded", () => {
  countdown();
});

function focusNext(currentInput, event) {
  let maxLength = parseInt(currentInput.getAttribute("maxlength"));
  if (currentInput.value.length >= maxLength) {
    let nextInput = currentInput.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  }
}
