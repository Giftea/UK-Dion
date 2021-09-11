import { defaultFont } from "assets/jss/material-dashboard-react.js";

const typographyStyle = (theme) => ({
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px",
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px",
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
  },
  quoteText: {
    color: "rgba(80, 92, 164, 1)",
    fontSize: "14px",
    marginTop: "15px",
    [theme.breakpoints.up("lg")]: {
      color: "#fff",
      fontSize: "17px",
    },
  },
  whiteText: {
    color: "rgba(186, 191, 222, 1)",
    fontSize: "12px",
  },
  lightText: {
    color: "rgba(80, 92, 164, 1)",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  veryLightText: {
    color: "rgba(80, 92, 164, 0.5)",
    letterSpacing: "1px",
    fontSize: "14px",
    marginBottom: "10px",
  },
  warningText: {
    color: "rgba(253, 55, 55, 1)",
    letterSpacing: "1px",
  },
  successText: {
    color: "rgba(11, 167, 89, 1)",
    letterSpacing: "1px",
    fontSize: "14px",
    textAlign: "right",
  },
  darkText: {
    color: "rgba(27, 32, 86, 1)",
    marginTop: "10px",
    marginBottom: "10px",
    letterSpacing: "1px",
  },
  boldText: {
    color: "rgba(27, 32, 86, 1)",
    marginBottom: "10px",
    fontSize: "20px",
    letterSpacing: "1px",
    fontWeight: "bold",
    [theme.breakpoints.up("lg")]: {
      fontSize: "24px",
    },
  },
});

export default typographyStyle;
