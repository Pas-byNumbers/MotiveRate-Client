import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { userCreate } from "../../actions/userActions";
import { Typography } from "@material-ui/core";

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

function SignUpModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [score] = React.useState(0);
  const [tier] = React.useState("wanderer");

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

  const handleFirstName = event => {
    setFirstName(event.target.value);
  };

  const handleLastName = event => {
    setLastName(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const userInfo = {
      username,
      password,
      first_name: firstName,
      last_name: lastName,
      email,
      score,
      tier
    };
    props.userCreate(userInfo);
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setEmail("");
    handleClose();
  };

  return (
    <>
      <Button type="button" color="inherit" onClick={handleOpen}>
        Register
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
              <Typography>Register a MotiveRate Account</Typography>
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

              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={handleFirstName}
              />

              <br />
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={handleLastName}
              />

              <br />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmail}
              />

              <br />
              <br />
              <TextField
                disabled
                name="score"
                label="Score"
                value={score}
                id="standard-disabled"
                variant="outlined"
              />

              {/* <br />
              <TextField
                disabled
                name="tier"
                label="Tier"
                value={tier.charAt(0).toUpperCase() + tier.slice(1)}
                id="standard-disabled"
                variant="outlined"
              /> */}

              <br />
              <br />

              <Button type="submit">Register</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  userCreate: userInfo => dispatch(userCreate(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUpModal);
