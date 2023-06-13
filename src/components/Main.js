import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [ userName, setUserName] = React.useState('');
  const [ userDescription, setUserDescription ] = React.useState('');
  const [ userAvatar, setUserAvatar ] = React.useState('#');
  const [ cards, setCards ] = React.useState([]);

  React.useEffect(() => {
    api.getCurrentUser()
    .then(({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  React.useEffect(() => {
    api.getCards()
    .then((cardsInfo) => {
      Object.entries(cardsInfo)
      setCards(cardsInfo)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__edit-avatar-button" type="button" aria-label="Загрузить аватар" name="editNewAvatar" onClick={onEditAvatar}>
          <img className="profile__avatar" src={`${userAvatar}`} alt="Фото профиля" />
          <div className="profile__avatar-blackout" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{`${userName}`}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile} />
          <p className="profile__subtitle">{`${userDescription}`}</p>
        </div>  
        <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace} />
      </section>
      <section className="elements">
        <ul className="elements__cells">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card} 
              onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;