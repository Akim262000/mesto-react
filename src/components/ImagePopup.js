import React from "react";

const ImagePopup = () => {
  return (
    <div className="popup popup_type_image">
    <div className="popup__image-container">
      <button type="button" aria-label="Закрыть" className="popup__close"></button>
      <figure className="popup__figure">
        <img className="popup__image"/>
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
    </div>
  </div>
  )
}

export default ImagePopup;