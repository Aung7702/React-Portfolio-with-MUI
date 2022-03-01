import React, { useState } from "react";
import Layout from "./Layout/Layout";
import { Home, About, Works, Services, Contact } from "./components";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: "dark",
      background: {
        default: "#151a2c",
      },
    },
  });
  const lighttheme = createTheme({
    palette: {
      background: {
        default: "#f5f5f5",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? theme : lighttheme}>
      <CssBaseline>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Home darkMode={darkMode} setDarkMode={setDarkMode} />
          <Works />
          <About />
          <Services />
          <Contact />
        </Layout>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
