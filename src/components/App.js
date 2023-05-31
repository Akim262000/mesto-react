import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
    cohort: "",
  });

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <form className="popup__form" name="form" novalidate>
            <input
              className="popup__input popup__input_type_avatar"
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error popup__input-error_type_avatar"></span>
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </PopupWithForm>

        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <form className="popup__form" name="form" novalidate>
            <input
              className="popup__input popup__input_type_name"
              type="text"
              id="name"
              name="name"
              minlength="2"
              maxlength="40"
              placeholder="Имя"
              required
            />
            <span className="popup__input-error popup__input-error_type_name"></span>
            <input
              className="popup__input popup__input_type_description"
              type="text"
              id="description"
              name="description"
              minlength="2"
              maxlength="200"
              placeholder="Описание"
              required
            />
            <span className="popup__input-error popup__input-error_type_description"></span>
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </PopupWithForm>

        <PopupWithForm name="new-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <form className="popup__form" name="form" novalidate>
            <input
              className="popup__input popup__input_type_title"
              type="text"
              id="title"
              name="title"
              minlength="2"
              maxlength="30"
              placeholder="Название"
              required
            />
            <span className="popup__input-error popup__input-error_type_title"></span>
            <input
              className="popup__input popup__input_type_image"
              type="url"
              id="image"
              name="image"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error popup__input-error_type_image"></span>
            <button type="submit" name="button" className="popup__submit-button">
              Создать
            </button>
          </form>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <div className="popup popup_type_delete">
          <div className="popup__container">
            <button type="button" aria-label="Закрыть" className="popup__close"></button>
            <h3 className="popup__title">Вы уверены?</h3>
            <form className="popup__form" action="#" name="form" novalidate>
              <button type="submit" className="popup__submit-button">
                Да
              </button>
            </form>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
