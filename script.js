let form = document.getElementById("myForm");
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");

let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

let confirmPasswordInput = document.getElementById("confirm-password");
let confirmPasswordError = document.getElementById("confirm-password-error");
let emptyConfirmPasswordError = document.getElementById("empty-confirm-password");



// SubmitButton
let submitButton = document.getElementById("submit-button");

// Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

// Password Verification

const passwordVerify = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<]).*$/; 
    return regex.test(password) && password.length >= 8;

};



// Text Verification

const textVerify = (text) => {
    const regex = /^[a-zA-Z]{3,}$/;
    return regex.test(text);
};

// Phone number Verification 

const phoneVerify = (number) => {
    const regex = /^[0-9]{11}$/;
    return regex.test(number);

};

// Email Verification
const emailVerify = (input) => {
    const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
    return regex.test(input);
};

// For empty input
const emptyUpdate = ( inputRefrence,emptyErrorRefrence,otherErrorRefrence) => {
    if (!inputRefrence.value) {
        // input is empty
        emptyErrorRefrence.classList.remove("hide");
        otherErrorRefrence.classList.add("hide");
        inputRefrence.classList.add("error");
    } else {
        // input has some content
        emptyErrorRefrence.classList.add("hide");
    }

};

// For error styling and displaying error message

const errorUpdate = (inputRefrence,errorRefrence) => {
    errorRefrence.classList.remove("hide");
    inputRefrence.classList.remove("valid");
    inputRefrence.classList.add("error");

};

// For no error
const validInput = (inputRefrence) => {
    inputRefrence.classList.remove("error");
    inputRefrence.classList.add("valid");
};

// First Name

firstNameInput.addEventListener("input", ()=> {
    if(textVerify(firstNameInput.value)) {
        // if verification returns true
        firstNameError.classList.add("hide");
        validInput(firstNameInput);
    } else {
        // for false
        errorUpdate(firstNameInput, firstNameError);
        // empty checker
        emptyUpdate(firstNameInput, emptyFirstNameError,firstNameError);
    }
});

// Last name
lastNameInput.addEventListener("input", () => {
    if(textVerify(lastNameInput.value)) {
        lastNameError.classList.add("hide");
        validInput(lastNameInput);
    } else {
        errorUpdate(lastNameInput, lastNameError);
        emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
    }

});




// phone
phoneInput.addEventListener("input", () => {
    if(phoneVerify(phoneInput.value)) {
        phoneError.classList.add("hide");
        validInput(phoneInput);
    } else {
        errorUpdate(phoneInput, phoneError);
        emptyUpdate(phoneInput, emptyPhoneError, phoneError);
    }
});

// email

emailInput.addEventListener("input", () => {
    if(emailVerify(emailInput.value)) {
        emailError.classList.add("hide");
        validInput(emailInput);
    } else {
        errorUpdate(emailInput, emailError);
        emptyUpdate(emailInput, emptyEmailError, emailError);
    }
});

// password
passwordInput.addEventListener("input", () => {
    if(passwordVerify(passwordInput.value)) {
        passwordError.classList.add("hide");
        validInput(passwordInput);
    } else {
        errorUpdate(passwordInput, passwordError);
        emptyUpdate(passwordInput, emptyPasswordError, passwordError);
    }
});


// verify password

confirmPasswordInput.addEventListener("input", () => {
    if(confirmPasswordInput.value === passwordInput.value) {
        confirmPasswordError.classList.add("hide");
        validInput(confirmPasswordInput);
    } else {
        errorUpdate(confirmPasswordInput, confirmPasswordError);
        emptyUpdate(confirmPasswordInput, emptyConfirmPasswordError, confirmPasswordError);
    }
});


// Form submit
form.addEventListener("submit", (event) => {
    event.preventDefault(); //  stops page reload

    if (validClasses.length == 6 && invalidClasses.length == 0) {
        alert("Success");
    } else {
        alert("Error");
    }
});








   





