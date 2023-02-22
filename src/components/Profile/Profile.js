import "./Profile.css";
import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
    <Header 
      isLoggedIn = {true}
    />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">
          Привет, Виталий!
          </h1>
          <form className="profile__form">
            <div className="profile__input-wrap">
              <input className="profile__input" placeholder="Имя"/>
              <p className="profile__text">
                Виталий
              </p>
            </div>
            <div className="profile__input-wrap">
              <input className="profile__input" placeholder="E-mail"/>
              <p className="profile__text">
                pochta@yandex.ru
              </p>
            </div>
            <button className="profile__btn" type="submit">
              Редактировать
            </button>
            <Link className="profile__link" to="/">
              Выйти из аккаунта
            </Link>
          </form>
        </section>
      </main>
    </>
  )
};

export default Profile;