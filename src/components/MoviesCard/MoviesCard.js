import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";
import {BEATFILM_URL, getMovieDuration} from "../../utils/constants";

const MoviesCard = (props) => {
  const {
    movie,
    onSaveMovie,
    onDeleteMovie,
    savedMovies
  } = props;

  const location = useLocation();
  
  const isSaved = savedMovies.find((item) => item.movieId === movie.id);

  const handleSaveMovie = () => {
    if (!isSaved) {
      onSaveMovie(movie);
    } else {
      onDeleteMovie(movie);
    }
  };

  const handleDeleteMovie = () => {
    onDeleteMovie(movie);
  };

  return (
    <li className="movies-card">
      <img 
        className="movies-card__image" 
        src={movie.image.url ? `${BEATFILM_URL}/${movie.image.url}` : movie.image}
        alt={`Movie: ${movie.nameRU}`} 
      />

      <div className="movies-card__content">
        <h2 className="movies-card__title">
          {movie.nameRU}
        </h2>
        <p className="movies-card__duration">
          {getMovieDuration(movie.duration, movie)}
        </p>
      </div>

      {location.pathname === "/movies" ?
        <button 
          className={`movies-card__btn ${isSaved ? "movies-card__btn-saved" : "movies-card__btn-save"}`}
          type="button"
          onClick={handleSaveMovie}
        >
          {isSaved ? '' : 'Сохранить'}
        </button>
       :
        <button 
          className="movies-card__btn movies-card__btn-delete"
          type="button"
          onClick={handleDeleteMovie}
        />
      }
    </li>
  );
};

export default MoviesCard;