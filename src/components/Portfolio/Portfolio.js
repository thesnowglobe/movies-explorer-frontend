import "./Portfolio.css";
import React from "react";
import portfolio from "../../utils/portfolio";
import arrow from "../../images/arrow.svg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">
        Портфолио
      </h3>
      <ul className="portfolio__links">
        {portfolio.map((item) => (
          <li className="portfolio__link" key={item.id}>
          <a className="portfolio__item" href={item.link}>
            {item.name}
            <img className="portfolio__icon" src={arrow} alt="arrow" />
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;