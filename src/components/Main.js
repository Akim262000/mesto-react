import React from "react";
import logoAvatar from '../images/image.jpg'

const Main = (props) => {
  return (
  <>  
    <main>
      <section className="profile">
        <div className="profile__card">
          <img className="profile__avatar" src={logoAvatar} alt="Картинка аватарка"/>
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button type="button" aria-label="Редактировать" className="profile__edit-button" onClick={props.onEditProfile}></button>
            <p className="profile__description"></p>
          </div>
        </div>
        <button type="button" aria-label="Добавить" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      
      <section className="elements">
        <template className="element-template">
          <div className="element">
            <img className="element__image"/>
            <button type="button" aria-label="Удаление" className="element__button-delete"></button>
            <div className="element__info">
              <h2 className="element__title"></h2>
              <div className="element__like">
                <button type="button" aria-label="Лайк" className="element__button-like"></button>
                <span className="element__like-number"></span>
              </div>
            </div>
          </div>
        </template>
      </section>
    </main>
  </>
  )
}

export default Main;