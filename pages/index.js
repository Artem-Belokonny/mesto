import Card from '../components/Card.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/Popup.js';
import {config, FormValidator} from '../components/FormValidator.js';
import {initialCards, cardListSection, template, popupEdit, addFormPlaceInput, addFormLinkInput, popupAddOpenButton, popupAdd, popupZoom, popupAddButton, popupEditOpenButton, popupName, popupJob, profileName, profileJob} from '../utils/constants.js';

const formEditValidator = new FormValidator(config.formEditSelector, config);
formEditValidator.enableValidation()

const formAddValidator = new FormValidator(config.formAddSelector, config);
formAddValidator.enableValidation()

const editPopupForm = new Popup(popupEdit);
editPopupForm.setEventListeners();

const addPopupForm = new Popup(popupAdd);
addPopupForm.setEventListeners();

const zoomImagePopup = new PopupWithImage(popupZoom);
zoomImagePopup.setEventListeners();

const openImagePopup = (name, link) => {
    const popupZoom = document.querySelector('.popup_zoom');
    const popupZoomTitle = document.querySelector('.popup__title_zoom');
    const popupZoomImage = document.querySelector('.popup__image');
    popupZoomTitle.textContent =name;
    popupZoomImage.alt = name;
    popupZoomImage.src = link;
    zoomImagePopup.open(popupZoom);
}

const cardsList = new Section ({items: initialCards,
    renderer: (item) => {
        const card = new Card (item, template, openImagePopup);
        const cardElement = card.getElement();
        cardsList.setItem(cardElement);
            },
        },
        cardListSection
    );

cardsList.renderItems();

const addCard = (evt) => {
    evt.preventDefault();
    const cardData = {
        name: formAddInputTitle.value,
        link: formAddInputLink.value,
    }
    const card = new Card(cardData, template);
    const element = card.getElement();
    cards.prepend(element);
    closePopup(popupAdd, evt);
}


// закрытие по CLICK - делегирование на page

// function closePopupByOverlayClick(evt) {
//     const popupOpened = document.querySelector('.popup_opened');
//     if (evt.target.classList.contains('popup_opened')) {
//         closePopup(popupOpened);
//     }
// }

function takeProfileDateValue() {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
}

// function saveFormData() {
//     profileName.textContent = popupName.value;
//     profileJob.textContent = popupJob.value;
// }

// function formSubmitHandler (evt) {
//     saveFormData();
//     closePopup(popupEdit, evt);
// }



// formEditElement.addEventListener('submit', formSubmitHandler);
popupEditOpenButton.addEventListener('click', () => {
    takeProfileDateValue();
    editPopupForm.open(popupEdit);
});
popupAddOpenButton.addEventListener('click', () => {
    popupAddButton.classList.add('popup__save_disabled');
    popupAddButton.setAttribute('disabled', true);
    addFormPlaceInput.value = "";
    addFormLinkInput.value = "";
    addPopupForm.open(popupAdd);
});
// popupEdit.addEventListener('mousedown', closePopupByOverlayClick);
// popupAdd.addEventListener('mousedown', closePopupByOverlayClick);
// popupZoom.addEventListener('mousedown', closePopupByOverlayClick);
popupAddButton.addEventListener('click', addCard);
