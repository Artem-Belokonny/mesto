console.log('Привет, Артем!');

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.js-profile__open-popup');
const popupCloseButton = popup.querySelector('.popup__close');
const nameInput = popup.querySelector('.popup__name');
const jobInput = popup.querySelector('.popup__job');
const popupName = popup.querySelector('.popup__name');
const popupJob = popup.querySelector('.popup__job');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const formElement = popup.querySelector('.popup__container');

const popupToggle = function() {
    popupName.value = name.textContent;
    popupJob.value = job.textContent;
    popup.classList.toggle('popup_opened')
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = popupName.value;
    job.textContent = popupJob.value;
    popupToggle()
}

formElement.addEventListener('submit', formSubmitHandler);
