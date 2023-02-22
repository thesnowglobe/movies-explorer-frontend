import "./FilterCheckbox.css";
import React from "react";

const FilterCheckbox = () => {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__content">
        <input className="filter-checkbox__box" type="checkbox" />
        <span className="filter-checkbox__tumbler" />
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;