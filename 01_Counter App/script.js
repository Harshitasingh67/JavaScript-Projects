const subtract_button = document.querySelector(".subtract_button");

const addition_button = document.querySelector(".addition_button");

const output = document.querySelector(".output");

const increment_input = document.querySelector(".increment_input");

const decrement_input = document.querySelector(".decrement_input");

const reset_button = document.querySelector(".reset_button");

const increment_button = document.querySelector(".increment_button");

const decrement_button = document.querySelector(".decrement_button");

let currentValue = 0;

//for decrement button--

subtract_button.addEventListener("click", () => {
  currentValue = currentValue - 1;
  output.innerText = currentValue;
});

//for increment button--

addition_button.addEventListener("click", () => {
  currentValue = currentValue + 1;
  output.innerText = currentValue;
});

//for incrementBy button--

increment_button.addEventListener("click", () => {
  let value = Number(increment_input.value);
  if (value) {
    currentValue = currentValue + value;
    output.innerText = currentValue;
  }
});

//for decrementBy button--

decrement_button.addEventListener("click", () => {
  let value = Number(decrement_input.value);
  if (value) {
    currentValue = currentValue - value;
    output.innerText = currentValue;
  }
});

//for reset button--

reset_button.addEventListener("click", () => {
  currentValue = 0;
  output.innerText = 0;
  increment_input.value = 0;
  decrement_input.value = 0;
});
