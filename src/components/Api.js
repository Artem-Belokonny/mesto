import { handleOriginalResponse } from "../utils/utils.js";

export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        alert(err);
      });
  }

  patchUserData(userData) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    })
      .then(handleOriginalResponse)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        alert(err);
      });
  }

  patchUserAvatar(userAvatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: userAvatar.link,
      }),
    })
      .then(handleOriginalResponse)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        alert(err);
      });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert(err);
      });
  }

  postNewCard(cardData) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert(err);
      });
  }

  deleteCard(cardData) {
    return fetch(`${this.baseUrl}/cards/${cardData}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert(err);
      });
  }

  putLike(_id) {
    return fetch(`${this.baseUrl}/cards/likes/${_id}`, {
      method: "PUT",
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert(err);
      });
  }

  deleteLike(_id) {
    return fetch(`${this.baseUrl}/cards/likes/${_id}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(handleOriginalResponse)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        alert(err);
      });
  }
}
