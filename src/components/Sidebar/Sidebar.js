/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";

import styles from "assets/jss/general/components/sidebarStyle.js";
import AuthApi from "AuthApi";
import Cookies from "js-cookie";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const Auth = React.useContext(AuthApi);
  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user");
  };
  const { color, logo, logoText, routes,lroutes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true,
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path),
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        });
        return (
          <>
            <NavLink
              to={prop.layout + prop.path}
              className={activePro + classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem button className={classes.itemLink + listItemClasses}>
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames(classes.itemText, whiteFontClasses, {
                    [classes.itemTextRTL]: props.rtlActive,
                  })}
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
          </>
        );
      })}
    </List>
  );

  var lowerLinks = (
    <List className={classes.list + " " + classes.mt}>
      {lroutes.map((prop, key) => {
        var listItemClasses;

        listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        });

        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        });
        return (
          <>
            <NavLink
              to={prop.layout + prop.path}
              className={ classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem button className={classes.itemLink + listItemClasses}>
                <ListItemText
                  primary={props.rtlActive ? prop.rtlName : prop.name}
                  className={classNames(classes.itemText, whiteFontClasses, {
                    [classes.itemTextRTL]: props.rtlActive,
                  })}
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
          </>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <div className={classes.logoImage}>
        <img src={logo} alt="logo" className={classes.img} />
      </div>
      {logoText}
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <AdminNavbarLinks />
            {links}
          </div>
          <div className={classes.background} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {links}
            {lowerLinks}
            <div className={classes.item}>
              <div className={classes.itemLink}>
                <button onClick={handleOnClick} className={classes.below}>
                  Sign Out
                </button>
                <span class="MuiTouchRipple-root"></span>
              </div>{" "}
            </div>
          </div>

          <div className={classes.background} />
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
