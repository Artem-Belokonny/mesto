export default class UserInfo {
  constructor({ userName, userAbout, userAvatar }) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._userAvatar = userAvatar;
    this._popupName = document.querySelector(".popup__input_edit_name");
    this._popupAbout = document.querySelector(".popup__input_edit_about");
  }

  getUserInfo() {
    this._popupName.value = this._userName.textContent;
    this._popupAbout.value = this._userAbout.textContent;
  }

  setUserInfo(result) {
    this._userName.textContent = result.name;
    this._userAbout.textContent = result.about;
    this._userAvatar.src = result.avatar;
  }
}
