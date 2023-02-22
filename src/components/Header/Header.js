import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = (props) => {
  const { isLoggedIn = true } = props;
  const { isBurgerMenu = true } = props;

  return (
    <header className="header">
      <Link className="header__logo-link" to="/">
        <img className="header__logo" src={logo} alt="green circle" />
      </Link>
      {!isLoggedIn ? (
        <>
          <div className="header__content">
            <NavLink className="header__link" to="/signup">
              Регистрация
            </NavLink>
            <NavLink className="header__link header__link-login" to="/signin">
              Войти
            </NavLink>
          </div>
        </>
      ) : isLoggedIn && !isBurgerMenu ? (
        <>
          <div className="header__auth-content">
            <Navigation />
          </div>
        </>
      ): (
        <BurgerMenu />
      )} 
    </header>
  );
};



export default Header;