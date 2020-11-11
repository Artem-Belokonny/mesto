export default class Card {
    constructor({name, link}, selector, openImagePopup, openDeleteCardPopup) {
        this._link = link;
        this._name = name;
        this._selector = selector;
        this._openImagePopup = openImagePopup;
        this._openDeleteCardPopup = openDeleteCardPopup;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector('.elements-template')
        .content
        .querySelector('.elements__card')
        .cloneNode(true);
        return cardElement;
    }

    _deleteHandler() {
        this._element.remove();
    }

    _toggleLike() {
        this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
    }

    _zoomPopup() {
        this._openImagePopup(
            this._name,
            this._link,
        )
    }

    _openDeletePopup() {
        this._openDeleteCardPopup()
    }

    _setEventListeners() {
        // this._element.querySelector('.elements__delete-button').addEventListener('click', () => this._deleteHandler());
        this._element.querySelector('.elements__like').addEventListener('click', () => this._toggleLike());
        this._element.querySelector('.elements__image').addEventListener('click', () => this._zoomPopup());
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => this._openDeletePopup());
    }

    getElement() {
        this._element = this._getTemplate();
        const elementsTitle = this._element.querySelector('.elements__title');
        const elementsImage = this._element.querySelector('.elements__image');
        elementsTitle.innerText = this._name;
        elementsImage.alt = this._name;
        elementsImage.src = this._link;
        this._setEventListeners();
        return this._element;
    }
}
