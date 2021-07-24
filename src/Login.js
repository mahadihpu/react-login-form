import React from "react";
import { IconButton, InputAdornment, InputLabel } from "@material-ui/core";
import {
  Grid,
  Typography,
  Button,
  OutlinedInput,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import background from "./background.png";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import DividerWithText from "./DividerWithText";
import { Link } from "react-router-dom";
import "./App.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
const useStyles = makeStyles({
  body: {
    height: "820px",
  },
  form: {
    width: "100%",
    borderWidth: "12px !important",
  },
  spaceBetween: {
    marginBottom: 30,
    marginTop: 30,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "fixed",
    backgroundSize: "cover",
  },
  box: {
    marginTop: "200px",
    margin: "10%",
  },
  textWhite: {
    color: "white",
  },
  link: {
    textDecoration: "none"
  }
});

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container className={classes.body}>
      <Grid md={7} className={classes.background}></Grid>
      <Grid md={5} xs={12}>
        <Box className={classes.box}>
          <Typography variant="h5" align="center">
            Sign in Now!
          </Typography>
          <Button className="btn btn-secondary" startIcon={<RotateRightIcon />}>
            Sign in with Google
          </Button>
          <DividerWithText>Or</DividerWithText>
          <form noValidate autoComplete="off">
            <InputLabel htmlFor="my-input" className={classes.spaceBetween}>
              E-mail
            </InputLabel>
            <OutlinedInput
              type="email"
              className={classes.form}
            ></OutlinedInput>
            <InputLabel htmlFor="my-input" className={classes.spaceBetween}>
              Password
            </InputLabel>
            <OutlinedInput
              className={classes.form}
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            ></OutlinedInput>
            <a href="https://google.com" className={classes.link}>
            <Typography className="forgot__pass" align="right">
              Forgot my password?
            </Typography>
            </a>
            <Button
              className="btn btn-primary"
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
          </form>
          <Typography align="center" className={classes.spaceBetween}>
            Don't have an account yet?{" "}
            <Link to="/register">Create an Account</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
