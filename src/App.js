import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const theme = createTheme({
  pallete: {
    primary: {
      main: "#efefef",
    },
  },
});
function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
