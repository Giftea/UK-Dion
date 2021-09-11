import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/general/components/authStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Bold from "components/Typography/BoldBlue";
import VeryLightText from "components/Typography/VeryLight";
import logo from "assets/img/UK DION 2.png";
import { Link } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Typography from "components/Typography/White";
import QuoteText from "components/Typography/Quote";
import AuthApi from "AuthApi";
import Cookies from "js-cookie";
import { login } from "utils/auth-api";

const useStyles = makeStyles(styles);

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [loading, setLoading] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const Auth = React.useContext(AuthApi);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 9000);
    }
    const res = await login({
      email: values.email,
      password: values.password,
    });
    if (res.data.status === true) {
      Auth.setAuth(true);
      Cookies.set("user", "loginTrue");
    }
    setValues({
      email: "",
      password: "",
      showPassword: false,
    });
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
        <Hidden only={["lg", "xl"]}>
          <div className={classes.quote}>
            <Typography>
              You never really learn much from hearing yourself speak.
            </Typography>
            <QuoteText>-George Clooney</QuoteText>
          </div>
        </Hidden>
        <div>
          <div className={classes.authText}>
            <Bold>Login</Bold>
            <VeryLightText>Gain access to all work resources</VeryLightText>
          </div>
          <div className={classes.inputWrapper}>
            <small>Work Email*</small>
            <CustomInput
              required
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className={classes.inputWrapper}>
            <small>Password*</small>
            <OutlinedInput
              id="outlined-adornment-password"
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
          <div>
            <Link to="/auth/confirmation">
              <p className={classes.forgotPassword}>Forgot Password ?</p>
            </Link>
          </div>
          <div>
            <button
              className={classes.button}
              disabled={loading}
              onClick={handleSubmit}
            >
              Log In
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

export default Login;
