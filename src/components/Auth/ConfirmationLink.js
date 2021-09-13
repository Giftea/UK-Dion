import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/general/components/authStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Bold from "components/Typography/BoldBlue";
import VeryLightText from "components/Typography/VeryLight";
import logo from "assets/img/UK DION 2.png";
import { useHistory } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Confirmation = () => {
  let history = useHistory();
  const classes = useStyles();
  const { loading } = useStoreState((state) => state.auth);
  const { forgotPassword } = useStoreActions((state) => state.auth);
  const [errorText, setErrorText] = React.useState("");
  const [values, setValues] = React.useState({
    email: "",
  });

  const handleSubmit = async () => {
    if (values.email === "") {
      setErrorText(" Please Enter Your Email Address");
    }

    forgotPassword({
      data: values,
      callback: () => {
        history.push("/auth/reset-password");
      },
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
            <div className={classes.mtText}>
              <Bold>Send confirmation link</Bold>
              <VeryLightText>Gain access to all work resources</VeryLightText>
            </div>
          </Hidden>
          <Hidden only={["sm", "md", "xs"]}>
            <div className={classes.mb}>
              <Bold>Send confirmation link</Bold>
              <VeryLightText>Gain access to all work resources</VeryLightText>
            </div>
          </Hidden>
          <div className={classes.inputWrapper + " " + classes.mb}>
            <small>Work Email*</small>
            <CustomInput
              error
              helperText={errorText}
              required
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange("email")}
            />
          </div>
          <div>
            <button className={classes.button} onClick={handleSubmit}>
              Send Confirmation
            </button>
          </div>
        </div>
        <div className={classes.authFooter2}>
          <VeryLightText>
            © 2021 uk-dion group. All rights reserved.
          </VeryLightText>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
