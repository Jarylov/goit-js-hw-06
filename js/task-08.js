const loginForm = document
  .querySelector('.login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    var emailInput = document.querySelector('input[name="email"]');
    var passwordInput = document.querySelector('input[name="password"]');

    if (emailInput.value === '' || passwordInput.value === '') {
      alert('All fields must be filled in.');
    } else {
      var formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      console.log(formData);

      this.reset();
    }
  });
