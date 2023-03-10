import "./Profile.css";
import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = (props) => {
  const { loggedIn, onUpdateUser, onSignOut } = props;

  const currentUser = useContext(CurrentUserContext);

  const [successMessage, setSuccessMessage] = useState("");

  const { values, handleChange, isValid, resetForm } = useFormWithValidation();

  const checkInputNameValue = values.updateName ?? currentUser.name;
  const checkInputEmailValue = values.updateEmail ?? currentUser.email;
  const isSameInputValueName = currentUser.name === checkInputNameValue;
  const isSameInputValueEmail = currentUser.email === checkInputEmailValue;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    onUpdateUser({
      name: values.updateName ?? currentUser.name,
      email: values.updateEmail ?? currentUser.email
    });
    resetForm();
    setSuccessMessage("Профиль успешно обновлен");
  };

  return (
    <>
    <Header 
      loggedIn={loggedIn}
    />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">
            {`Привет, ${currentUser.name}!`}
          </h1>
          <form 
            className="profile__form"
            onSubmit={handleSubmit}
          >
            <div className="profile__input-wrap">
              <input 
                className={`profile__input ${!isValid ? "profile__input_invalid" : ""}`}
                placeholder="Имя"
                type="text"
                name="updateName"
                id="update-name"
                minLength={2}
                maxLength={30}
                pattern="^[a-zA-Zа-яА-Я\s-]+$"
                value={checkInputNameValue}
                onChange={handleChange}
                required
              />
              <p className="profile__text">
                {currentUser.name}
              </p>
            </div>
            <div className="profile__input-wrap">
              <input
                className={`profile__input ${!isValid ? "profile__input_invalid" : ""}`}
                placeholder="E-mail"
                type="email"
                name="updateEmail"
                id="update-email"
                pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={checkInputEmailValue}
                onChange={handleChange}
                required
              />
              <p className="profile__text">
                {currentUser.email}
              </p>
            </div>
            <span className="profile__status">{successMessage ?? ""}</span>
            <button
              className={`profile__btn ${(isSameInputValueName && isSameInputValueEmail) || !isValid ? "profile__btn_disabled" : ""}`}
              type="submit"
            >
              Редактировать
            </button>
            <Link 
              className="profile__link" 
              to="/"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </Link>
          </form>
        </section>
      </main>
    </>
  )
};

export default Profile;