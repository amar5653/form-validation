var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("name");

  if (name.value.length == 0) {
    nameError.innerHTML = "*Name is required!";
    return false;
  } else if (!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "*Enter full name!";
    return false;
  } else {
    nameError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    return true;
  }
}

function validatePhone() {
  var phone = document.getElementById("phoneNumber");

  if (phoneNumber.value.length == 0) {
    phoneError.innerHTML = "*Phone is required!";
    return false;
  } else if (!phone.value.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "*Atleast 10 Digits!";
    return false;
  } else {
    phoneError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    return true;
  }
}

function validateEmail() {
  var email = document.getElementById("email");

  if (email.value.length == 0) {
    emailError.innerHTML = "Email required!";
    return false;
  } else if (
    !email.value.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Invalid Email!";
    return false;
  } else {
    emailError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    return true;
  }
}

function validateMessage() {
    var message = document.getElementById("message");
    var left = 30 - message;
    if(message.value.length < 30) {
        messageError.innerHTML = left + "more characters left!";
        return false;
    }
    else {
        messageError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
    }
}

function validateForm() {
    if(!validateEmail || !validateMessage || !validateName || !validatePhone) {
        submitError.innerHTML = "please fill form!";
        submitError.style.display = "block";
        setTimeout((function(){
            submitError.style.display = "none";
        }),3000);
        return false;
    }
  
}