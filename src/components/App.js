import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  } 

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true)
    setSelectedCard(card);
  }

  return (
    
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onClose={closeAllPopups}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="editProfile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <div className="popup__field">
            <input 
              id="username-input"
              type="text"
              name="name"
              defaultValue=""
              placeholder="Имя"
              className="popup__input edit-form__input edit-form__input_type_username"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="username-input-error popup__input-error" />
          </div>
          <div className="popup__field">
            <input 
              id="description-input"
              type="text" 
              name="description"
              defaultValue=""
              placeholder="О себе"
              className="popup__input edit-form__input edit-form__input_type_description"
              required
              minLength="2"
              maxLength="200" 
            />
            <span className="description-input-error popup__input-error"></span>
          </div>
        </PopupWithForm>
        <PopupWithForm
          name="addPlace"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <div className="popup__field">
            <input  
              id="title-input"
              type="text"
              name="name"
              placeholder="Название"
              className="popup__input item-form__input item-form__input_type_title"
              required
              minLength="2"
              maxLength="30" 
            />
            <span className="title-input-error popup__input-error" />
          </div>
          <div className="popup__field">
            <input  
              id="link-input"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              className="popup__input item-form__input item-form__input_type_link"
              required 
            />
            <span className="link-input-error popup__input-error" />
          </div>
        </PopupWithForm>  
        <PopupWithForm
          name="editAvatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
          userForm="avatarForm"
        >  
          <div className="popup__field">
            <input 
              id="avatar-input"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_input_link"
              required 
            />
            <span className="avatar-input-error popup__input-error" />
          </div>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;