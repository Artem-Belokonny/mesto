import Card from '../components/Card.js';
import { zoomImagePopup, deleteCardPopup, cardsList } from '../pages/index.js';

export const openImagePopup = (name, link) => {
  const popupZoom = document.querySelector('.popup_zoom');
  const popupZoomTitle = document.querySelector('.popup__title_zoom');
  const popupZoomImage = document.querySelector('.popup__image');
  popupZoomTitle.textContent = name;
  popupZoomImage.alt = name;
  popupZoomImage.src = link;
  zoomImagePopup.open(popupZoom);
}

export const createCards = (cardData, selector, openImagePopup) => {
  const card = new Card(cardData, selector, openImagePopup, {
    handleDeleteCard: (card) => {
      deleteCardPopup.open(card)
    }
  })
  const cardElement = card.getElement();
  cardsList.appendCard(cardElement)
}

export const addCard = (cardData, selector, openImagePopup) => {
  const card = new Card(cardData, selector, openImagePopup, {
    handleDeleteCard: (card) => {
      deleteCardPopup.open(card)
    }
  })
  const cardElement = card.getElement();
  cardsList.prependCard(cardElement)
}