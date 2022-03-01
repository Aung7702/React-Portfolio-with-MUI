import React from "react";
import Dash from "../Dash";
import { Typography, makeStyles, Grid, Paper } from "@material-ui/core";
import {
  CodeRounded,
  PhoneAndroidRounded,
  StyleRounded,
} from "@material-ui/icons";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  services: {
    margin: "2rem 1rem 0 1rem",
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
  padding: {
    padding: "0 1rem 0 0.5rem",
  },
  service: {
    borderLeft: "5px solid #3356C4",
    borderRadius: 0,
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  serviceTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
    padding: "2rem 1.5rem 0rem 1rem",
  },
  serviceName: {
    fontWeight: 400,
  },
  serviceText: {
    padding: "2rem 1.5rem 1rem 1rem",
    textAlign: "center",
  },
  icon: {
    color: "#3356C4",
  },
});

const Services = () => {
  const classes = useStyles();

  return (
    <div id="services" className={classes.services}>
      <div className={classes.titleContainer}>
        <Dash />
        <Typography variant="h4" className={classes.title}>
          Services
        </Typography>
      </div>

      <Grid container>
        <Grid item xs={12} md={4} xl={4} className={classes.padding}>
          <motion.div whileHover={{ y: -10 }}>
            <Paper elevation={10} className={classes.service}>
              <div className={classes.serviceTitleContainer}>
                <StyleRounded fontSize="large" className={classes.icon} />
                <Typography variant="h6" className={classes.serviceName}>
                  Web Design
                </Typography>
              </div>
              <Typography className={classes.serviceText} color="textSecondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum
                vel doloremque corrupti, tempora libero voluptates nostrum
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4} xl={4} className={classes.padding}>
          <motion.div whileHover={{ y: -10 }}>
            <Paper elevation={10} className={classes.service}>
              <div className={classes.serviceTitleContainer}>
                <CodeRounded fontSize="large" className={classes.icon} />
                <Typography variant="h6" className={classes.serviceName}>
                  Technology
                </Typography>
              </div>

              <Typography className={classes.serviceText} color="textSecondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum
                vel doloremque corrupti, tempora libero voluptates nostrum
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4} xl={4} className={classes.padding}>
          <motion.div whileHover={{ y: -10 }}>
            <Paper elevation={10} className={classes.service}>
              <div className={classes.serviceTitleContainer}>
                <PhoneAndroidRounded
                  fontSize="large"
                  className={classes.icon}
                />
                <Typography variant="h6" className={classes.serviceName}>
                  Always Responsive
                </Typography>
              </div>

              <Typography className={classes.serviceText} color="textSecondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum
                vel doloremque corrupti, tempora libero voluptates nostrum
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
