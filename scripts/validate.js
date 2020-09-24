// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
// });

const formElement = document.querySelector('.popup');
const formInput = document.querySelector('.popup__input');

formElement.addEventListener('submit', function (evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
});

formElement.addEventListener('input', function (evt) {
    // Выведем в консоль значение свойства validity.valid поля ввода, 
    // на котором слушаем событие input
    // я навесил обработчик на форму (делегирование) а не на инпут строку
    console.log(evt.target.validity.valid);
});

// почему когда я назначаю переменную через квери селектор олл он выводит ошибку?
// и вешает только на 1ый попап-форму
