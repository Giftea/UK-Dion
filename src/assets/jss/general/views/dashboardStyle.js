import { whiteColor, grayColor } from "assets/jss/material-dashboard-react.js";

const dashboardStyle = (theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
    marginBottom: "15px",
  },
  flexPlain: {
    display: "flex",
  },
  ml: {
    marginLeft: "20px",
    marginTop: "0",
    marginBottom: "7px",
  },
  mt: {
    marginTop: "20px",
  },
  mb: {
    marginBottom: "20px",
  },
  notification: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row-reverse",
    },
  },
  notificationImg: {
    width: "300px",
  },
  imgh: {
    height: "35px",
  },
  square: {
    height: "48px",
  },
  cardCategory: {
    color: grayColor,
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  cardCategoryWhite: {
    // color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor,
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor,
      fontWeight: "400",
      lineHeight: "1",
    },
  },
});

export default dashboardStyle;
