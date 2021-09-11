const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
};

const defaultFont = {
  fontFamily: "Montserrat",
  fontWeight: "300",
  lineHeight: "1.5em",
};

const primaryColor = "rgba(27, 32, 86, 1)";
const warningColor = "rgba(253, 55, 55, 1)";
const successColor = "rgba(11, 167, 89, 1)";
const lightBlue = "rgba(80, 92, 164, 1)";
const darkColor = "rgba(51, 51, 51, 1)";
const grayColor = "#888";
const blackColor = "#000";
const whiteColor = "#FFF";

const boxShadow = {
  boxShadow: "rgba(80, 92, 164, 0.1)",
};

const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  // borderTop: "1px solid " + grayColor[10],
  height: "auto",
  ...defaultFont,
};

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px",
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "rgba(80, 92, 164, 0.1)",
  borderRadius: "3px",
  // color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor,
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
};

const title = {
  // color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    // color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1",
  },
};

const cardTitle = {
  ...title,
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": {
    ...title,
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto",
  },
};

const cardSubtitle = {
  marginTop: "-.375rem",
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem",
  },
};

export {
  drawerWidth,
  transition,
  container,
  boxShadow,
  card,
  defaultFont,
  blackColor,
  whiteColor,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardSubtitle,
  cardLink,
  primaryColor,
  warningColor,
  successColor,
  lightBlue,
  darkColor,
  grayColor,
};
