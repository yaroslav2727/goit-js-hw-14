const spanEl = document.querySelector("#name-output");
const inputEl = document.querySelector("#name-input");

const DEFAULT = spanEl.textContent;

inputEl.addEventListener("input", () => {
  if (inputEl.value) {
    spanEl.textContent = inputEl.value;
  } else {
    spanEl.textContent = DEFAULT;
  }
});
