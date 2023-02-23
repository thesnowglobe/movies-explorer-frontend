import "./BurgerMenu.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
    <div className={`${menuOpen ? "burger-menu-cover burger-menu-cover_on" : "burger-menu-cover"}`}/>
    <div className={`${menuOpen ? "burger-menu_open" : "burger-menu"}`}>
      <button 
        className={`${menuOpen ? "burger-menu__btn-close" : "burger-menu__btn-open"}`} 
        type="button" 
        onClick={handleMenuClick} 
      />
      {menuOpen ? (
        <div className="burger-menu__content">
          <Link className="burger-menu__link" to="/">
            Главная
          </Link>

          <Link className="burger-menu__link burger-menu__link-active" to="/movies">
            Фильмы
          </Link>

          <Link className="burger-menu__link" to="/saved-movies">
            Сохранённые фильмы
          </Link>
          <div className="burger-menu__account">
            <Link className="burger-menu__account-link" to="/profile">
              Аккаунт
            </Link>
            <button className="navigation__icon" type="button" />
          </div>
        </div>
      ):(
        <></>
      )}
    </div>
    </>
  );
};

export default BurgerMenu;