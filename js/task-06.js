const validationInput = document.getElementById("validation-input"); 
const dataLength = parseInt(validationInput.getAttribute("data-length")); 

const checkInputValidity = () => {
  const inputLength = validationInput.value.length;

  if (inputLength === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
};

validationInput.addEventListener("blur", checkInputValidity);
