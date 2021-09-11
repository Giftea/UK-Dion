import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import QuoteText from "components/Typography/Quote";
import styles from "assets/jss/general/components/authStyle.js";
import image from "assets/img/auth.png";
import key from "assets/img/key 1.png";
import { useLocation } from "react-router-dom";

import vector from "assets/img/Vector.png";
import Typography from "components/Typography/White";
import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

const Background = () => {
  let location = useLocation();

  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.authImg}>
        <img src={location.pathname === "/auth/reset-password" ? key : image} />
      </div>
      <div className={classes.quote}>
        <Typography>
          You never really learn much from hearing yourself speak.
        </Typography>
        <QuoteText>-George Clooney</QuoteText>
      </div>
      <div className={classes.vector}>
        <img src={vector} />
      </div>
    </div>
  );
};

export default Background;
Background.propTypes = {
  reset: PropTypes.bool,
};
