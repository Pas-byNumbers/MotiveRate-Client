import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { userLogInFetch } from "../actions/userActions";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function LogInModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault();
    const userCredentials = { username, password };
    props.userLogInFetch(userCredentials);
    setUsername("");
    setPassword("");
    handleClose();
    history.push("/profile")
  };

  return (
    <>
      <Button type="button" color="inherit" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              <Typography>Log in to MotiveRate</Typography>
            </h2>
            <form onSubmit={handleSubmit}>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={handleUsername}
              />

              <br />

              <TextField
                type="password"
                name="password"
                variant="outlined"
                label="Password"
                value={password}
                onChange={handlePassword}
              />
              <br />
              <br />

              <Button type="submit">Log in</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  userLogInFetch: userInfo => dispatch(userLogInFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(LogInModal);
