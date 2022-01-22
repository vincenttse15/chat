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
import { useSelector } from "react-redux";
import { createConnection } from "./utility/Notifications";
import Cookies from "universal-cookie";

function App() {
  library.add(far, fas);
  const user = useSelector(state => state.userReducer);
  const [ws, setWs] = React.useState(null);
  const cookies = new Cookies();
  
  React.useEffect(() => {
    if (user.firstName !== '') {
      setWs(createConnection());
    }
  }, [user.firstName]);

  return (
    <CookiesProvider>
      <Router>
        <Navbar ws={ws} setWs={setWs}/>

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
