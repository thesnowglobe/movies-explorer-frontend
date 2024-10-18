import "./Techs.css";
import React from "react";
import techs from "../../utils/techs";

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="techs__heading" id="techs">
        Technologies
      </h2>
      <h3 className="techs__title">
        7 technologies
      </h3>
      <p className="techs__text">
        In the web development course we mastered technologies
        that we applied in our diploma project.
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