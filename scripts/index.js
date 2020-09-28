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
const formAddElement = document.querySelector('.popup__container_add');
const popupZoom = document.querySelector('.popup_zoom');
const popupZoomCloseButton = document.querySelector('.popup__close_zoom');
const page = document.querySelector('.page');
const popupZoomTitle = document.querySelector('.popup__title_zoom');
const popupZoomImage = document.querySelector('.popup__image');
const popupAddButton = document.querySelector('.popup__save_add');
const elements = document.querySelector('.elements');

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
    if (evt.key === "Escape" && popupOpened) {
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

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

function formSubmitHandler (evt) {
    saveFormData();
    closePopup(popupEdit, evt);
}

function render() {
    initialCards.forEach(addCardToSection);
}

function addCardToSection({name, link}){
    const card = createCard({name, link});
    cards.appendChild(card);
}

function createCard({name, link}) {
    const card = template.cloneNode(true);
    const elementsImage = card.querySelector('.elements__image');
    const elementsTitle = card.querySelector('.elements__title');
    elementsTitle.innerText = name;
    elementsImage.alt = name;
    elementsImage.src = link;
    // Увеличение фото
    elementsImage.addEventListener('click', () => {
        openPopup(popupZoom);
        popupZoomTitle.textContent = name;
        popupZoomImage.alt = name;
        popupZoomImage.src = link;
    })
    // Кнопка Delete
    const deleteButton = card.querySelector('.elements__delete-button');
    deleteButton.addEventListener('click', function() {
        const cardDelete = deleteButton.closest('.elements__card');
        cardDelete.remove();
    })
    return card;
}

// Кнопка Like
function toggleLike(evt) {
if (evt.target.classList.contains('elements__like')) {
    evt.target.classList.toggle('elements__like_active');
    }
}

function submitAddCardForm(evt) {
    const nameValue = addFormPlaceInput.value;
    const linkValue = addFormLinkInput.value;
    const newCard = {
        name: nameValue,
        link: linkValue
    }
    const card = createCard(newCard);
    cards.prepend(card);
    closePopup(popupAdd, evt);
}

render();

formAddElement.addEventListener('submit', submitAddCardForm);
formEditElement.addEventListener('submit', formSubmitHandler);
popupEditOpenButton.addEventListener('click', () => {
    takeProfileDateValue();
    openPopup(popupEdit);
});
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));
popupAddOpenButton.addEventListener('click', () => {
    popupAddButton.setAttribute('disabled', true);
    addFormPlaceInput.value = "";
    addFormLinkInput.value = "";
    openPopup(popupAdd)});
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
popupZoomCloseButton.addEventListener('click', () => closePopup(popupZoom));
popupEdit.addEventListener('mousedown', closePopupByOverlayClick);
popupAdd.addEventListener('mousedown', closePopupByOverlayClick);
popupZoom.addEventListener('mousedown', closePopupByOverlayClick);
elements.addEventListener('click', toggleLike);