import "./Promo.css";
import React from "react";
import NavTab from "../NavTab/NavTab";

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Academic project of a student of the Web Development faculty.
      </h1>
      <NavTab />
    </section>
  )
};

export default Promo;
