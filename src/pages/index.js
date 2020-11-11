import '../pages/index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { config, FormValidator } from '../components/FormValidator.js';
import { openImagePopup, openDeleteCardPopup } from '../utils/utils.js';
import { profileAvatar, popupEditAvatarButton, popupDelete, popupEditAvatar, popupAvatarEditOpenButton, cardListSection, template, popupEdit, popupAddOpenButton, popupAdd, popupZoom, popupAddButton, popupEditOpenButton, profileName, profileAbout } from '../utils/constants.js';
import Popup from '../components/Popup';

const cardsList = new Section ({
  renderer: (item) => {
    const card = new Card(item, template, openImagePopup, openDeleteCardPopup);
    const cardElement = card.getElement();
    cardsList.appendCard(cardElement)
  } 
}, cardListSection)

// экземпляр класса Api
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
      authorization: 'f8a9e527-6ca4-4e1d-b3eb-bf388e887896',
      'Content-Type': 'application/json'
  }
});

// экземпляр класса popup формы добавления карточки
const addPopupForm = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (cardData) => {
    addPopupForm.changeButtonText();
    api.postNewCard(cardData)
    .then((res) => {
      const card = new Card (res, template, openImagePopup, openDeleteCardPopup);
      const cardElement = card.getElement();
      cardsList.prependCard(cardElement);
    })
    .finally(() => {
      addPopupForm.changeBackButtonText();
    })
  }
})
addPopupForm.setEventListeners();

// экземпляр класса popup формы редактирования профиля
const editPopupForm = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (userData) => {
    editPopupForm.changeButtonText();
    api.patchUserData(userData)
    .then((res) => {
      user.setUserInfo(res);
    })
    .finally(() => {
      editPopupForm.changeBackButtonText();
    })
  }
})
editPopupForm.setEventListeners();

// экземпляр класса редактирования аватара
export const editAvatarPopup = new PopupWithForm({
  popupSelector: popupEditAvatar,
  handleFormSubmit: (userAvatar) => {
    editAvatarPopup.changeButtonText();
    api.patchUserAvatar(userAvatar)
    .then((res) => {
      user.setUserInfo(res);
    })
    .finally(() => {
      editAvatarPopup.changeBackButtonText();
    })
  }
})
editAvatarPopup.setEventListeners();

// экземпляр класса увеличения картинки
export const zoomImagePopup = new PopupWithImage(popupZoom);
zoomImagePopup.setEventListeners();

// экземпляр класса данных user`а
const user = new UserInfo({
    userName: profileName,
    userAbout: profileAbout,
    userAvatar: profileAvatar
})

// валидация формы редактирования профиля
const formEditValidator = new FormValidator(config.formEditSelector, config);
formEditValidator.enableValidation()

// валидация формы добавления карточки
const formAddValidator = new FormValidator(config.formAddSelector, config);
formAddValidator.enableValidation()

// валидация формы редактирования аватара
const popupEditAvatarValidator = new FormValidator(config.formEditAvatarSelector, config);
popupEditAvatarValidator.enableValidation()

// экземпляр класса попапа удаления карточки
export const deleteCardPopup = new Popup(popupDelete);
deleteCardPopup.setEventListeners();

// отрисовка массива карточек
api.getInitialCards()
.then((res) => {
  cardsList.renderItems(res);
})

// получение данных информации профиля с сервера
api.getUserData()
  .then((result) => {
    user.setUserInfo(result);
  })

  // слушатели
popupEditOpenButton.addEventListener('click', () => {
  user.getUserInfo();
  editPopupForm.open(popupEdit);
  formEditValidator.enableValidation();
  formEditValidator.hideFormErrors();
});
popupAddOpenButton.addEventListener('click', () => {
  popupAddButton.classList.add('popup__save_disabled');
  popupAddButton.setAttribute('disabled', 'disabled');
  addPopupForm.open(popupAdd);
  formAddValidator.hideFormErrors();
});
popupAvatarEditOpenButton.addEventListener('click', () => {
  popupEditAvatarButton.classList.add('popup__save_disabled');
  popupEditAvatarButton.setAttribute('disabled', 'disabled');
  editAvatarPopup.open(popupEditAvatar);
  popupEditAvatarValidator.enableValidation();
  popupEditAvatarValidator.hideFormErrors();
})

// разобраться с высотой попапов
// разобраться со шрифтами новых попапов
// _id: "8e2bb8f3800c3c6c52ae66f1" - мой айди
// Как видите, у карточки также есть идентификатор — свойство _id. 
// Сейчас он вам не нужен, но скоро понадобится.