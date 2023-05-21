let counterValue = 0; 
const valueSpan = document.getElementById("value");

const updateCounterUI = () => {
  valueSpan.textContent = counterValue;
};

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener("click", () => {
  counterValue -= 1; 
  updateCounterUI(); 
});

incrementButton.addEventListener("click", () => {
  counterValue += 1; 
  updateCounterUI();
});
updateCounterUI();
