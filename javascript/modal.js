function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.getElementsByClassName('close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE MODAL EVENT
  modalCloseBtn[0].addEventListener('click', closeModal);

// Close modal form with the button cross (modal disappears on click)
function closeModal() {
  modalbg.style.display="none";
}

// When the user clicks anywhere outside of the modal, (close it)
window.onclick = function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
}

// DOM ELEMENTS - SAVE FOR EACH ELEMENT IN HTML
const form = document.getElementById('reserve');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last')
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const tournamentCounts = document.querySelector("input[type=number]");
const locationsRadioBtn = document.querySelector("input[name='location']");
const termsConditionsCheckbox = document.querySelector("input[name='conditions']");
const submitForm = document.getElementById('.btn-submit');
const thankYouMessage = document.querySelector('.merci');

// REGEX
// Set a REGEX: Email address must start with a string followed by '@', followed by another string
const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
// Set a REGEX: Name 
const nameRegex = /^[a-zA-Z-\s]+$/;
// Set a REGEX: Birthdate 
const birthRegex = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;


// SET UP WITH "SETATTRIBUTE" SHOW ERROR MESSAGE
function showError(elt) {
  elt.setAttribute('data-error-message-visible', true);
}

// SET UP WITH "SETATTRIBUTE" HIDE ERROR MESSAGE
function hideError(elt) {
  elt.setAttribute('data-error-message-visible', false)
}

// FIRST NAME: Fetching with Event listener for the element first name
firstName.addEventListener('input', firstNameValidation); 

  // Check if first name strictly superior is between 2 and 20, and check the REGEX condition
  function firstNameValidation () {
    let parent = firstName.closest('div');
    showError(parent);
    if ((firstName.value.trim().length < 2) || nameRegex.test(firstName.value) == false) {
      return false;
    }
    if (firstName.value.length > 20) {
    return false;
    }
    hideError(parent);
    return false;
  }

// LAST NAME: Fetching with Event listener for the element last name
lastName.addEventListener('input', lastNameValidation); 

  // Check if last name is empty or not with message + length must be strictly superior to 2
  function firstNameValidation () {
    let parent = firstName.closest('div');
    showError(parent);
    if ((firstName.value.trim().length < 2) || nameRegex.test(firstName.value) == false) {
      return false;
    }
    if (firstName.value.length > 20) {
    return false;
    }
    hideError(parent);
    return false;
  }

// EMAIL ADDRESS: Fetching with Event listener for the element email
email.addEventListener('input', emailValidation);

  // Check if Email is not empty + must be following the validation REGEX we have created above (format ...@...)
  data.email === "" || !data.email.match(emailRegex) ? error.email = true : null;

 








