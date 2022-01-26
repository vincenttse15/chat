import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const PublicRoute = (props) => {
  const cookies = new Cookies();

  const {
    component,
    path,
  } = props;

  if (cookies.get("session")) {
    return <Redirect to="/messages" />
  }

  return <Route component={component} path={path} />
};

export default PublicRoute;