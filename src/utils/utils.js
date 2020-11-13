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

export const createCards = (cardData, selfId, selector, openImagePopup) => {
  const card = new Card(cardData, selfId, selector, openImagePopup, {
    handleDeleteCard: (card) => {
      deleteCardPopup.open(card)
    },
    handleCardLikes: () => {
      const id = card.getCardId()
      if (card.likeIsActive()) {
        api.deleteLike(id)
          .then((res) => {
            card.changeLike(res.likes.length)
          })
          .catch((err) => {
            console.log('Произошла ошибка:', err)
          })
      }
      else {
        api.putLike(id)
          .then((res) => {
            card.changeLike(res.likes.length)
          })
          .catch((err) => {
            console.log('Произошла ошибка:', err)
          })
      }
    }
  })
  const cardElement = card.getElement(selfId);
  cardsList.appendCard(cardElement)
}

export const addCard = (cardData, selfId, selector, openImagePopup) => {
  const card = new Card(cardData, selfId, selector, openImagePopup, {
    handleDeleteCard: (card) => {
      deleteCardPopup.open(card)
    },
    handleCardLikes: () => {
      const id = card.getCardId()
      if (card.likeIsActive()) {
        api.deleteLike(id)
          .then((res) => {
            card.changeLike(res.likes.length)
          })
          .catch((err) => {
            console.log('Произошла ошибка:', err)
          })
      }
      else {
        api.putLike(id)
          .then((res) => {
            card.changeLike(res.likes.length)
          })
          .catch((err) => {
            console.log('Произошла ошибка:', err)
          })
      }
    }
  })
  const cardElement = card.getElement(selfId);
  cardsList.prependCard(cardElement)
}