import Card from './Card.js';
import {config, FormValidator} from './FormValidator.js'

const initialCards = [
    {
        name: 'Германия',
        link: 'https://images.unsplash.com/photo-1583265651635-4955d322771f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
        name: 'Турция',
        link: 'https://images.unsplash.com/photo-1599408162416-c8b3464586c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    },
    {
        name: 'Великобритания',
        link: 'https://images.unsplash.com/photo-1599639668392-5b44355c76f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
        name: 'Мексика',
        link: 'https://images.unsplash.com/photo-1585331474679-3c0b983a9c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
        name: 'Испания',
        link: 'https://images.unsplash.com/photo-1523717659-a250d867d6f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    },
    {
        name: 'Танзания',
        link: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'
    },
];

const popupEdit = document.querySelector('.popup_edit');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = document.querySelector('.popup__close_edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupName = document.querySelector('.popup__input_edit_name');
const popupJob = document.querySelector('.popup__input_edit_job');
const formEditElement = document.querySelector('.popup__container_edit');
const popupAdd = document.querySelector('.popup_add');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.popup__close_add');
const template = document.querySelector('.elements-template').content;
const cards = document.querySelector('.elements');
const addFormPlaceInput = document.querySelector('.popup__input_add-title');
const addFormLinkInput = document.querySelector('.popup__input_add-link');
const popupZoom = document.querySelector('.popup_zoom');
const popupZoomCloseButton = document.querySelector('.popup__close_zoom');
const popupAddButton = document.querySelector('.popup__save_add');
const formAddInputTitle = document.querySelector('.popup__input_add-title');
const formAddInputLink = document.querySelector('.popup__input_add-link');



initialCards.forEach(({name, link}) => {
    const card = new Card ({name, link}, template);
    const element = card.getElement();
    cards.append(element);
})

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

function closePopupByOverlayClick(evt) {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popupOpened);
    }
}

// закрытие через ESCAPE
function closePopupByEsc(evt) {
    const popupOpened = document.querySelector('.popup_opened');
    if (evt.key === "Escape") {
    closePopup(popupOpened);
    }
}

function takeProfileDateValue() {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
}

function saveFormData() {
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', closePopupByEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closePopupByEsc);
}

function formSubmitHandler (evt) {
    saveFormData();
    closePopup(popupEdit, evt);
}

const formEditValidator = new FormValidator(config.formEditSelector, config);
formEditValidator.enableValidation()

const formAddValidator = new FormValidator(config.formAddSelector, config);
formAddValidator.enableValidation()

formEditElement.addEventListener('submit', formSubmitHandler);
popupEditOpenButton.addEventListener('click', () => {
    takeProfileDateValue();
    openPopup(popupEdit);
});
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));
popupAddOpenButton.addEventListener('click', () => {
    popupAddButton.classList.add('popup__save_disabled');
    popupAddButton.setAttribute('disabled', true);
    addFormPlaceInput.value = "";
    addFormLinkInput.value = "";
    openPopup(popupAdd)});
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
popupZoomCloseButton.addEventListener('click', () => closePopup(popupZoom));
popupEdit.addEventListener('mousedown', closePopupByOverlayClick);
popupAdd.addEventListener('mousedown', closePopupByOverlayClick);
popupZoom.addEventListener('mousedown', closePopupByOverlayClick);
popupAddButton.addEventListener('click', addCard);
