import Popup from '../components/Popup.js';

export default class PopupDeleteConfirm extends Popup {
  constructor({ popupSelector, onSubmit }) {
    super(popupSelector);
    this._onSubmit = onSubmit;
  }
  //Сохраняем карточку из параметров в свойство
  open(card) {
    this._card = card;
    super.open();
  }
  //Про сабмите передаем в колбек карточку которую сохранили в open
  _handleSubmit() {
    this._onSubmit(this._card);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.querySelector('.popup__save_delete').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    })
  }
}