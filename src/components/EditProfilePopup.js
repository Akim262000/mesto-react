import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }; 
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);


  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({
      username: name,
      job: description,
    });
  };

return (
  <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
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
              value={name}
              onChange={handleNameChange}
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
              value={description}
              onChange={handleDescriptionChange}
            />
            <span className="popup__input-error popup__input-error_type_description"></span>
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </PopupWithForm>
);
};

export default EditProfilePopup;