import "./Navigation.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__movies">
        <Link className="navigation__movies-link" to="/movies">
            Фильмы
        </Link>

        <NavLink className="navigation__movies-link" to="/saved-movies">
            Сохранённые фильмы
        </NavLink>
      </div>

      <div className="navigation__account">
        <NavLink className="navigation__account-link" to="/profile">
            Аккаунт
        </NavLink>
        <button className="navigation__icon"/>
      </div>
    </nav>
  );
};

export default Navigation;