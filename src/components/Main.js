import React, { useContext } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) => {
  const currentUser = useContext(CurrentUserContext);
  const {name, about, avatar} = currentUser;
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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => 
          state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function handleCardDelete(cardId){
    api
    .deleteCard(cardId)
    .then(() => {
      setCards((cards) => cards.filter(card => card._id !== cardId));
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    });
  }

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
              <p className="profile__description">{about}</p>
            </div>
          </div>
          <button type="button" aria-label="Добавить" className="profile__add-button" onClick={onAddPlace}></button>
        </section>

        <section className="elements">
          {cards.map((card) => {
            return <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>;
          })}
        </section>
      </main>
    </>
  );
};

export default Main;
