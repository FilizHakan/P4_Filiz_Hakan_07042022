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

// Close modal event
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

// DOM ELEMENTS - SET CONST FOR EACH FIELD IN HTML
const formSubmission = document.querySelector('form');
const modalBody = document.querySelector('.modal-body');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const locationsRadioBtn = document.querySelectorAll("input[name='location']");
const tournamentCounts = document.getElementById('tournament-counts');
const termsConditionsCheckbox = document.querySelector("input[name='conditions']");
const submitFormBtn = document.getElementById('btn-submit');

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
  const selectedBirthDate = new Date(birthDate.value);
  const currentDate = new Date(Date.now());

    // Check if birthdate is not empty + must be following the validation REGEX we have created above (format ...@...)
    function birthDateValidation () {
      let errorMsg = birthDate.closest('.formData');
      showErrorMessage(errorMsg);
      if (!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(birthdate.value) // Set a REGEX: Birthdate validation
      || (selectedBirthDate > currentDate) // If the selected DOB is greater than the current date
      || (selectedBirthDate.getFullYear() > currentDate.getFullYear() - 16)) { // User must be 16 years of age or above
        return false; // If one OR the other above conditions are met, the message error will appear
      }
      hideErrorMessage(errorMsg); 
        return true; // otherwise, the error message won't be showing
    }

  // TOURNAMENT NUMBER VALIDATION CHECK:
  // Fetching with Event listener for the number of tournaments
  tournamentCounts.addEventListener('input', tournamentCountsValidation);

    // Check if tournament counts is checked and validated
    function tournamentCountsValidation () {
      let errorMsg = tournamentCounts.closest('.formData');
      showErrorMessage(errorMsg);
      if ((tournamentCounts.value > 99) || (tournamentCounts.value < '0') || (tournamentCounts.value.length === '')) {
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
      if (!radioBtn.checked) {
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

    // SET UP FUNCTION FOR ENABLED OR DISABLED SUBMIT FORM BUTTON
    disabledBtn();
    function enabledBtn () {
      submitFormBtn.disabled = false;
      submitFormBtn.style.opacity = '1';
      submitFormBtn.style.cursor = 'pointer';
    }

    function disabledBtn () {
      submitFormBtn.disabled = true;
      submitFormBtn.style.opacity = '1';
      submitFormBtn.style.cursor = 'allowed';
    }
  

    // Fetching with Event listener the conditions to validate the form when user clicks in the button
    formSubmission.addEventListener('change', formConditionValidation);

    function formConditionValidation () {
    if (firstNameValidation () 
      && lastNameValidation () 
      && emailValidation ()
      && birthDateValidation ()
      && tournamentCountsValidation ()
      && locationsRadioBtnValidation ()
      && termsConditionsValidation ()) 
      {
        enabledBtn ();
          return true;
        }
        disabledBtn ();
          return false;
    }

// FUNCTION TO CREATE AND MAKE APPEAR THE THANK YOU TEXT
function thanksMessage() {
  let thankYou = document.createElement("div"); //Create a <div> to integrate a the "thank you" message
  thankYou.innerText = 'Merci pour votre inscription !'; // Integrate the message down in the <div> with innerText
  thankYou.style.width = '100%';  // Set the width of the text to 100%
  thankYou.style.justifyContent = "center"; // Set the content to center
  thankYou.style.textAlign = 'center'; // Set the text to center with the "text-align" property           
  thankYou.style.marginTop = '16px'; // Set the text margin top to 16px
  thankYou.style.marginBottom = '16px'; // Set the text margin bottom to 16px
  modalBody.appendChild(thankYou); // Add a text node for the new div 
}

// CREATE THE 'FERMER' BUTTON AFTER SUBMISSION WITH JAVASCRIPT
function closeButton () {
  let buttonFermer = document.createElement("button"); // Create a new HTML tag <button>
  buttonFermer.innerHTML = "Fermer"; // The new button will be called "Fermer"
  buttonFermer.style.marginTop = '24px'; // Its margin-top is set at 24px
  buttonFermer.classList.add("button"); // Add name class="button" (as in HTML)
  buttonFermer.classList.add("btn-submit"); // Add name class="btn-submit" (as in HTML)
  modalBody.appendChild(button); // Add a new button node in the "modal-body"
  buttonFermer.onclick = function () { // Function "onclick" allows the new button to be close by the user (disappear with display: none)
    modalbg.style.display = "none";
  }
}

// Fetching with Event listener for the element submit
formSubmission.addEventListener("submit", submitFormValidation);

// FUNCTION PREVENT BROWSER FROM CHANGING PAGE ONCLICK AND CREATE THE LAYOUT FOR THE THANK YOU MESSAGE
function submitFormValidation(elt){
  elt.preventDefault();
  modalBody.innerHTML = " ";
  modalBody.style.flexDirection = "column";
  modalBody.style.justifyContent = "flex-end";
  modalBody.style.height = "700px";
  modalBody.style.display = "flex";
  thanksMessage();
  closeButton();
}







