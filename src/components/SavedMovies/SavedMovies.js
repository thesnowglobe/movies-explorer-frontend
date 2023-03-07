import "./SavedMovies.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";


const SavedMovies = (props) => {
  const { 
    onSearch,
    savedMovies,
    foundMovies,
    onDeleteMovie,
    onCheckboxClick,
    preloader,
    loggedIn,
    message
  } = props;

  return (
    <>
    <Header loggedIn={loggedIn} />

    <section className="saved-movies">
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
          onDeleteMovie={onDeleteMovie}
          message={message}
        />
      )}
    </section>

    <Footer />
    </>
  )
};

export default SavedMovies;