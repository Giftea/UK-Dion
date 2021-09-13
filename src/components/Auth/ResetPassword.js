import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/general/components/authStyle.js";
import Bold from "components/Typography/BoldBlue";
import VeryLightText from "components/Typography/VeryLight";
import logo from "assets/img/UK DION 2.png";
import PropTypes from "prop-types";
import key from "assets/img/key 2.png";
import { Hidden } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

const ResetPassword = () => {
  let history = useHistory();
  const [values, setValues] = React.useState({
    password: "",
    password_confirmation: "",
    token: "",
    email: "",
    showPassword: false,
  });
  const readCookie = () => {
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    if (token && email) {
      setValues({ ...values, email: email, token: token });
    }
  };
  React.useEffect(() => {
    readCookie();
  }, []);
  const { loading } = useStoreState((state) => state.auth);
  const { resetPassword } = useStoreActions((state) => state.auth);
  const classes = useStyles();

  const handleSubmit = async () => {
    resetPassword({
      data: values,
      callback: () => {
        history.push("/auth/success");
      },
    });
    console.log(values);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={classes.wrapper}> {loading && <LinearProgress />}</div>
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
          <div
            className={
              classes.inputWrapper + " " + classes.padding + " " + classes.mb
            }
          >
            <small>Password*</small>
            <OutlinedInput
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <p className={classes.forgotPassword}>Hide</p>
                    ) : (
                      <p className={classes.forgotPassword}>Show</p>
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </div>

          <div
            className={
              classes.inputWrapper + " " + classes.padding + " " + classes.mb
            }
          >
            <small>Confirm Password*</small>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password_confirmation}
              onChange={handleChange("password_confirmation")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <p className={classes.forgotPassword}>Hide</p>
                    ) : (
                      <p className={classes.forgotPassword}>Show</p>
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </div>
          <div className={classes.padding}>
            <button className={classes.button} onClick={handleSubmit}>
              Reset Password
            </button>
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
