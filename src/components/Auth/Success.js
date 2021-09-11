import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/general/components/authStyle.js";
import VeryLightText from "components/Typography/VeryLight";
import logo from "assets/img/UK DION 2.png";
import padlock from "assets/img/padlock 1.png";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Success = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.loginWrapper}>
        <Hidden only={["sm", "md", "xs"]}>
          <div className={classes.authHeader}>
            <img src={logo} />
          </div>
        </Hidden>
        <div className={classes.padlock}>
          <div className={classes.mt + " " + classes.mb}>
            <img src={padlock} alt="" />
          </div>
          <div>
            <Link to="/auth/login">
              <button className={classes.button}>Proceed to Login</button>
            </Link>
          </div>
        </div>
        <div className={classes.authFooter}>
          <VeryLightText>
            © 2021 uk-dion group. All rights reserved.
          </VeryLightText>
        </div>
      </div>
    </>
  );
};

export default Success;
