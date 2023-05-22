const loginForm = document
  .querySelector('.login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    if (emailInput.value === '' || passwordInput.value === '') {
      alert('All fields must be filled in.');
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      console.log(formData);

      this.reset();
    }
  });
