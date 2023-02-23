import "./SearchForm.css";
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  return (
    <div className="search-form">
      <form className="search-form__content">
        <input className="search-form__input" placeholder="Фильм" required></input>
        <button className="search-form__btn" type="submit">Поиск</button>
      </form>

      <FilterCheckbox />
    </div>
  );
};

export default SearchForm;