import React from "react";

function ImagePopup({ isOpen, name, card, onClose }) {

  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      onClose();
    }
  }

  React.useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        onClose();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

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