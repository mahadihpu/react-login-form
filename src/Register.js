import React from "react";
import { InputLabel } from "@material-ui/core";
import {
  Grid,
  Typography,
  Button,
  OutlinedInput,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import background from "./background__registe.png";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import DividerWithText from "./DividerWithText";
import { Link } from "react-router-dom";
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
  btn: {
    position: "relative",
    width: "100%",
    margin: "40px 0",
    padding: "15px 0",
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
});

const Register = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.body}>
      <Grid md={7} className={classes.background}></Grid>
      <Grid md={5} xs={12}>
        <Box className={classes.box}>
          <Typography variant="h5" align="center">
            Sign up Now!
          </Typography>
          <Button
            className={classes.btn}
            variant="contained"
            startIcon={<RotateRightIcon />}
          >
            Register with Google
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
             Name
            </InputLabel>
            <OutlinedInput
              type="text"
              className={classes.form}
            ></OutlinedInput>
            <InputLabel htmlFor="my-input" className={classes.spaceBetween}>
              Password
            </InputLabel>
            <OutlinedInput
              type="password"
              className={classes.form}
            ></OutlinedInput>
            <Button className={classes.btn} variant="contained" color="secondary">
              Sign up
            </Button>
          </form>
          <Typography align="center" className={classes.spaceBetween}>Already have an account? <Link to="/">Login Now</Link></Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
