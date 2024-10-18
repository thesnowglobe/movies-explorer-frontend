import "./NotFound.css";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="notfound">
      <h1 className="notfound__title">
        404
      </h1>
      <p className="notfound__subtitle">
        Page not found
      </p>
      <Link to="/" className="notfound__link">
        Back
      </Link>
    </main>
  );
};

export default NotFound;