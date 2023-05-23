import React from "react";

const Card = ({card}) => {
  return (
      <div className="element">
        <img className="element__image" src={card.link} alt={card.name}/>
        <button type="button" aria-label="Удаление" className="element__button-delete"></button>
        <div className="element__info">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like">
            <button type="button" aria-label="Лайк" className="element__button-like"></button>
            <span className="element__like-number"></span>
          </div>
        </div>
      </div>
  )
} 

export default Card;