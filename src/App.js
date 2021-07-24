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
  palette: {
    primary: {
      main: "#1B52F4",
    }
  },
  typography: {
    button: {
      textTransform: "none",
      fontSize: "16px",
      fontFamily: "Poppins",
      fontWeight: 400
    },
    h5: {
      fontFamily: "Poppins",
      fontSize: "36px",
      fontWeight: 600
    }
  }
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
