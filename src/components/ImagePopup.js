function ImagePopup({ name, card, onClose }) {
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      onClose();
    }
  }
  return (
    <div className={`popup popup_type_${name} ${Object.keys(card).length && ('popup_opened')}`}
    onClick={handleOverlayClose}>
      <div className="popup__container-photo">
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose} />
        <img className="popup__photo" src={card.link} alt={`Фото ${card.name}`} />
        <h3 className="popup__caption">{card.name}</h3>
      </div>
    </div>
  )
}

export default ImagePopup;