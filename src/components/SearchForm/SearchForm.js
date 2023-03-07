import "./SearchForm.css";
import React, { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

const SearchForm = (props) => {
  const {
    onSearch,
    onCheckboxClick
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [searchError, setSearchError] = useState({
      errorMessage: "",
      isValid: true
  });

  const location = useLocation();

  useEffect(() => {
      if (location.pathname === "/movies") {
          setInputValue(localStorage.getItem('searchWord'));
          setIsChecked(JSON.parse(localStorage.getItem('checkboxStatus')));
      } else if (location.pathname === "/saved-movies") {
          const checkboxStatus = JSON.parse(localStorage.getItem('checkboxStatusSavedMovies'));
          setIsChecked(checkboxStatus);
          onCheckboxClick(checkboxStatus);
      }
  }, [location]);

  useEffect(() => {
      searchError.isValid && setSearchError({errorMessage: "", isValid: true});
  }, []);

  const handleChange = (evt) => {
    setInputValue(evt.target.value);

    if (evt.target.value.length === 0) {
      setSearchError({
        isValid: evt.target.validity.valid,
        errorMessage: "Нужно ввести ключевое слово"
      });
    } else {
      setSearchError({
        isValid: evt.target.validity.valid,
        errorMessage: ""
      });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!inputValue) {
      return setSearchError({
        isValid: false,
        errorMessage: "Нужно ввести ключевое слово"
      });
    }

    onSearch(inputValue, isChecked);
  };

  const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      onCheckboxClick(!isChecked);
  };

  return (
    <div className="search-form">
      <form 
        className="search-form__content"
        name="search-form"
        id="search-form"
        onSubmit={handleSubmit}
      >
        <input 
          className="search-form__input" 
          placeholder="Фильм"
          type="text"
          name="movieSearch"
          id="search-form-input"
          value={inputValue || ""}
          onChange={handleChange}
          required
        />
        <button 
          className="search-form__btn" 
          type="submit"
        >
          Поиск
        </button>
      </form>

      <span className="search-form__error">{searchError.errorMessage}</span>

      <FilterCheckbox 
        isChecked={isChecked}
        onCheckboxClick={handleCheckboxChange}
      />

    </div>
  );
};

export default SearchForm;