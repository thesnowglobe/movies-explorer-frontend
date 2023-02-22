import "./Techs.css";
import React from "react";
import techs from "../../utils/techs";

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="techs__heading" id="techs">
        Технологии
      </h2>
      <h3 className="techs__title">
        7 технологий
      </h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили
        в дипломном проекте.
      </p>
      <ul className="techs__list">
        {techs.map((tech) => (
          <li className={"techs__item"} key={tech.id}>
            <p className={"tech"}>
              {tech.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Techs;