import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import mrLogo from "../assets/motiveratelogo_v1.png";
import LogInModal from "./userModals/LogInModal";
import SignUpModal from "./userModals/SignUpModal";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },

  barColor: {
    backgroundColor: "#024b34c2"
  }
}));

export default function WelcomeNavBar(props) {
  const classes = useStyles();

  const welcomeButtons = () => (
    <div>
      {/* <Button color="inherit">Features</Button> */}
      <SignUpModal />
      <LogInModal />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.barColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            href="/"
          >
            <img
              src={mrLogo}
              alt="motiverate logo"
              className="mrLogo"
              height="40px"
              width="60px"
            ></img>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MotiveRate
          </Typography>

          {welcomeButtons()}
        </Toolbar>
      </AppBar>
    </div>
  );
}
