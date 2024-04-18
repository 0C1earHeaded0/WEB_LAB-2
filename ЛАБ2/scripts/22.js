document.getElementById('registration').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
        document.getElementById('error').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'none';
        document.getElementById('registration').reset();
        alert("Вы успешно зарегистрировались!");
    }
  });
  
  function validateForm() {
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let loginInput = document.getElementById('login');
    let passwordInput = document.getElementById('password');
    let passwordRepeatInput = document.getElementById('passwordRepeat');
  
  
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let login = loginInput.value.trim();
    let pass = passwordInput.value.trim();
    let passRepeat = passwordRepeatInput.value.trim();
  
    let isValid = true;
    
    if (login === '') {
      isValid = false;
      loginInput.classList.add('invalid');
    } else {
      loginInput.classList.remove('invalid');
    }
  
    if (name === '') {
        isValid = false;
        nameInput.classList.add('invalid');
    } else {
      nameInput.classList.remove('invalid');
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        isValid = false;
        emailInput.classList.add('invalid');
    } else {
      emailInput.classList.remove('invalid');
    }

    let passwordRegExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g;
    if (!pass.match(passwordRegExp) || (pass !== passRepeat)) {
        isValid = false;
        passwordInput.classList.add('invalid');
        passwordRepeatInput.classList.add('invalid');
    } else {
        passwordInput.classList.remove('invalid');
        passwordRepeatInput.classList.remove('invalid');
    }
  
    return isValid;
  }