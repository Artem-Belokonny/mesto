import {zoomImagePopup} from '../pages/index.js';

export const openImagePopup = (name, link) => {
    const popupZoom = document.querySelector('.popup_zoom');
    const popupZoomTitle = document.querySelector('.popup__title_zoom');
    const popupZoomImage = document.querySelector('.popup__image');
    popupZoomTitle.textContent =name;
    popupZoomImage.alt = name;
    popupZoomImage.src = link;
    zoomImagePopup.open(popupZoom);
}