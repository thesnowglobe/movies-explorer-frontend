import "./Movies.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const Movies = (props) => {
  const {
    onSearch,
    savedMovies,
    foundMovies,
    onSaveMovie,
    onDeleteMovie,
    onCheckboxClick,
    preloader,
    loggedIn,
    message,
  } = props;
  
  return (
    <>
    <Header loggedIn={loggedIn}/>

    <section className="movies">
      <SearchForm 
        onSearch={onSearch}
        onCheckboxClick={onCheckboxClick}
      />
      {preloader ? (
        <Preloader />
      ) : (
        <MoviesCardList 
          foundMovies={foundMovies}
          savedMovies={savedMovies}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          message={message}
        />
      )}
    </section>

    <Footer />
    </>
  );
};

export default Movies;