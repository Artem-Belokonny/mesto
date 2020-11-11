import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupSelector.querySelector('form');
        this._buttonSelector = this._popupSelector.querySelector('.popup__save').textContent
    }
    
    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    changeButtonText() {
        this._popupSelector.querySelector('.popup__save').textContent = "Сохранение...";
    }

    changeBackButtonText() {
        this._popupSelector.querySelector('.popup__save').textContent = this._buttonSelector;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.querySelector('.popup__form').addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }
    close() {
        this._formElement.reset();
        super.close();
    }
}