const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
];

const addPlaceInput = document.querySelector('.add-popup__input_place');
const addLinkInput = document.querySelector('.add-popup__input_link');
const popupEdit = document.querySelector('.edit-popup');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = document.querySelector('.edit-popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupName = document.querySelector('.edit-popup__input_name');
const popupJob = document.querySelector('.edit-popup__input_job');
const formElement = document.querySelector('.edit-popup__container');
const popupAdd = document.querySelector('.add-popup');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.add-popup__close');

function profileDate() {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
}

function saveFormData() {
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
}

function popupEditOpen() {
    profileDate();
    popupEdit.classList.add('edit-popup_opened');
}

function popupEditClose() {
    popupEdit.classList.remove('edit-popup_opened');
}

function popupAddOpen() {
    popupAdd.classList.add('add-popup_opened');
}

function popupAddClose() {
    popupAdd.classList.remove('add-popup_opened');
}



function formSubmitHandler (evt) {
    evt.preventDefault();
    saveFormData();
    popupEditClose();
}

popupEditOpenButton.addEventListener('click', popupEditOpen);
popupEditCloseButton.addEventListener('click', popupEditClose);
formElement.addEventListener('submit', formSubmitHandler);
popupAddOpenButton.addEventListener('click', popupAddOpen);
popupAddCloseButton.addEventListener('click', popupAddClose);

const template = document.querySelector('.elements-template').content;
const cards = document.querySelector('.elements');
const formAddInputPlace = document.querySelector('.add-popup__input_place');
const formAddInputLink = document.querySelector('.add-popup__input_link');
const formAddElement = document.querySelector('.add-popup__container');
const imagePopup = document.querySelector('.image-popup');

function popupImageClose() {
    imagePopup.classList.toggle('image-popup_opened');
}

const imagePopupCloseButton = document.querySelector('.image-popup__close');

imagePopupCloseButton.addEventListener('click', popupImageClose);

function render() {
    initialCards.forEach(renderItem);
}

function renderItem({name, link}) {
    const card = template.cloneNode(true);
    card.querySelector('.elements__place').innerText = name;
    card.querySelector('.elements__photo').alt = name;
    card.querySelector('.elements__photo').src = link;
    // Увеличение фото
    const photo = card.querySelector('.elements__photo');
    const imagePopupTitle = document.querySelector('.image-popup__title');
    const imagePopupPhoto = document.querySelector('.image-popup__photo');
    photo.addEventListener('click', () => {
        imagePopup.classList.toggle('image-popup_opened');
        imagePopupTitle.textContent = name;
        imagePopupPhoto.alt = name;
        imagePopupPhoto.src = link;
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
    cards.appendChild(card);
}

// Добавление карточки
formAddElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const nameValue = formAddInputPlace.value;
    const linkValue = formAddInputLink.value;
    const newCard = {
        name: nameValue,
        link: linkValue
    }
    cards.before(newCard);
    renderItem(newCard);
    formAddInputPlace.value = "";
    formAddInputLink.value = "";
    popupAddClose();
});

render();