import "./AboutProject.css";
import React from "react";


const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="about-project__heading" id="about-project">
        О проекте
      </h2>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__figures">
        <figure className="about-project__figure">
          <p className="about-project__progress about-project__progress-backend">
            1 неделя
          </p>
          <figcaption className="about-project__caption">
            Back-end
          </figcaption>
        </figure>
        <figure className="about-project__figure">
          <p className="about-project__progress about-project__progress-frontend">
            4 недели
          </p>
          <figcaption className="about-project__caption">
            Front-end
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutProject;