import { zoomImagePopup, deleteCardPopup } from '../pages/index.js';

export const openImagePopup = (name, link) => {
  const popupZoom = document.querySelector('.popup_zoom');
  const popupZoomTitle = document.querySelector('.popup__title_zoom');
  const popupZoomImage = document.querySelector('.popup__image');
  popupZoomTitle.textContent = name;
  popupZoomImage.alt = name;
  popupZoomImage.src = link;
  zoomImagePopup.open(popupZoom);
}

export const openDeleteCardPopup = () => {
  const popupDelete = document.querySelector('.popup_delete');
  deleteCardPopup.open(popupDelete);
}

// export const renderLoading = (isLoading) => {
//   const saveButton = document.querySelector('.popup__save');
//   if (isLoading) {
//     saveButton.textContent = "Сохранение...";
//   } else {
//     saveButton.textContent = "Сохранить";
//   }
// }