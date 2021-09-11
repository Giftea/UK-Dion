import { whiteColor } from "assets/jss/material-dashboard-react.js";

const cardStyle = {
  card: {
    border: "0",
    cursor: "pointer",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    background: whiteColor,
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    boxShadow: "0px 4px 64px 0px rgba(80, 92, 164, 0.1)",
    transition: "box-shadow 1s ease",
    "&:hover,&:focus": {
      boxShadow: "0px 4px 72px 0px rgba(80, 92, 164, 0.3)",
      border: "1px solid rgba(80, 92, 164, 0.2)",
    },
  },
  cardPlain: {
    background: "transparent",
    // boxShadow: "none",
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center",
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px",
    },
  },
};

export default cardStyle;
