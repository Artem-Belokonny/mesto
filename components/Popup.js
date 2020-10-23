export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open () {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keyup', () => this._handleEscClose());
    }

    close () {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keyup', () => this._handleEscClose());
    }

    _handleEscClose (evt) {
        const popupOpened = document.querySelector('.popup_opened');
        if (evt.key === "Escape") {
        this.close(popupOpened);
        }
    }

    setEventListeners () {
        this._popupSelector.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
    }
}

export class PopupWithImage extends Popup {
    open(src, alt) {
        this._popupSelector.querySelector('.popup__image').src = src;
        this._popupSelector.querySelector('.popup__image').alt = alt;
        super.open();
    }
}
