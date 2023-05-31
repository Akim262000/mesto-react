import React, { useContext } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) => {
  const {name, description, avatar} = useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__card">
            <img className="profile__avatar" src={avatar} alt="Картинка аватарка" />
            <button className="profile__avatar-button" onClick={onEditAvatar}></button>
            <div className="profile__info">
              <h1 className="profile__name">{name}</h1>
              <button type="button" aria-label="Редактировать" className="profile__edit-button" onClick={onEditProfile}></button>
              <p className="profile__description">{description}</p>
            </div>
          </div>
          <button type="button" aria-label="Добавить" className="profile__add-button" onClick={onAddPlace}></button>
        </section>

        <section className="elements">
          {cards.map((card) => {
            return <Card key={card._id} card={card} onCardClick={onCardClick} />;
          })}
        </section>
      </main>
    </>
  );
};

export default Main;
