import React from "react";
import data from "./data";
import Dash from "../Dash";
import { motion } from "framer-motion";

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
  workContainer: {
    padding: "1rem",
    transform: "translateX(-100px)",
  },

  title: {
    fontWeight: 100,
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

  return (
    <div id="works" className={classes.works}>
      <div className={classes.titleContainer}>
        <Dash />
        <Typography variant="h4" className={classes.title}>
          Works
        </Typography>
      </div>

      <Grid container>
        {data.map((item) => {
          const { id, name, text, link, image } = item;
          return (
            <Grid
              item
              xs={12}
              md={4}
              xl={4}
              key={id}
              className={classes.workContainer}
            >
              <motion.div
                className={classes.animation}
                whileHover={{ scale: 1.1 }}
                whileInView={{
                  x: 100,
                }}
              >
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
    </div>
  );
};

export default Works;
