export default class Card {
    constructor(cardData, selfId, selector, openImagePopup, { handleDeleteCard, handleCardLikes }) {
        this._link = cardData.link;
        this._name = cardData.name;
        this._cardId = cardData._id;
        this._owner = cardData.owner;
        this._ownerId = cardData.owner._id;
        this._likes = cardData.likes;
        this._likesCount = cardData.likes.length;
        this._selfId = selfId;
        this._selector = selector;
        this._openImagePopup = openImagePopup;
        this._handleDeleteCard = handleDeleteCard;
        this._handleCardLikes = handleCardLikes;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector('.elements-template')
        .content
        .querySelector('.elements__card')
        .cloneNode(true);
        return cardElement;
    }

    deleteHandler() {
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
        this._handleDeleteCard()
    }

    _setEventListeners() {
        // this._element.querySelector('.elements__like').addEventListener('click', () => this._toggleLike());
        this._element.querySelector('.elements__image').addEventListener('click', () => this._zoomPopup());
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => this._openDeletePopup());
    }

    getCardId() {
        return this._cardId;
    }

    likeIsActive() {
        if (this._element.querySelector('.elements__like').classList.contains('elements__like_active')) {
            return true
        }
        return false
    }

    changeLike(allLikes) {
        this._toggleLike()
        this._element.querySelector('.elements__likes-count').textContent = allLikes;
    }

    getElement() {
        this._element = this._getTemplate();
        const elementsTitle = this._element.querySelector('.elements__title');
        const elementsImage = this._element.querySelector('.elements__image');
        elementsTitle.innerText = this._name;
        elementsImage.alt = this._name;
        elementsImage.src = this._link;
        if (this._ownerId != this._selfId) {
            const deleteButton = this._element.querySelector('.elements__delete-button');
            deleteButton.style.display = "none";
        }
        this._setEventListeners();
        return this._element;
    }
}