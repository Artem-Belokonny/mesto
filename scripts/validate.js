const showInputError = (parameters, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(parameters.errorClass);
}

const hideInputError = (parameters, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(parameters.errorClass);
}

const isValid = (parameters, formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage
        showInputError(parameters, formElement, inputElement, errorMessage);
    } else {
        hideInputError(parameters, formElement, inputElement);
    }
}

const toggleButtonState = (parameters, inputList, buttonElement) => {
    const hasInvalidInput = inputList.some((inputElement) => !inputElement.validity.valid);
    if (hasInvalidInput) {
        buttonElement.classList.add(parameters.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(parameters.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

const setEventListeners = (parameters, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(parameters.inputSelector));
    const buttonElement = formElement.querySelector(parameters.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(parameters, formElement, inputElement);
            toggleButtonState(parameters, inputList, buttonElement);
        });
    });
    toggleButtonState(parameters, inputList, buttonElement);
}

function enableValidation(parameters) {
    const formList = Array.from(document.querySelectorAll(parameters.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(parameters, formElement);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
}); 