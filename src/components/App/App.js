import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { REGEX_URL, SHORT_MOVIE } from "../../utils/constants";
import * as auth from "../../utils/auth";
import * as mainApi from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";

const App = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: ""
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  const [preloader, setPreloader] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('jwt')) {
      handleSignOut();
    }
  }, []);

  useEffect (() => {
    if (loggedIn && currentUser) {
      handleGetSavedMovies();
    }
  }, [loggedIn, currentUser]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('loadedMovies'))) {
      if (localStorage.getItem('loadedMovies')) {
        setAllMovies(JSON.parse(localStorage.getItem('loadedMovies')));
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('searchedMovies') && localStorage.getItem('checkboxStatus')) {
      const checkboxStatus = JSON.parse(localStorage.getItem('checkboxStatus'));
      handleMoviesCheckbox(checkboxStatus);
    }
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.getUserInfo()
        .then((res) => {
          if (res) {
            setCurrentUser({
              name: res.name,
              email: res.email,
              _id: res._id
            });
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          if (err.status === 401) {
            handleSignOut();
          } else {
            handleSignOut();
          }
        });
    }
  };

  const handleRegister = ({name, email, password}) => {
    auth.register({name, email, password})
      .then(() => {
        handleLogin({email, password});
        navigate("/movies");
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  const handleLogin = ({email, password}) => {
    auth.login({email, password})
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem('jwt', res.token);
          checkToken();
          navigate("/movies");
        }
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({ name: "", email: "", _id: "" });
    setFoundMovies([]);
    setAllMovies([]);
    setSavedMovies([]);
    navigate("/");
  };

  const handleUpdateUserInfo = ({name, email}) => {
    mainApi.updateUserInfo({name, email})
      .then((res) => {
        setCurrentUser({
          name: res.name,
          email: res.email
        });
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  const handleSearchMovies = (movie, checked) => {
    if (allMovies.length !== 0) {
      const searchMovies = allMovies.filter((item) =>
        item.nameRU.toLowerCase().includes(movie.toLowerCase()));

      if (searchMovies.length === 0) {
        setMessage('По вашему запросу ничего не найдено');
      } else {
        localStorage.setItem('searchWord', movie);
        localStorage.setItem('searchedMovies', JSON.stringify(searchMovies));
        localStorage.setItem('checkboxStatus', JSON.stringify(checked));

        setFoundMovies(searchMovies);
      }
    } else {
      setPreloader(true);
      moviesApi.getInitialMovies()
        .then((requestMovies) => {
          requestMovies = requestMovies.map((item) => {
            if(!REGEX_URL.test(item.trailerLink)) {
              item.trailerLink = 'https://www.youtube.com';
            }
            return item;
          });

          const searchMovies = requestMovies.filter((item) =>
            item.nameRU.toLowerCase().includes(movie.toLowerCase()));

          if (searchMovies.length === 0) {
            setMessage('По вашему запросу ничего не найдено');
          } else {
            localStorage.setItem('loadedMovies', JSON.stringify(requestMovies));
            setAllMovies(requestMovies);
            localStorage.setItem('searchWord', movie);
            localStorage.setItem('searchedMovies', JSON.stringify(searchMovies));
            localStorage.setItem('checkboxStatus', JSON.stringify(checked));
            setFoundMovies(searchMovies);
          }
        })
        .catch((err) => console.log(`Error: ${err}`))
        .finally(() => setPreloader(false));
    }
  };

  const handleMoviesCheckbox = (checkbox) => {
    let shortMovies;
    let movies = JSON.parse(localStorage.getItem('searchedMovies'));

    if (checkbox) {
      shortMovies = movies.filter((item) => item.duration <= SHORT_MOVIE);
    } else if (!checkbox) {
      shortMovies = movies;
    }
    setFoundMovies(shortMovies);
    localStorage.setItem('checkboxStatus', JSON.stringify(checkbox));
  };

  const handleSaveMovie = (movie) => {
    mainApi.createMovie(movie)
      .then((res) => {
        setSavedMovies(savedMovies.concat(res));
        setSavedMoviesList(savedMoviesList.concat(res));
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        const updatedMoviesList = savedMovies.filter((item) => item._id !== movie._id);
        setSavedMovies(updatedMoviesList);
        setSavedMoviesList(savedMoviesList.filter((item) => item._id !== movie._id));
      })
      .catch((err) => console.log(`Error: ${err}`));
  };


  const handleGetSavedMovies = () => {
    mainApi.getSavedMovies()
      .then((res) => {
        const savedMovies = res.filter((movie) => movie.owner === currentUser._id);
        setSavedMovies(savedMovies);
        setSavedMoviesList(savedMovies);
      })
      .catch((err) => console.log(`Error: ${err}`));
  };


  const handleSearchSavedMovies= (req) => {
    setPreloader(true);
    const searchMovies = savedMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(req.toLowerCase()));

    if (searchMovies.length === 0) {
      setMessage('По вашему запросу ничего не найдено');
      setPreloader(false);
    } else {
      setSavedMovies(searchMovies);
      setPreloader(false);
    }
  };

  const handleSavedMoviesCheckbox = (checkbox) => {
    if (checkbox) {
      setSavedMovies(savedMovies.filter((item) => item.duration <= SHORT_MOVIE));
    } else if (!checkbox) {
      setSavedMovies(savedMoviesList);
    }
  };


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route 
          path="/" 
          element={
            <Main 
              loggedIn={loggedIn}
            />
          } 
        />

        <Route
          path="/movies/*" 
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies 
                onSearch={handleSearchMovies}
                savedMovies={savedMovies}
                foundMovies={foundMovies}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                onCheckboxClick={handleMoviesCheckbox}
                preloader={preloader}
                loggedIn={loggedIn}
                message={message}
              />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/saved-movies/*"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                onSearch={handleSearchSavedMovies}
                savedMovies={savedMovies}
                foundMovies={foundMovies}
                onDeleteMovie={handleDeleteMovie}
                onCheckboxClick={handleSavedMoviesCheckbox}
                preloader={preloader}
                loggedIn={loggedIn}
                message={message}
              />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/profile" 
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile 
                onUpdateUser={handleUpdateUserInfo}
                onSignOut={handleSignOut}
                loggedIn={loggedIn}
              />
            </ProtectedRoute>
          } 
        />

        <Route path="/signin" element={<Login onLogin={handleLogin} />} />

        <Route path="/signup" element={<Register onRegister={handleRegister} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
};

export default App;