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
const formSubmission = document.querySelector('form');
const form = document.getElementsByName('reserve');
const modalBody = document.querySelector('.modal-body');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const locationsRadioBtn = document.querySelectorAll("input[name='location']");
const tournamentCounts = document.querySelector("input[type=number]");
const termsConditionsCheckbox = document.querySelector("input[name='conditions']");
const submitForm = document.getElementById('.btn-submit');
const thankYouMessage = document.querySelector('.thanks');

// REGEX
// Set a REGEX: Email address must start with a string followed by '@', followed by another string
const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
// Set a REGEX: Name 
const nameRegex = /^[a-zA-Z-\s]+$/;
// Set a REGEX: Birthdate 
const birthRegex = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;


// SET UP WITH "SETATTRIBUTE" SHOW ERROR MESSAGE
function showErrorMessage(elt) {
  elt.setAttribute('data-error-visible', true);
}

// SET UP WITH "SETATTRIBUTE" HIDE ERROR MESSAGE
function hideErrorMessage(elt) {
  elt.setAttribute('data-error-visible', false);
}

// SUBMIT FORM: 
// Fetching with Event listener for the element submit
formSubmission.addEventListener('submit', submitForm);

// CREATE THE 'FERMER' BUTTON AFTER SUBMISSION WITH JAVASCRIPT
function closeButton () {
  let button = document.createElement("button");
  button.innerHTML = "Fermer";
  button.className = "btn-submit";
  modalBody.appendChild(button);
  button.onclick = function () {
    modalbg.style.display = "none";
  }
}

// Fetching with Event listener for the element submit
modalBody.addEventListener("submit", submitFormValidation);

// FUNCTION PREVENT BROWSER FROM CHANGING PAGE ONCLICK 
function submitFormValidation(elt){
  elt.preventDefault();
  thankYouMessage();
  closeButton();
}

  // FIRST NAME VALIDATION CHECK: 
  // Fetching with Event listener for the element first name
  firstName.addEventListener('input', firstNameValidation); 

    // Check if first name is strictly between 2 and 20, and check the REGEX condition
    function firstNameValidation () {
      let errorMsg = firstName.closest('.formData');
      showErrorMessage(errorMsg);
      if ((firstName.value.trim().length < 2) || nameRegex.test(firstName.value) == false || (firstName.value === "")) {
        return false;
      }
      if (firstName.value.length > 20) {
        return false;
      }
      hideErrorMessage(errorMsg);
        return false;
    }

  // LAST NAME VALIDATION CHECK: 
  // Fetching with Event listener for the element last name
  lastName.addEventListener('input', lastNameValidation); 

    // Check if last name is empty or not with message + length must be strictly superior to 2
    function lastNameValidation () {
      let errorMsg = lastName.closest('.formData');
      showErrorMessage(errorMsg);
      if ((lastName.value.trim().length < 2) || nameRegex.test(lastName.value) == false || (lastName.value === "")) {
        return false;
      }
      if (lastName.value.length > 20) {
        return false;
      }
      hideErrorMessage(errorMsg);
        return false;
    }

  // EMAIL ADDRESS VALIDATION CHECK: 
  // Fetching with Event listener for the element email
  email.addEventListener('input', emailValidation);

    // Check if Email is not empty + must be following the validation REGEX we have created above (format ...@...)
    function emailValidation () {
      let errorMsg = email.closest('.formData');
      showErrorMessage(errorMsg);
      if(emailRegex.test(reserve.email.value)) {
        return false;
      }
      hideErrorMessage(errorMsg);
        return true;
  }

  // BIRTHDATE VALIDATION CHECK:
  // Fetching with Event listener for the element birthdate
  birthDate.addEventListener('input', birthDateValidation); 

  // CONDITION: Date management for when user selects the dates + the current date
  const selectedBirthDate = new Date(data.birthDate);
  const currentDate = new Date(Date.now());

    // Check if birthdate is not empty + must be following the validation REGEX we have created above (format ...@...)
    function birthDateValidation () {
      let errorMsg = birthDate.closest('.formData');
      showErrorMessage(errorMsg);
      if (birthRegex.test(reserve.birthDate.value) || (selectedBirthDate > currentDate)) {
        return false;
      }
        hideErrorMessage(errorMsg);
        return true;
    }

  // TOURNAMENT NUMBER VALIDATION CHECK:
  // Fetching with Event listener for the number of tournaments
  tournamentCounts.addEventListener('input', tournamentCountsValidation);

    // Check if tournament counts is checked and validated
    function tournamentCountsValidation () {
      let errorMsg = tournamentCounts.closest('.formData');
      showErrorMessage(errorMsg);
      if ((tournamentCounts.value > 98) || (tournamentCounts.value === "")){
        return false;
      }
      hideErrorMessage(errorMsg);
        return true;
    }

  // RADIO BUTTON FOR CITY TOURNAMENT VALIDATION CHECK:
  // Fetching with Event listener for the element of location
  for(radioBtn of locationsRadioBtn) {
    radioBtn.addEventListener('change', locationsRadioBtnValidation);
  }

  // Check if one of the locations are checked 
  function locationsRadioBtnValidation () {
    let errorMsg = radioBtn.closest('.formData');
    showErrorMessage(errorMsg);
    for (radioBtn of locationsRadioBtn) {
      if (radioBtn.checked) {
        hideErrorMessage(errorMsg);
        return true;
      }
    }
  }

  // TERMS AND CONDITIONS VALIDATION CHECK
  // Fetch with event listener the element checkbox "terms and conditions"
  termsConditionsCheckbox.addEventListener('change', termsConditionsValidation);

  // Check if the checkbox "terms and conditions" is checked, otherwise the submission is not valid
  function termsConditionsValidation () {
    let errorMsg = termsConditionsCheckbox.closest(".formData");
    showErrorMessage(errorMsg);
    if (!termsConditionsCheckbox.checked) {
      return false;
    }
      hideErrorMessage(errorMsg);
      return true;
  }

  // FINAL FORM VALIDATION CONDITIONS

    // SET UP FUNCTION FOR THANK YOU MESSAGE
    function showThanksMessage(){
      form.style.display = "none";
      thanks.style.display = "flex";
    }
    function hideThanksMessage(){
      thanks.style.display = "";
    }

    // Fetching with Event listener for the element of form (when user clicks)
    submitForm.addEventListener('click', function() {

    if (firstNameValidation () 
    && lastNameValidation () 
    && emailValidation ()
    && birthDateValidation ()
    && locationsRadioBtnValidation ()
    && termsConditionsValidation ()){
      
      showThanksMessage();
    }else{
      hideThanksMessage();
      } 
  });
    
  






