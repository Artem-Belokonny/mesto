import Popup from '../components/Popup.js';

export default class PopupDeleteConfirm extends Popup {
  constructor({ popupSelector, onSubmit }) {
    super(popupSelector);
    this._onSubmit = onSubmit;
  }

  open(card) {
    this._card = card;
    super.open();
  }

  _handleSubmit() {
    this._onSubmit(this._card);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    })
  }
}