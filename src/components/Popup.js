export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keyup', (event) => this._handleEscClose(event));
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keyup', (event) => this._handleEscClose(event));
    }

    _handleEscClose(evt) {
        const popupOpened = document.querySelector('.popup_opened');
        if (evt.key === "Escape") {
            this.close(popupOpened);
        }
    }

    _closePopupByOverlayClick(evt) {
        const popupOpened = document.querySelector('.popup_opened');
        if (evt.target === evt.currentTarget) {
            this.close(popupOpened);
        }
    }

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
        document.addEventListener('keyup', this._handleEscClose);
        this._popupSelector.addEventListener('mousedown', this._closePopupByOverlayClick.bind(this));
    }
}