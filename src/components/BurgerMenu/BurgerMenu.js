import "./BurgerMenu.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }
  const location = useLocation();

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
          <Link className={`burger-menu__link ${location.pathname === "/" ? "burger-menu__link-active" : ""}`} to="/">
            Main
          </Link>

          <Link className={`burger-menu__link ${location.pathname === "/movies" ? "burger-menu__link-active" : ""}`} to="/movies">
            Movies
          </Link>

          <Link className={`burger-menu__link ${location.pathname === "/saved-movies" ? "burger-menu__link-active" : ""}`} to="/saved-movies">
            Saved Movies
          </Link>
          <div className="burger-menu__account">
            <Link className="burger-menu__account-link" to="/profile">
              Profile
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