import React from 'react'
import { connect } from "react-redux"
import { goalCreate, fetchAllGoals } from "../../actions/goalActions"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CategorySelect from './CategorySelect';
import DeadLinePicker from './DeadLinePicker';
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    },
  },
}));

const EditorPane = ({ 
    editorPane, 
    goalCreate, 
    closeEditorPane, 
    currentUser 
  }) => {
  const classes = useStyles()
  const [category, setCategory] = React.useState("")
  const [deadline, setDeadline] = React.useState(Date.now());
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")

  const handleDateChange = date => {
    setDeadline(date);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value)
  }

  const handleTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value)
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    determineEditorStatus()
    closeEditorPane()
  }

  const determineEditorStatus = () => {
    switch (editorPane.type) {
      case 'goal' :
        switch (editorPane.action) {
          case 'new' :
            goalCreate(buildGoalInfo())
            
        }
    }
  }

  const buildGoalInfo = () => {
    return {
      title,
      description,
      category,
      deadline,
      user_id: currentUser.id
    }
  }

  return (
    <div className={classes.root}>
    <Paper variant="outlined" square>
      <form>
      <TextField 
        required 
        label="Title" 
        variant="filled"
        onChange={handleTitleChange}
        value={title}
         />
      <CategorySelect handleChange={handleCategoryChange} category={category}
      />
      <DeadLinePicker handleChange={handleDateChange} selectedDate={deadline} />
      <TextField
          label="Description"
          placeholder="Write a description here..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleDescriptionChange}
          value={description}
        />
        <Button 
          color="primary" 
          type="submit" 
          onClick={event => handleSubmit(event)}
          >
          Submit
          </Button>
      </form>
      <Typography>
        <h5>Editor Pane Status: </h5>
        <h6>{editorPane.action.toUpperCase()} {" "}
        {editorPane.type.toUpperCase()}</h6>
      </Typography>
      <Button color="secondary" onClick={() => closeEditorPane()}>Hide Editor Pane</Button>
    </Paper>
  </div>
  )
}

const mapDispatchToProps = dispatch => ({
  goalCreate: goalInfo => dispatch(goalCreate(goalInfo)),
  fetchAllGoals: () => dispatch(fetchAllGoals())
})


export default connect(null, mapDispatchToProps)(EditorPane)
