import React from "react";
import Dash from "../Dash";
import img from "../../img/avatar.jpg";
import {
  Typography,
  makeStyles,
  Grid,
  LinearProgress,
  styled,
} from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  about: {
    margin: "3rem 1rem 0 1rem",
    padding: "1rem",
    borderRadius: "5px",
    opacity: 0,
  },
  titleContainer: {
    fontWeight: 100,
  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: "5px",
    margin: "1rem",
  },
  textContainer: {
    background: "#424242",
    borderRadius: "5px",
  },
  info: {
    margin: "1rem",
    padding: "1rem",
    color: "#f5f5f5",
    textAlign: "justify",
  },
  skill: {
    margin: "1rem",
    padding: "1rem",
    color: "#f5f5f5",
  },
  margin: {
    margin: "0.5rem 0",
  },
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  backgroundColor: theme.palette.mode === "light" ? "#3356C4" : "#151a2c",
  "& .MuiLinearProgress-bar": {
    animationDuration: "8s",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <motion.div
      id="about"
      className={classes.about}
      whileInView={{
        y: -30,
        opacity: 1,
        transition: "opacity 1s 500 ease-in",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Dash />
        <Typography variant="h4" className={classes.titleContainer}>
          About
        </Typography>
      </div>

      <Grid container className={classes.aboutContainer}>
        <Grid container xs={12} md={4} xl={4}>
          <Grid item xs={12} md={4} lg={4}>
            <img src={img} alt="profile" className={classes.image} />
          </Grid>
        </Grid>

        <Grid container xs={12} md={8} xl={8} className={classes.textContainer}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className={classes.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              corrupti vel reiciendis modi placeat vero illum porro amet fuga
              tenetur dolore, tempore repellendus architecto incidunt. Sapiente
              corrupti vel reiciendis modi placeat vero illum porro amet fuga
              adipisci. Nam, ut voluptate.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography className={classes.skill}>
              HTML, CSS
              <BorderLinearProgress
                variant="determinate"
                value={80}
                className={classes.margin}
              />
              JavaScript
              <BorderLinearProgress
                variant="determinate"
                value={70}
                className={classes.margin}
              />
              React.js
              <BorderLinearProgress
                variant="determinate"
                value={70}
                className={classes.margin}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default About;
