import type { Component } from "solid-js";
import { createTheme, ThemeProvider } from "@suid/material";

import MainContainer from "./components/MainContainer";

const darkMode = createTheme({
  palette: {
    mode: "dark",
  },
});

const App: Component = () => {
  return (
    <ThemeProvider theme={darkMode}>
      <div>
        <MainContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
