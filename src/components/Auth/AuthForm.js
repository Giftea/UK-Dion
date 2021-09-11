import React from "react";
import styles from "assets/jss/general/components/authStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

const AuthForm = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.authWrapper}>{children}</div>;
};

export default AuthForm;
AuthForm.propTypes = {
  children: PropTypes.node,
};
