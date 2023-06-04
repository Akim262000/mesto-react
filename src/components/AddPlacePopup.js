import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onclose, onAddPlace }) => {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.value)
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name: description,
      link: image
    });
  };

  return (
    <PopupWithForm name="new-card" title="Новое место" isOpen={isOpen} onClose={onclose} onSubmit={handleSubmit}>
          <fieldset className="popup__form" name="form" noValidate>
            <input
              className="popup__input popup__input_type_title"
              type="text"
              id="title"
              name="title"
              minLength="2"
              maxLength="30"
              placeholder="Название"
              required
              onChange={handleDescriptionChange}
            />
            <span className="popup__input-error popup__input-error_type_title"></span>
            <input
              className="popup__input popup__input_type_image"
              type="url"
              id="image"
              name="image"
              placeholder="Ссылка на картинку"
              required
              onChange={handleImageChange}
            />
            <span className="popup__input-error popup__input-error_type_image"></span>
            <button type="submit" name="button" className="popup__submit-button">
              Создать
            </button>
          </fieldset>
        </PopupWithForm>
  )
};

export default AddPlacePopup;