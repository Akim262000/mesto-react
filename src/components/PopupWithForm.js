import React from "react";

const popupWithForm = (props) => {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={`${props.name}`} noValidate>
          {props.children} 
        </form>
      </div>
    </div>
  )
}

export default popupWithForm;