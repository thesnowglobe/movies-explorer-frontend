import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  return (
    <div className="movies-card-list">
      <p className="movies-card-list__not-found">Фильмы не найдены</p>
      <ul className="movies-card-list__content">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button className="movies-card-list__btn" type="button">
        Ещё
      </button>
    </div>
  );
};

export default MoviesCardList;