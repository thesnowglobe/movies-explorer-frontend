import "./AboutMe.css";
import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import frog from "../../images/frog.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__heading" id="student">
        Студент
      </h2>
      <figure className="about-me__figure">
        <figcaption className="about-me__caption">
          <h3 className="about-me__title">
            Алёна
          </h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 23 года
          </p>
          <p className="about-me__text">
            Начинающий фронтенд-разработчик который в свободное время рисует,
            учит иностранные языки и путешествует.
          </p>
          <a className="about-me__link" href="https://github.com/aly0m" target="_blank" rel="noreferrer">
            Github
          </a>
        </figcaption>
        <img className="about-me__image" src={frog} alt="cute frog" />
      </figure>
      <Portfolio />
    </section>
  )
};

export default AboutMe;