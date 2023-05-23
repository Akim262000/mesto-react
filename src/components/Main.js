import React from "react";
import api from "../utils/Api";
import Card from "./Card";

const Main = (props) => {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
    });

    React.useEffect(() => {
      api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
    });

  
  return (
  <>  
    <main>
      <section className="profile">
        <div className="profile__card">
          <img className="profile__avatar" src={userAvatar} alt="Картинка аватарка"/>
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" aria-label="Редактировать" className="profile__edit-button" onClick={props.onEditProfile}></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button type="button" aria-label="Добавить" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      
      <section className="elements">
        {cards.map((card) => {
          return <Card
            key={card.id}
            card={card}
          />
        })}
      </section>
    </main>
  </>
  );
  };

export default Main;