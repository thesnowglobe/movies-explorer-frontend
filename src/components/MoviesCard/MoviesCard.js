import "./MoviesCard.css";
import React from "react";
import movie from "../../images/movie.png";

const MoviesCard = (props) => {
  const { isMovieSaved = true } = props;

  return (
    <li className="movies-card">
      <img className="movies-card__image" src={movie} alt="movie poster" />
      <div className="movies-card__content">
        <h2 className="movies-card__title">
          33 слова о дизайне
        </h2>
        <p className="movies-card__duration">
          1ч 17м
        </p>
      </div>
      <button className={`movies-card__btn ${isMovieSaved ? "movies-card__btn-saved movies-card__btn-delete" : "movies-card__btn-save"}`}
        type="button"
      >
        {isMovieSaved ? '' : 'Сохранить'}
      </button>
    </li>
  );
};

export default MoviesCard;