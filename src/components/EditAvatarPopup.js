import {useRef} from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
    <form className="popup__form" name="form" novalidate>
      <input
        className="popup__input popup__input_type_avatar"
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="popup__input-error popup__input-error_type_avatar"></span>
      <button type="submit" className="popup__submit-button">
        Сохранить
      </button>
    </form>
  </PopupWithForm>
  )
};

export default EditAvatarPopup;