let counterValue = 0;
const counterEl = document.querySelector("#value");

document.querySelector('[data-action="decrement"]').addEventListener("click", onDecrement);
document.querySelector('[data-action="increment"]').addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  updateCounter();
}

function onIncrement() {
  counterValue += 1;
  updateCounter();
}

function updateCounter() {
  counterEl.textContent = counterValue;
}
