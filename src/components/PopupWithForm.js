import React from "react";

function PopupWithForm({ isOpen, onClose, name, title, buttonText, children, userForm }) {
  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      onClose();
    }
  };
    
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keyup', handleEscClose);
    return () => {
      document.removeEventListener('keyup', handleEscClose);
    }
  }, [isOpen]);

  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onClick={handleOverlayClose}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose} />
        <form className="popup__content" method="post" novalidate name={userForm}>
          <h3 className="popup__title">{`${title}`}</h3>
          <fieldset className="popup__fieldset">
            {children}
            <button className="popup__save-button" type="submit" name="saveButton">{`${buttonText}`}</button>
          </fieldset>
        </form>
      </div>
    </div>
  )  
}

export default PopupWithForm;