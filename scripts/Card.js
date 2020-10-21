import {openPopup} from './index.js'

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
        openPopup(popupZoom);
    }

    _setEventListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => this._deleteHandler());
        this._element.querySelector('.elements__like').addEventListener('click', () => this._toggleLike());
        this._element.querySelector('.elements__image').addEventListener('click', () => this._zoomPopup());
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

export default Card;

// this._renderedItems.forEach((item) => {
//     const card = new Card (item, template);
//     const cardElement = card.getElement();

//     this.setItem(cardElement);
//     });