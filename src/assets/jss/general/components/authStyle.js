import { primaryColor } from "assets/jss/material-dashboard-react";

const authStyle = (theme) => ({
  background: {
    backgroundColor: primaryColor,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50vw",
  },
  buttonProgress: {
    color: primaryColor,
    position: "absolute",
    backgroundColor: "rgba(186, 191, 222, 1)",
    top: "30%",
    left: "45%",
    padding: "20px",
  },
  wrapper: {
    position: "absolute",
    width: "100%",
    left: "-1%",
  },
  quote: {
    borderLeft: "2px solid rgba(80, 92, 164, 1)",
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "center",
    margin: "20px",
    marginTop: "50px",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      borderLeft: "2px solid white",
      width: "60%",
    },
  },
  authImg: {
    display: "flex",
    justifyContent: "center",
  },
  vector: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "80%",
  },
  authWrapper: {
    backgroundColor: "#fff",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      width: "50vw",
    },
  },
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  forgotPassword: {
    cursor: "pointer",
    textAlign: "right",
    fontSize: "10px",
    color: "rgba(80, 92, 164, 1)",
  },
  button: {
    width: "100%",
    backgroundColor: "rgba(80, 92, 164, 1)",
    height: "50px",
    color: "#fff",
    borderRadius: "8px",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
  authText: {
    marginBottom: "20px",
  },
  authHeader: {
    width: "100%",
    paddingLeft: "100px",
    paddingTop: "40px",
  },
  authFooter: {
    width: "100%",
    paddingLeft: "60px",
    paddingTop: "100px",
  },
  authFooter2: {
    width: "100%",
    paddingLeft: "100px",
    paddingTop: "200px",
  },
  mb: {
    marginBottom: "40px",
  },
  mtText: {
    marginTop: "100px",
  },
  mt: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
  },
  padlock: {
    width: "50%",
  },
  key: {
    display: "flex",
    padding: "20px",
  },
  padding: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "0px",
    paddingBottom: "0px",
  },
});

export default authStyle;
