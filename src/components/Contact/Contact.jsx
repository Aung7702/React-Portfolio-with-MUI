import React from "react";
import Dash from "../Dash";
import {
  Typography,
  makeStyles,
  Grid,
  TextField,
  Chip,
} from "@material-ui/core";
import {
  EmailRounded,
  Facebook,
  GitHub,
  LinkedIn,
  PhoneEnabledOutlined,
} from "@material-ui/icons";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  contact: {
    margin: "3rem 1rem 0 1rem",
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
  span: {
    color: "#3356C4",
    fontWeight: 400,
  },
  leftGridContainer: {
    padding: "1rem",
    color: "#f5f5f5",
  },
  leftContent: {
    background: "#424242",
    height: "21rem",
    borderRadius: "5px",
  },
  padding: {
    padding: "2rem",
  },
  text: {
    fontSize: 28,
    fontWeight: 400,
    padding: "1rem",
  },
  iconDiv: {
    padding: "1rem",
  },
  iconDivContainer: {
    display: "flex",
    alignItems: "start",
  },
  link: {
    color: "#3356C4",
    marginRight: "2rem",
  },
  linkIcon: {
    fontSize: 35,
  },
  contactIconContainer: {
    display: "flex",
    padding: "1rem",
  },
  contactIcon: {
    fontSize: 25,
    marginRight: "0.5rem",
    color: "#3356C4",
  },
  formGrid: {
    padding: " 0 1rem",
  },
  button: {
    margin: "1rem 0",
    borderRadius: "5px",
    textTransform: "capitalize",
    background: "#3356C4",
    color: "#f5f5f5",
    height: "2.5rem",
    padding: "0.5rem",
    fontSize: "16px",
    width: "100%",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.contact}>
      <div className={classes.titleContainer}>
        <Dash />
        <Typography variant="h4" className={classes.title}>
          Contact <span className={classes.span}>Now</span>
        </Typography>
      </div>

      <Grid container>
        <Grid item xs={12} md={6} lg={6} className={classes.leftGridContainer}>
          <div className={classes.leftContent}>
            <div className={classes.padding}>
              <Typography variant="h5" className={classes.text}>
                Let's talk about
                <span className={classes.span}> Everything!</span>
              </Typography>

              <div className={classes.iconDiv}>
                <div className={classes.iconDivContainer}>
                  <motion.a
                    whileHover={{ scale: 1.3 }}
                    href="https://www.facebook.com/aungwin.phyo.2"
                    className={classes.link}
                  >
                    <Facebook className={classes.linkIcon} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.3 }}
                    href="https://github.com/Aung7702"
                    className={classes.link}
                  >
                    <GitHub className={classes.linkIcon} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.3 }}
                    href="https://www.linkedin.com/in/aung-win-phyo-857557a222"
                    className={classes.link}
                  >
                    <LinkedIn className={classes.linkIcon} />
                  </motion.a>
                </div>
              </div>

              <div className={classes.contactIconContainer}>
                <PhoneEnabledOutlined className={classes.contactIcon} />
                <Typography> + 959 764 460 677</Typography>
              </div>
              <div className={classes.contactIconContainer}>
                <EmailRounded className={classes.contactIcon} />
                <Typography>hobbyag4@gmail.com</Typography>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={6} className={classes.formGrid}>
          <div>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>

          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>

          <div>
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
          </div>
          <Chip
            label="Send"
            component="a"
            href="#contact"
            clickable
            className={classes.button}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
