export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active',
    formEditSelector: '.popup__container_edit',
    formAddSelector: '.popup__container_add',
}

export class FormValidator {
    constructor(formSelector, config) {
    this._formSelector = formSelector;
    this._formElement = document.querySelector(formSelector);
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    }

_showInputError (inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
}

_hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
}

_getErrorMesage(inputElement) {
    return inputElement.validationMessage;
}

_checkInputValidity (inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
        const errorMessage = this._getErrorMesage(inputElement);
        this._showInputError(inputElement, errorMessage);
    } else {
        this._hideInputError(inputElement);
    }
}

_hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
}

_toggleButtonState (inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

_setEventListeners () {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState(inputList, buttonElement);
        });
    });
    this._toggleButtonState(inputList, buttonElement);
}

enableValidation = () => {
    this._setEventListeners();
}
}