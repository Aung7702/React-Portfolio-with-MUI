import React from "react";
import { Drawer, makeStyles, Chip, Switch } from "@material-ui/core";
import {
  HomeRounded,
  Person,
  Apps,
  SettingsApplicationsRounded,
  MessageRounded,
} from "@material-ui/icons";

import { motion } from "framer-motion";

const drawerWidth = "3rem";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  page: {
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
    position: "sticky",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  iconContainer: {
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflowX: "hidden",
  },
  drawerPaperDark: {
    background: "#000",
  },
  links: {
    marginBottom: "1rem",
    background: "none",
    borderRadius: "5px",
    padding: "1rem",
  },
  bglinks: {
    color: "#3356C4",
  },
});

const Layout = ({ children, darkMode, setDarkMode }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        anchor={"left"}
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.iconContainer}>
          <Switch
            checked={darkMode}
            color="primary"
            className={classes.links}
            onChange={() => {
              setDarkMode(!darkMode);
            }}
          />

          <Chip
            label={<HomeRounded />}
            component="a"
            href="#home"
            clickable
            className={classes.links}
          />

          <Chip
            label={<Person />}
            component="a"
            href="#about"
            clickable
            className={classes.links}
          />

          <Chip
            label={<Apps />}
            component="a"
            href="#works"
            clickable
            className={classes.links}
          />

          <Chip
            label={<SettingsApplicationsRounded />}
            component="a"
            href="#services"
            clickable
            className={classes.links}
          />

          <Chip
            label={<MessageRounded />}
            component="a"
            href="#contact"
            clickable
            className={classes.links}
          />
        </div>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
