import React from "react";
import * as styles from "./styles/app.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Messages from "./pages/Messages/Messages";
import AddFriend from "./pages/AddFriend/AddFriend";
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { CookiesProvider } from "react-cookie";
import { createConnection } from "./utility/Notifications";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useDispatch } from "react-redux";
import { loadFriendsAndRequests } from "./redux/actions/friendActions";
import { login } from "./redux/actions/userActions";
import Cookies from "universal-cookie";

function App() {
  library.add(far, fas);
  const [ws, setWs] = React.useState(null);
  const dispatch = useDispatch();

  const cookieMemo = React.useMemo(() => {
    const cookies = new Cookies();
    return cookies.get("session");
  }, []);

  React.useEffect(() => {
    if (cookieMemo) {
      setWs(createConnection());
      dispatch(login());
      dispatch(loadFriendsAndRequests());
    }
  }, [cookieMemo, dispatch]);

  return (
    <CookiesProvider>
      <Router>
        <Navbar ws={ws} setWs={setWs}/>

        <Switch>
          <PublicRoute path="/home" component={Home} />
          <Route path="/login">
            <Login setWs={setWs} />
          </Route>
          <PublicRoute path="/signup" component={Signup} />
          <ProtectedRoute path="/messages" component={Messages} />
          <ProtectedRoute path="/addfriend" component={AddFriend} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
