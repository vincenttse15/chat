import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const user = useSelector(state => state.user);

  const {
    component,
    path
  } = props;

  if (user.firstName === "") {
    return <Redirect to="/login" />
  }

  return <Route component={component} path={path} />
};

export default ProtectedRoute;