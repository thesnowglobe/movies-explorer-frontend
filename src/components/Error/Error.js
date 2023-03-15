import "./Error.css";
import React from "react";

const Error = (props) => {
  const { className = "", errorMessage = "", id = "" } = props;

  return (
    <span className={`error ${className}`} id={id}>
      {errorMessage}
    </span>
  );
};

export default Error;