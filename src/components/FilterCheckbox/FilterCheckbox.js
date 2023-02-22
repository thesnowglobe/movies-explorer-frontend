import "./FilterCheckbox.css";
import React from "react";

const FilterCheckbox = () => {
  return (
    <label className="filter-checkbox">
      <div className="filter-checkbox__content">
        <input className="filter-checkbox__box" type="checkbox" />
        <span className="filter-checkbox__tumbler" />
      </div>
      <p className="filter-checkbox__text">Короткометражки</p>
    </label>
  );
};

export default FilterCheckbox;