function showInputError(formElement, inputElement, options) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(options.inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);
}

function hideInputError(formElement, inputElement, options) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(options.inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(options.errorClass);
}

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

function toggleButtonState(inputElements, submitButton, options) {
  if (hasInvalidInput(inputElements)) {
    submitButton.classList.add(options.inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(options.inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function setEventListeners(formElement, options) {
  const inputElements = Array.from(
    formElement.querySelectorAll(options.inputSelector)
  );
  const submitButton = formElement.querySelector(".modal__submit-button");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
}

function enableValidation(options) {
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
