import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
    padding: theme.spacing(2, 4, 3),
    maxWidth: 600
  },
  root: {
    width: "100%"
  }
}));

const EditProfileModal = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

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
      email
    };
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setEmail("");
    handleClose();
  };

  return (
    <>
      <Button type="button" color="Primary" onClick={handleOpen}>
        Edit Profile
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
              <Typography>Edit your MotiveRate Profile</Typography>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className={classes.root}>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Change your Username -{" "}
                      {props.currentUser.attributes.username}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <TextField
                      name="username"
                      label="New Username"
                      variant="outlined"
                      value={username}
                      onChange={handleUsername}
                    />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Change your Password
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <TextField
                      type="password"
                      name="password"
                      variant="outlined"
                      label="New Password"
                      value={password}
                      onChange={handlePassword}
                    />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <Typography className={classes.heading} >
                  {props.currentUser.attributes.fullName}
                </Typography>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Change your Name -{" "}
                      {props.currentUser.attributes.full_name}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <TextField
                      name="firstName"
                      label="New First Name"
                      variant="outlined"
                      value={firstName}
                      onChange={handleFirstName}
                    />
                    <TextField
                      name="lastName"
                      label="New Last Name"
                      variant="outlined"
                      value={lastName}
                      onChange={handleLastName}
                    />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Change your Email - {props.currentUser.attributes.email}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <TextField
                      name="email"
                      label="New Email"
                      variant="outlined"
                      value={email}
                      onChange={handleEmail}
                    />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default EditProfileModal;
