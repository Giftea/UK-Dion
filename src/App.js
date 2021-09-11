import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from "layouts/Admin.js";
import AuthComponent from "layouts/Auth.js";
import AuthApi from "./AuthApi";
import Cookies from "js-cookie";

const App = () => {
  const [auth, setAuth] = useState(false);
  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };
  React.useEffect(() => {
    readCookie();
  }, []);
  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthApi.Provider>
  );
};

const Routes = () => {
  const Auth = React.useContext(AuthApi);

  return (
    <Switch>
      <ProtectedRoute path="/admin" auth={Auth.auth} component={Admin} />
      <ProtectedLogin path="/auth" auth={Auth.auth} component={AuthComponent} />
    </Switch>
  );
};

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/auth/login" />)}
    />
  );
};

// eslint-disable-next-line react/prop-types
const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/admin" />)}
    />
  );
};

export default App;
