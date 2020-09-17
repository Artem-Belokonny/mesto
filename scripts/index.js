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

// const popup = document.querySelector('.popup'); удалить перед отправкой
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

function takeProfileDateValue() {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
}

function saveFormData() {
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
}

function openPopup(popup) {
    popup.classList.toggle('popup_opened');
}

function closePopup(popup, evt) {
    evt.preventDefault();
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
    saveFormData();
    closeEditPopup(evt);
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
    const popupZoomTitle = document.querySelector('.popup__title_zoom');
    const popupZoomImage = document.querySelector('.popup__image');
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
    // Кнопка Like
    const likeButton = card.querySelector('.elements__like');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('elements__like_active');
    })
    return card;
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
    addFormPlaceInput.value = "";
    addFormLinkInput.value = "";
    closePopup(popupAdd, evt);
}

render();

formAddElement.addEventListener('submit', submitAddCardForm);
formEditElement.addEventListener('submit', formSubmitHandler);
popupEditOpenButton.addEventListener('click', () => {
    takeProfileDateValue();
    openPopup(popupEdit);
});
popupEditCloseButton.addEventListener('click', (evt) => closePopup(popupEdit, evt));
popupAddOpenButton.addEventListener('click', () => openPopup(popupAdd));
popupAddCloseButton.addEventListener('click', (evt) => closePopup(popupAdd, evt));
popupZoomCloseButton.addEventListener('click', (evt) => closePopup(popupZoom, evt));