document.getElementById('aboutForm').addEventListener('submit', function(event) {
  if (!validateForm()) {
      event.preventDefault();
      document.getElementById('error').style.display = 'block';
  }
});

function validateForm() {
  let nameInput = document.getElementById('name');
  let emailInput = document.getElementById('email');
  let numberInput = document.getElementById('number');
  let ageInput = document.getElementById('age');


  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let number = numberInput.value.trim();
  let age = ageInput.value.trim();

  let isValid = true;
  
  if (age === '' | age > 99) {
    isValid = false;
    ageInput.classList.add('invalid');
  } else {
    ageInput.classList.remove('invalid');
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
  

  let numberPattern = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  if (!number.match(numberPattern)) {
      isValid = false;
      numberInput.classList.add('invalid');
  } else {
    numberInput.classList.remove('invalid');
  }

  return isValid;
}