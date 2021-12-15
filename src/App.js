import React from "react";
import * as styles from "./styles/app.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Messages from "./pages/Messages/Messages";
import AddFriend from "./pages/AddFriend/AddFriend";
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { CookiesProvider } from "react-cookie";

function App() {
  library.add(far, fas);
  
  return (
    <CookiesProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/addfriend">
            <AddFriend />
          </Route>
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
