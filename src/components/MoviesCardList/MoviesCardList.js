import "./MoviesCardList.css";
import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { 
  DEVICE_WIDTH_1280,
  DEVICE_WIDTH_1101,
  DEVICE_WIDTH_625,
  DEVICE_WIDTH_320,
  SEARCH_RENDER_DEFAULT,
  SEARCH_RENDER_768,
  SEARCH_RENDER_320,
  LOAD_RENDER_DEFAULT,
  LOAD_RENDER_MIN,
  CARD_LIMIT,
} from "../../utils/constants";
import { useLocation } from "react-router-dom";

const MoviesCardList = (props) => {
  const {
    foundMovies,
    savedMovies,
    onSaveMovie,
    onDeleteMovie,
    message,
  } = props;

  const location = useLocation();

  const [cardLimit, setCardLimit] = useState(SEARCH_RENDER_DEFAULT);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [deviceWidth, setDeviceWidth] = useState(DEVICE_WIDTH_1280);

  useEffect(() => {
    setMovies();
  }, [cardLimit]);

  useEffect(() => {
    updateDeviceWidth();
  }, [deviceWidth, foundMovies, location])

  useEffect(() => {
    addUpdateResize();
    return () => removeUpdateResize();
  }, [deviceWidth]);

  const setMovies = () => {
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < cardLimit) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);
  };

  const setFoundMovies = (amount) => {
    setCardLimit(amount);
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < amount) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);
  };

  const updateDeviceWidth = () => {
    if (deviceWidth >= DEVICE_WIDTH_1101) {
      setFoundMovies(SEARCH_RENDER_DEFAULT);
    } else if (deviceWidth >= DEVICE_WIDTH_625) {
      setFoundMovies(SEARCH_RENDER_768);
    } else if (deviceWidth >= DEVICE_WIDTH_320) {
      setFoundMovies(SEARCH_RENDER_320);
    }

    if (location.pathname === "/saved-movies") {
      setCardLimit(CARD_LIMIT);
    }
  };

  const handleUpdateResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  const addUpdateResize = () => {
    window.addEventListener("resize", handleUpdateResize);
  };

  const removeUpdateResize = () => {
    window.removeEventListener("resize", handleUpdateResize);
  };

  const handleAddButtonClick = () => {
    if (deviceWidth >= DEVICE_WIDTH_1101) {
      setCardLimit(cardLimit + LOAD_RENDER_DEFAULT);
    } else if (deviceWidth >= DEVICE_WIDTH_625) {
      setCardLimit(cardLimit + LOAD_RENDER_MIN);
    } else if (deviceWidth >= DEVICE_WIDTH_320) {
      setCardLimit(cardLimit + LOAD_RENDER_MIN);
    } else {
      setCardLimit(cardLimit + LOAD_RENDER_DEFAULT);
    }
  };

  return (
    <div className="movies-card-list">
      <p className="movies-card-list__not-found">{message ? message : ""}</p>
      <ul className="movies-card-list__content">

        {location.pathname === "/movies" ? (
          renderedMovies.map((item) => (
            <MoviesCard 
              movie={item}
              key={item.id || item._id}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
            />
          ))
        ) : (
          savedMovies.map((item) => (
            <MoviesCard 
              movie={item}
              key={item.id || item._id}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
            />
          ))
        )}
        
      </ul>

      {foundMovies.length !== renderedMovies.length ? (
        <button 
          className="movies-card-list__btn" 
          type="button"
          onClick={handleAddButtonClick}
        >
          Ещё
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default MoviesCardList;