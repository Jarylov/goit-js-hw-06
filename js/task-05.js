const nameInput = document.getElementById("name-input"); 
const nameOutput = document.getElementById("name-output");

const updateNameOutput = () => {
  const inputText = nameInput.value; 

  if (inputText.trim() !== "") {
    nameOutput.textContent = inputText;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", updateNameOutput);

getRandomHexColor