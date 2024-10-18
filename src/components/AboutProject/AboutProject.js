import "./AboutProject.css";
import React from "react";


const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="about-project__heading" id="about-project">
        About
      </h2>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__title">
            The diploma project included 5 stages
          </h3>
          <p className="about-project__text">
            Making a plan, working on the backend, layout,
            adding functionality, and final tweaks.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__title">
            It took 5 weeks to complete the diploma
          </h3>
          <p className="about-project__text">
            Each stage had a soft and hard deadline,
            that had to be met in order to succeed.
          </p>
        </div>
      </div>
      <div className="about-project__figures">
        <figure className="about-project__figure">
          <p className="about-project__progress about-project__progress-backend">
            1 week
          </p>
          <figcaption className="about-project__caption">
            Backend
          </figcaption>
        </figure>
        <figure className="about-project__figure">
          <p className="about-project__progress about-project__progress-frontend">
            4 weeks
          </p>
          <figcaption className="about-project__caption">
            Frontend
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutProject;