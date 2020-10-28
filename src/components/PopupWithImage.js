import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    open() {
        super.open();
        this._popupSelector.addEventListener('click', () => this.openImagePopup);
    }
}