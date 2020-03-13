import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { userDelete } from "../../actions/userActions";
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

const DeleteUserModal = (props) => {
  const classes = useStyles();
  const history = useHistory()
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault()
    const userInfo = {
      userId: props.currentUser.id
    }
    props.userDelete(userInfo)
    handleClose()
    props.handleLogOut()
    history.push("/")
  }

  return (
<>
      <Button type="button" color="inherit" onClick={handleOpen}>
        Delete Account
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
            <h6 id="transition-modal-title">
              <Typography>This is an irreversible action. Are you sure?</Typography>
            </h6>
            <form onSubmit={handleSubmit}>
              

              <br />
              <br />

              <Button type="submit" color="secondary">Yes, Delete my account permanently</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  userDelete: userInfo => dispatch(userDelete(userInfo))
});

export default connect(null, mapDispatchToProps)(DeleteUserModal)