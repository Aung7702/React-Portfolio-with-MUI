import React from "react";
import { Grid, Typography, makeStyles, Chip } from "@material-ui/core";
import Layout from "../../Layout/Layout";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  heroContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
  },
  span: {
    color: "#3356C4",
    fontWeight: 500,
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

const Home = ({ setDark, darkMode, setDarkMode }) => {
  const classes = useStyles();

  return (
    <>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.div
        className={classes.heroContainer}
        id="home"
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 2,
          bounce: 0.1,
          stiffness: 120,
        }}
      >
        <Grid container>
          <Grid item xs={12} md={12} xl={12}>
            <Typography variant="h2" color="textPrimary">
              Hello
            </Typography>

            <Typography variant="h2">
              I'm <span className={classes.span}>AUNG</span>
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Junior Frontend Developer
            </Typography>
            <Chip
              label="Contact Me "
              component="a"
              href="#contact"
              clickable
              className={classes.button}
            />
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
};

export default Home;
