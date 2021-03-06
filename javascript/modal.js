function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements - SET THE CONSTANTS
const modalbg = document.querySelector(".bground");
const submitModal = document.querySelector(".btn-submit");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournamentCounts = document.getElementById("quantity");
const termsConditionsCheckbox = document.getElementById("checkbox1");
const thanks = document.querySelector(".thanks");
const thanksBtn = document.querySelector(".btn-thanks");

// EVENTS
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal event
modalCloseBtn.addEventListener('click', closeModal);
// Close modal event after submission
thanksBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

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

function validate() {
  // Set variable error check to false
  var errorCheck = false;

  // CONDITION: Date management for when user selects the dates + the current date (not go beyond)
  const selectedBirthDate = new Date(birthDate.value);
  const timeStampDate = Date.parse(selectedBirthDate);
  const currentDate = Date.now();


  // FIRST NAME VALIDATION CHECK: 
  if ((firstName.value === '') || (firstName.value == null)) { 
    document.getElementById("first_error").innerHTML = 'Le pr??nom est un champ obligatoire. Veuillez le renseigner.';
    firstName.focus();
    firstName.style.border = '2px solid #fe142f';
    
    errorCheck = true;
  } else if (!firstName.value.match(/^[a-zA-Z-\s]+$/)) { // Add a new condition to alert the users of the non-validation of special caracters in his/her first name
    document.getElementById("first_error").innerHTML = 'Les caract??res sp??ciaux tels que +"*??%&/()=?!_-.,/|<> ne sont pas valides.';
    firstName.focus();
    firstName.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else if ((firstName.value.length < 2) || (lastName.value.length > 20)) {
    document.getElementById("first_error").innerHTML = "Veuillez entrer au moins 2 caract??res valides.";
    firstName.focus();
    firstName.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else {
    document.getElementById("first_error").innerHTML = '<i class="fas fa-check-circle"></i>';
    firstName.style.border = '2px solid rgb(4, 198, 4)';

  }

  // LAST NAME VALIDATION CHECK: 
  if ((lastName.value === null) || (lastName.value === '')) {
    document.getElementById("last_error").innerHTML = 'Le nom est un champ obligatoire. Veuillez le renseigner.';
    lastName.focus();
    lastName.style.border = '2px solid #fe142f';
 
    errorCheck = true;
  } else if (!lastName.value.match(/^[a-zA-Z-\s]+$/)){ // Add a new condition to alert the users of the non-validation of special caracters in his/her last name
    document.getElementById("last_error").innerHTML = 'Les caract??res sp??ciaux tels que +"*??%&/()=?_-.,/|<> ne sont pas valides.';
    lastName.focus();
    lastName.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else if ((lastName.value.length < 2) || (lastName.value.length > 20)) {
    document.getElementById("last_error").innerHTML = "Veuillez entrer au moins 2 caract??res valides.";
    lastName.focus();
    lastName.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else {
    document.getElementById("last_error").innerHTML = '<i class="fas fa-check-circle"></i>';
    lastName.style.border = '2px solid rgb(4, 198, 4)';
  }


  // EMAIL ADDRESS VALIDATION CHECK: 
  if ((email.value === null) || (email.value === '')) {
    document.getElementById("email_error").innerHTML = "L'email est un champ obligatoire. Veuillez le renseigner.";
    email.focus();
    email.style.border = '2px solid #fe142f';
  
    errorCheck = true;
  } else if ((!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))) {
    document.getElementById("email_error").innerHTML = 'Veuillez respecter le format email: exemple@domaine.com.';
    email.focus(); 
    email.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else {
    document.getElementById("email_error").innerHTML = '<i class="fas fa-check-circle"></i>';
    email.style.border = '2px solid rgb(4, 198, 4)';
  }

  // BIRTHDATE VALIDATION CHECK:
  if  ((birthDate.value === '') || (birthDate.value === null)){
    document.getElementById("birth_error").innerHTML = "Votre date de naissance est un champ obligatoire. Veuillez le renseigner.";
    birthDate.focus();
    birthDate.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else if (timeStampDate > currentDate) { 
    document.getElementById("birth_error").innerHTML = 'Votre date de naissance ne peut pas exc??der la date actuelle.';
    birthDate.focus();
    birthDate.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else if ((!document.querySelector('input[min = "1900-01-01"]:valid'))) { // Add a new condition to limit the date to 1900-01-01
    document.getElementById("birth_error").innerHTML = "Veuillez saisir une date de naissance valide.";
    birthDate.focus();
    birthDate.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else {
    document.getElementById("birth_error").innerHTML = '<i class="fas fa-check-circle"></i>';
    birthDate.style.border = '2px solid rgb(4, 198, 4)';

  }

  // TOURNAMENT NUMBER VALIDATION CHECK:
  if ((tournamentCounts.value === null) || (tournamentCounts.value === '')) {
    document.getElementById("tournament_error").innerHTML = "Le nombre de participation est un champ obligatoire. Veuillez le renseigner.";
    tournamentCounts.focus();
    tournamentCounts.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else if  ((tournamentCounts.value < '0') || (tournamentCounts.value > 99)) {
    document.getElementById("tournament_error").innerHTML = 'Veuillez choisir une valeur num??rique entre 0 et 99.';
    tournamentCounts.focus();
    tournamentCounts.style.border = '2px solid #fe142f';

    errorCheck = true;
  } else {
    document.getElementById("tournament_error").innerHTML = '<i class="fas fa-check-circle"></i>';
    tournamentCounts.style.border = '2px solid rgb(4, 198, 4)';
  }

  // RADIO BUTTON FOR CITY TOURNAMENT VALIDATION CHECK:
  if (!document.querySelector('input[name = "location"]:checked')) {
    document.getElementById("location_error").innerHTML = 'Veuillez choisir une option.';

    errorCheck = true;
  } else {
    document.getElementById("location_error").innerHTML = '<i class="fas fa-check-circle"></i>';
  }

  // TERMS AND CONDITIONS VALIDATION CHECK
  if (!termsConditionsCheckbox.checked) {
    document.getElementById("condition_error").innerHTML = "Veuillez accepter les termes et conditions d'utilisation.";

    errorCheck = true;
  } else {
    document.getElementById("condition_error").innerHTML = '';
  }

  // VALIDATION CHECK : BLOCK SUBMIT & SHOW ERROR MESSAGES
  if (errorCheck === true) {
    return false;
  } else {
    return true;
  }
 
}

// FINAL TEST EVENT
submitModal.addEventListener("click", finalTest); 

// FUNCTION PREVENT BROWSER FROM CHANGING PAGE ONCLICK AND CREATE THE LAYOUT FOR THE THANK YOU MESSAGE
function finalTest(elt){
  elt.preventDefault();
  if (!validate()) { 
    return false;
  } else {
    modalBody.style.display = "none";
    thanks.style.display = "block";
  }
}