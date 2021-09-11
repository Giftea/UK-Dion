import {
  primaryColor,
  warningColor,
  successColor,
  defaultFont,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important",
    },
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: primaryColor + "!important",
      borderWidth: "1px !important",
    },
    "&:after": {
      borderColor: primaryColor,
    },
    "& + p": {
      fontWeight: "300",
    },
  },
  underlineError: {
    "&:after": {
      borderColor: warningColor,
    },
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor,
    },
  },
  labelRoot: {
    ...defaultFont,
    color: grayColor[3] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    backgroundColor: "#fff",
    padding: 3,
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px",
    },
  },
  labelRootError: {
    color: warningColor + " !important",
  },
  labelRootSuccess: {
    color: successColor + " !important",
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "14px",
    position: "relative",
    verticalAlign: "unset",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: grayColor,
    },
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      backgroundColor: whiteColor,
    },
    "&:after": {
      backgroundColor: whiteColor,
    },
  },
  input: {
    color: grayColor,
    height: "unset",
    "&:hover,&:focus": {
      boxShadow: "0px 2px 24px 0px rgba(80, 92, 164, 0.15)",
      border: "1px solid #505CA4",
    },
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1",
    },
    "&::placeholder": {
      color: grayColor,
    },
  },
  whiteInput: {
    "&,&::placeholder": {
      color: whiteColor,
      opacity: "1",
    },
  },
};

export default customInputStyle;
