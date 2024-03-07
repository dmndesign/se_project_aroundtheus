//Show input error function
function showInputError(formElement, inputElement, options) {
  //Selecting elements with "-error in id"
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  //Visibility of the error message
  inputElement.classList.add(options.inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(options.errorClass);
}
//Hide input error function
function hideInputError(formElement, inputElement, options) {
  //Selecting elements with "-error in id"
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  //Hide the error message
  inputElement.classList.remove(options.inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(options.errorClass);
}
//Check Validation of the input
function checkInputValidity(formElement, inputElement, options) {
  //if input invalid show input error function works
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  }
  //otherwise hide input error function works
  else {
    hideInputError(formElement, inputElement, options);
  }
}

function hasInvalidInput(inputList) {
  //checking validation of the input
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

//Function for submit button state depends if inputs valid or invalid
function toggleButtonState(inputElements, submitButton, options) {
  if (hasInvalidInput(inputElements)) {
    // if input invalid button inactive
    submitButton.classList.add(options.inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }
  // else button will be active
  else {
    submitButton.classList.remove(options.inactiveButtonClass);
    submitButton.disabled = false;
    return;
  }
}

function setEventListeners(formElement, options) {
  //selecting all inputs
  const inputElements = Array.from(
    formElement.querySelectorAll(options.inputSelector)
  );
  //submit button
  const submitButton = formElement.querySelector(options.submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
}

function enableValidation(options) {
  //selecting all forms
  const formElements = Array.from(
    document.querySelectorAll(options.formSelector)
  );

  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
