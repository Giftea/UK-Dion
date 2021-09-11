import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/general/components/authStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Bold from "components/Typography/BoldBlue";
import VeryLightText from "components/Typography/VeryLight";
import logo from "assets/img/UK DION 2.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import key from "assets/img/key 2.png";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(styles);

const ResetPassword = (props) => {
  React.useEffect(() => {
    console.log(props);
  }, []);
  const classes = useStyles();
  return (
    <>
      <div className={classes.loginWrapper}>
        <Hidden only={["sm", "md", "xs"]}>
          <div className={classes.authHeader}>
            <img src={logo} />
          </div>
        </Hidden>
        <div>
          <Hidden only={["lg", "xl"]}>
            <div className={classes.mtText + " " + classes.key}>
              <div>
                {" "}
                <Bold>Reset Password</Bold>
                <VeryLightText>Gain access to all work resources</VeryLightText>
              </div>
              <div>
                <img src={key} alt="" />
              </div>
            </div>
          </Hidden>
          <Hidden only={["sm", "md", "xs"]}>
            <div className={classes.authText}>
              <Bold>Reset Password</Bold>
              <VeryLightText>Gain access to all work resources</VeryLightText>
            </div>
          </Hidden>
          <div className={classes.inputWrapper + " " + classes.padding}>
            <small>Password*</small>
            <CustomInput />
          </div>

          <div className={classes.inputWrapper + " " + classes.padding}>
            <small>Confirm Password*</small>
            <CustomInput />
          </div>
          <div className={classes.padding}>
            <Link to="/auth/success">
              <button className={classes.button}>Reset Password</button>
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

export default ResetPassword;

ResetPassword.propTypes = {
  setReset: PropTypes.func,
};
