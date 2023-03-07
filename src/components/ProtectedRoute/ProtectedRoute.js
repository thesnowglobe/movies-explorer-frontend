import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { loggedIn, children } = props;
  
  return (
    <>
    {loggedIn === true ? children : <Navigate to="/" />}
    </>
  );
};

export default ProtectedRoute;