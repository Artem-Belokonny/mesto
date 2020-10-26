export default class UserInfo {
    constructor({userName, userJob}) {
        this._userName = userName;
        this._userJob = userJob;
        this._popupName = document.querySelector('.popup__input_edit_name');
        this._popupJob = document.querySelector('.popup__input_edit_job')
    }

    getUserInfo () {
        this._popupName.value = this._userName.textContent;
        this._popupJob.value = this._userJob.textContent;
    }

    setUserInfo () {
        this._userName.textContent = this._popupName.value;
        this._userJob.textContent = this._popupJob.value;
    }
}