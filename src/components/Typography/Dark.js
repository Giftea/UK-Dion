import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/general/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Dark(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.darkText}>
      {children}
    </div>
  );
}

Dark.propTypes = {
  children: PropTypes.node,
};
