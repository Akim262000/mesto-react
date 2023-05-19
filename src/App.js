import React from 'react';
import logo from './images/logo.svg';

function App() {
  return (
  <div>
      <div className="page">
    <header className="header">
      <img className="header__logo" src={logo} alt="картинка Место"/>
    </header>
    <main>
      <section className="profile">
        <div className="profile__card">
          <img className="profile__avatar" src="<%=require('./images/image.jpg')%>" alt="Картинка аватарка"/>
          <button className="profile__avatar-button"></button>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button type="button" aria-label="Редактировать" className="profile__edit-button"></button>
            <p className="profile__description"></p>
          </div>
        </div>
        <button type="button" aria-label="Добавить" className="profile__add-button"></button>
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
    <footer className="footer">
      <p className="footer__copyright">&#xA9; 2023 Mesto Russia</p>
    </footer>

    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h3 className="popup__title">Обновить аватар</h3>
        <form className="popup__form" name="form" novalidate>
            <input className="popup__input popup__input_type_avatar" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error popup__input-error_type_avatar"></span>
            <button type="submit" className="popup__submit-button">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_profile">
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close"></button>
        <h3 className="popup__title">Редактировать профиль</h3>
        <form className="popup__form" name="form" novalidate>
            <input className="popup__input popup__input_type_name" type="text" id="name" name="name" minlength="2" maxlength="40" placeholder="Имя" required/>
            <span className="popup__input-error popup__input-error_type_name"></span>
            <input className="popup__input popup__input_type_description" type="text" id="description" name="description" minlength="2" maxlength="200" placeholder="Описание" required/>
            <span className="popup__input-error popup__input-error_type_description"></span>
            <button type="submit" className="popup__submit-button">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_element">
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close"></button>
        <h3 className="popup__title">Новое место</h3>
        <form className="popup__form" name="form" novalidate>
            <input className="popup__input popup__input_type_title" type="text" id="title" name="title" minlength="2" maxlength="30" placeholder="Название" required/>
            <span className="popup__input-error popup__input-error_type_title"></span>
            <input className="popup__input popup__input_type_image" type="url" id="image" name="image" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error popup__input-error_type_image"></span>
            <button type="submit" name="button" className="popup__submit-button">Создать</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_image">
      <div className="popup__image-container">
        <button type="button" aria-label="Закрыть" className="popup__close"></button>
        <figure className="popup__figure">
          <img className="popup__image"/>
          <figcaption className="popup__figcaption"></figcaption>
        </figure>
      </div>
    </div>

    <div className="popup popup_type_delete">
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close"></button>
        <h3 className="popup__title">Вы уверены?</h3>
        <form className="popup__form" action="#" name="form" novalidate>
          <button type="submit" className="popup__submit-button">Да</button>
        </form>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
