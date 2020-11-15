import Card from "../components/Card.js";
import {
  zoomImagePopup,
  deleteCardPopup,
  cardsList,
  api,
} from "../pages/index.js";

export const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const openImagePopup = (name, link) => {
  const popupZoom = document.querySelector(".popup_zoom");
  const popupZoomTitle = document.querySelector(".popup__title_zoom");
  const popupZoomImage = document.querySelector(".popup__image");
  popupZoomTitle.textContent = name;
  popupZoomImage.alt = name;
  popupZoomImage.src = link;
  zoomImagePopup.open(popupZoom);
};

export const createCards = (cardData, selfId, selector, openImagePopup) => {
  const card = new Card(cardData, selfId, selector, openImagePopup, {
    handleDeleteCard: (card) => {
      deleteCardPopup.open(card);
    },
    handleCardLikes: (card) => {
      if (card.likeClicked()) {
        api.putLike(cardData._id).then((res) => {
          card.changeLike(res.likes.length);
        });
      } else {
        api.deleteLike(cardData._id).then((res) => {
          card.changeLike(res.likes.length);
        });
      }
    },
  });
  const cardElement = card.getElement(selfId);
  cardsList.appendCard(cardElement);
};

export const addCard = (cardData, selfId, selector, openImagePopup) => {
  const card = new Card(cardData, selfId, selector, openImagePopup, {
    handleDeleteCard: (card) => {
      deleteCardPopup.open(card);
    },
    handleCardLikes: (card) => {
      if (card.likeClicked()) {
        api.putLike(cardData._id).then((res) => {
          card.changeLike(res.likes.length);
        });
      } else {
        api.deleteLike(cardData._id).then((res) => {
          card.changeLike(res.likes.length);
        });
      }
    },
  });
  const cardElement = card.getElement(selfId);
  cardsList.prependCard(cardElement);
};
