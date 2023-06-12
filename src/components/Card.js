function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__cell" key={props.card._id}>
      <img className="elements__item" src={props.card.link} alt={`Фото ${props.card.name}`} onClick={handleClick} />
      <button className="elements__delete-button" type="button" name="deleteButton" aria-label="Удалить карточку" />
      <div className="elements__description">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button className="elements__like-button" type="button" name="reactionButton" aria-label="Поставить лайк" />
          <p className="elements__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;