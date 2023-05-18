const loginForm = document.querySelector('.login-form');
const handleSubmit = (event) => {
  event.preventDefault(); 

  const { elements } = event.target;
    
  const isFormValid = [...elements].every((element) => {
    return element.value.trim() !== ''; 
  });

  if (!isFormValid) {
    alert('All fields must be filled in.');
    return;
  }

  const formData = {};

  [...elements].forEach((element) => {
    if (element.name) {
      formData[element.name] = element.value;
    }
  });

  console.log(formData);
  loginForm.reset();
};

loginForm.addEventListener('submit', handleSubmit);

