import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; 2023
        </p>
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://github.com/aly0m" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
  </footer>
  );
};

export default Footer;