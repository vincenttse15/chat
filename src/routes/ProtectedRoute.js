import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const ProtectedRoute = (props) => {
  const cookies = new Cookies();

  const {
    component,
    path
  } = props;

  if (!cookies.get("session")) {
    return <Redirect to="/login" />
  }

  return <Route component={component} path={path} />
};

export default ProtectedRoute;