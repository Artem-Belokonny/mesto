import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {config, FormValidator} from '../components/FormValidator.js';
import {openImagePopup} from '../utils/utils.js';
import {initialCards, cardListSection, template, popupEdit, popupEditButton, popupAddOpenButton, popupAdd, popupZoom, popupAddButton, popupEditOpenButton, profileName, profileJob, formAddInputTitle, formAddInputLink} from '../utils/constants.js';
import Popup from '../components/Popup';

// отрисовка массива карточек
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

//  добавление карточки
const addCard = (evt) => {
    evt.preventDefault();
    const cardData = {
        name: formAddInputTitle.value,
        link: formAddInputLink.value,
    }
    const card = new Card(cardData, template, openImagePopup);
    const element = card.getElement();
    cardListSection.prepend(element);
    addPopupForm.close(popupAdd, evt);
}

// экземпляр класса popup формы добавления карточки
const addPopupForm = new PopupWithForm({
    popupSelector: popupAdd,
    handleFormSubmit: (formData) => {
        const card = new Card (formData, template, openImagePopup);
        const cardElement = card.getElement();
        cardsList.setItem(cardElement);
    }
})
addPopupForm.setEventListeners();

// экземпляр класса popup формы редактирования профиля
const editPopupForm = new PopupWithForm({
    popupSelector: popupEdit,
    handleFormSubmit: () => {
        user.setUserInfo();
    }
})
editPopupForm.setEventListeners();

// экземпляр класса увеличения картинки
export const zoomImagePopup = new PopupWithImage(popupZoom);
zoomImagePopup.setEventListeners();


// экземпляр класса данных user`а
const user = new UserInfo({
    userName: profileName,
    userJob: profileJob
})

// валидация формы редактирования профиля
const formEditValidator = new FormValidator(config.formEditSelector, config);
formEditValidator.enableValidation()

// валидация формы добавления карточки
const formAddValidator = new FormValidator(config.formAddSelector, config);
formAddValidator.enableValidation()

// слушатели
popupEditOpenButton.addEventListener('click', () => {
    user.getUserInfo();
    editPopupForm.open(popupEdit);
    formEditValidator.hideFormErrors();
});
popupAddOpenButton.addEventListener('click', () => {
    popupAddButton.classList.add('popup__save_disabled');
    popupAddButton.setAttribute('disabled', 'disabled');
    addPopupForm.open(popupAdd);
    formAddValidator.hideFormErrors();
});
popupAddButton.addEventListener('click', addCard);