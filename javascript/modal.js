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

// DOM ELEMENTS - SAVE FOR EACH FIELD IN HTML
const formSubmission = document.querySelector('form');
const form = document.getElementsByName('reserve');
const modalBody = document.querySelector('.modal-body');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const locationsRadioBtn = document.querySelectorAll("input[name='location']");
const tournamentCounts = document.querySelector("input[name='quantity']");
const termsConditionsCheckbox = document.querySelector("input[name='conditions']");
const submitForm = document.getElementById('.btn-submit');

// REGEX
// Set a REGEX: Name validation
const nameRegex = /^[a-zA-Z-\s]+$/;

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

  // FIRST NAME VALIDATION CHECK: 
  // Fetching with Event listener for the element first name
  firstName.addEventListener('input', firstNameValidation); 

    // Check if first name is strictly between 2 and 20, and check the REGEX condition
    function firstNameValidation () {
      let errorMsg = firstName.closest('.formData');
      showErrorMessage(errorMsg);
      if ((firstName.value.trim().length < 2) || nameRegex.test(firstName.value) == false || (firstName.value == 0)) {
        return false;
      }
      if (firstName.value.length > 20) {
        return false;
      }
      hideErrorMessage(errorMsg);
        return true;
    }

  // LAST NAME VALIDATION CHECK: 
  // Fetching with Event listener for the element last name
  lastName.addEventListener('input', lastNameValidation); 

    // Check if last name is empty or not with message + length must be strictly superior to 2
    function lastNameValidation () {
      let errorMsg = lastName.closest('.formData');
      showErrorMessage(errorMsg);
      if (lastName.value.trim().length < 2) {
        return false;
      }
      if (nameRegex.test(lastName.value) == false) {
        return false;
      }
      if (lastName.value.length > 20) {
        return false;
      }
      if (lastName.value.length === '') {
        return false;
      }
      hideErrorMessage(errorMsg);
        return true;
    }

  // EMAIL ADDRESS VALIDATION CHECK: 
  // Fetching with Event listener the element by Id
    email.addEventListener('input', emailValidation);

    // Check if Email is not empty + must be following the validation REGEX we have created above (format ...@...)
    function emailValidation () {
      let errorMsg = email.closest('.formData');
      showErrorMessage(errorMsg);
      if (email.value.length == 0) {
        return false;
      }
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) { // Set a REGEX: Email address validation (must start with a string followed by '@', followed by another string)

        return false;
      }
      hideErrorMessage(errorMsg);
      return true;
    }

  // BIRTHDATE VALIDATION CHECK:
  // Fetching with Event listener for the element birthdate
  birthDate.addEventListener('input', birthDateValidation); 

  // CONDITION: Date management for when user selects the dates + the current date (not go beyond)
  const birthData = birthDate.value;
  const selectedBirthDate = new Date(birthData);
  const currentDate = new Date();

    // Check if birthdate is not empty + must be following the validation REGEX we have created above (format ...@...)
    function birthDateValidation () {
      let errorMsg = birthDate.closest('.formData');
      showErrorMessage(errorMsg);
      if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(birthData) || (selectedBirthDate > currentDate)) { // Set a REGEX: Birthdate validation and date not exceeding current date
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
      if ((tournamentCounts.value < '0') || (tournamentCounts.value === '')) {
        return false;
      }
      hideErrorMessage(errorMsg);
        return true;
    }

  // RADIO BUTTON FOR CITY TOURNAMENT VALIDATION CHECK:
  // Fetching with Event listener (with "for...of": to get one of the radio options checked) for the element of location
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

    // SET UP FUNCTION FOR FINAL THANK YOU MESSAGE AFTER SUBMISSION HAS BEEN COMPLETED
    function showThanksMessage(){
      form.style.display = "none";
      thanksMessage.style.display = "flex";
    }
    function hideThanksMessage(){
      thanksMessage.style.display = "";
    }

    // SET UP FUNCTION FOR ENABLED AND DISABLED BUTTON 
    function disabledFormBtn () {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '1';
      submitBtn.style.cursor = 'allowed';
    }
    
    function enabledFormBtn () {
      submitForm.disabled = false;
      submitForm.style.opacity = '1';
      submitForm.style.cursor = 'pointer';
    }
  

    // Fetching with Event listener for the element of form (when user clicks)
    submitSubmission.addEventListener('change', formValidation);

    function formValidation () {
    if (firstNameValidation () 
      && lastNameValidation () 
      && emailValidation ()
      && birthDateValidation ()
      && locationsRadioBtnValidation ()
      && termsConditionsValidation ())
        {
        diabledFormBtn ();
          return false;
        }
        enabledFormBtn ();
          return true;
    }

// CREATE THE 'FERMER' BUTTON AFTER SUBMISSION WITH JAVASCRIPT
function closeButton () {
  let buttonFermer = document.createElement("button");
  buttonFermer.innerHTML = "Fermer";
  buttonFermer.className = "btn-submit";
  modalBody.appendChild(button);
  buttonFermer.onclick = function () {
    modalbg.style.display = "none";
  }
}

// Fetching with Event listener for the element submit
formSubmission.addEventListener("submit", submitFormValidation);

// FUNCTION PREVENT BROWSER FROM CHANGING PAGE ONCLICK AND CREATE THE LAYOUT FOR THE THANK YOU MESSAGE
function submitFormValidation(elt){
  elt.preventDefault();
  document.querySelector('.modal-body').innerHTML = " ";
  modalBody.style.flexDirection = "column";
  modalBody.style.justifyContent = "center";
  modalBody.style.height = "700px";
  modalBody.style.display = "flex";
  thanksMessage();
  closeButton();
}

// FUNCTION TO CREATE AND MAKE APPEAR THE THANK YOU TEXT
function thanksMessage() {
  let thankYou = document.createElement('div'); //Create a <div> to integrate a the "thank you" message
  thankYou.innerText = 'Merci pour votre inscription !'; // Integrate the message down in the <div> with innerText
  thankYou.style.width = '100%';  // Set the width of the text to 100%
  thankYou.style.textAlign = 'center'; // Set the text to center with the "text-align" property           
  thankYou.style.marginBottom = '180px'; // Set the text margin bottom to 180px
  modalBody.appendChild(thankYou); 
}
  

          
     
  
    
  






