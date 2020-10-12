class Card {
    constructor({name, link}, selector) {
        this._link = link;
        this._name = name;
        this._selector = selector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector('.elements-template')
        .content
        .querySelector('.elements__card')
        .cloneNode(true);
        return cardElement;
    }

    _openPopup(popup) {
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupByEsc);
    }

    _closePopupByEsc(evt) {
        const popupOpened = document.querySelector('.popup_opened');
        if (evt.key === "Escape" && popupOpened) {
            popupOpened.classList.remove('popup_opened');
        }
    }

    _deleteHandler() {
        this._element.remove();
    }

    _toggleLike() {
        this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
    }

    _zoomPopup() {
        const popupZoom = document.querySelector('.popup_zoom');
        const popupZoomTitle = document.querySelector('.popup__title_zoom');
        const popupZoomImage = document.querySelector('.popup__image');
        popupZoomTitle.textContent = this._element.querySelector('.elements__image').alt;
        popupZoomImage.alt = this._element.querySelector('.elements__image').alt;;
        popupZoomImage.src = this._element.querySelector('.elements__image').src;;
        this._openPopup(popupZoom);
    }

    _setEventListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => this._deleteHandler());
        this._element.querySelector('.elements__like').addEventListener('click', () => this._toggleLike());
        this._element.querySelector('.elements__image').addEventListener('click', () => this._zoomPopup());
    }

    getElement() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__title').textContent = this._name;
        this._element.querySelector('.elements__image').alt = this._name;
        this._element.querySelector('.elements__image').src = this._link;
        this._setEventListeners();
        return this._element;
    }
}

export default Card;