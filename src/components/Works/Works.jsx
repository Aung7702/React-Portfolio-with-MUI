import React, { useEffect } from "react";
import data from "./data";
import Dash from "../Dash";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Typography,
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles({
  works: {
    margin: "1rem 1rem 2rem 1rem",
    padding: "1rem",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: 100,
  },
  workContainer: {
    padding: "1rem",
  },
  name: {
    fontWeight: 400,
    fontSize: 22,
  },
  button: {
    marginTop: "1rem",
    borderRadius: "5px",
    textTransform: "capitalize",
    background: "#3356C4",
    color: "#f5f5f5",
    height: "2.5rem",
    padding: "0.5rem",
    fontSize: "16px",
  },
});

const Works = () => {
  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "200vw" });
    }
  }, [inView]);

  return (
    <div id="works" className={classes.works} ref={ref}>
      <div className={classes.titleContainer}>
        <Dash />
        <Typography variant="h4" className={classes.title}>
          Works
        </Typography>
      </div>

      <motion.div animate={animation}>
        <Grid container>
          {data.map((item) => {
            const { id, name, text, link, image } = item;
            return (
              <Grid
                animate={animation}
                item
                xs={12}
                md={4}
                xl={4}
                key={id}
                className={classes.workContainer}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Card elevation={10}>
                    <CardMedia
                      image={image}
                      alt={name}
                      component="img"
                      width={100}
                      height={200}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={classes.name}
                      >
                        {name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {text}
                      </Typography>

                      <CardActions>
                        <Chip
                          label="View Demo"
                          component="a"
                          href={link}
                          clickable
                          className={classes.button}
                        />
                      </CardActions>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </div>
  );
};

export default Works;
