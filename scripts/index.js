const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const popupName = popup.querySelector('.popup__input_name');
const popupJob = popup.querySelector('.popup__input_job');
const formElement = popup.querySelector('.popup__container');

function profileDate() {
    popupName.value = name.textContent;
    popupJob.value = job.textContent;
}

function saveFormData() {
    name.textContent = popupName.value;
    job.textContent = popupJob.value;
}

function popupOpen(event) {
    profileDate();
    popup.classList.add('popup_opened');
    
}

function popupClose(event) {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    saveFormData();
    popupClose();
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);