import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";



function getModalStyle() {
  const top = 50
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ViewModal({ goal, formatDateTime }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
      <VisibilityIcon />
      </button>
      <Modal
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{goal.attributes.title}</h2>
          <h5>Description</h5>
          <p id="simple-modal-description">
          {goal.attributes.description}
          </p>
          <h5>Category</h5>
          <p id="simple-modal-category">
          {goal.attributes.category}
          </p>
          <h5>Deadline</h5>
          <p id="simple-modal-deadline">
          {formatDateTime(goal.attributes.deadline)}
          </p>
          <h5>Status</h5>
          <p id="simple-modal-status">
          {goal.attributes.completed ? DoneOutlineIcon : "Ongoing"}
          </p>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>Mark as Complete</Button>
          <Button>Add to Archive</Button>
        </ButtonGroup>
        </div>
      </Modal>
    </div>
  );
}