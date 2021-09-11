import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Background from "components/Auth/Background.js";
import AuthForm from "components/Auth/AuthForm.js";
import styles from "assets/jss/general/layouts/authStyle.js";
import { authRoutes } from "routes.js";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles(styles);

const switchRoutes = (
  <Switch>
    {authRoutes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/auth" to="/auth/login" />
  </Switch>
);

function Auth() {
  // styles
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AuthForm>{switchRoutes}</AuthForm>
      <Hidden only={["sm", "md", "xs"]}>
        <Background />
      </Hidden>
    </div>
  );
}

export default withWidth()(Auth);

Auth.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
