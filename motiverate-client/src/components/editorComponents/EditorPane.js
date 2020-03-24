import React from "react";
import { connect } from "react-redux";
import { goalCreate, goalUpdate, goalDelete } from "../../actions/goalActions";
import {
  updateCreate,
  updateUpdate,
  updateDelete
} from "../../actions/updateActions";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CategorySelect from "./CategorySelect";
import DeadLinePicker from "./DeadLinePicker";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GoalSelect from "./GoalSelect";
import UpdateSelect from "./UpdateSelect";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    }
  }
}));

const EditorPane = ({
  editorPane,
  goalCreate,
  goalUpdate,
  goalDelete,
  updateCreate,
  updateUpdate,
  updateDelete,
  closeEditorPane,
  currentUser,
  filterUserGoals,
  filterUserUpdates
}) => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [deadline, setDeadline] = React.useState();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [goalId, setGoalId] = React.useState();
  const [updateId, setUpdateId] = React.useState();
  const [text, setText] = React.useState("");

  const handleDateChange = date => {
    setDeadline(date);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    determineEditorStatus();
    closeEditorPane();
  };

  const determineEditorStatus = () => {
    switch (editorPane.type) {
      case "goal":
        switch (editorPane.action) {
          case "new":
            goalCreate(buildNewGoalInfo());
            break;
          case "edit":
            goalUpdate(buildEditGoalInfo());
            break;
          case "delete":
            goalDelete({ goalId: Number(goalId) });
            break;
          default:
            return null;
        }
        break;
      case "update":
        switch (editorPane.action) {
          case "new":
            updateCreate(buildNewUpdateInfo());
            break;
          case "edit":
            updateUpdate(buildEditUpdateInfo());
            break;
          case "delete":
            updateDelete({ updateId: Number(updateId) });
            break;
          default:
            return null;
        }
        break;
      default:
        return null;
    }
  };

  const GoalSelectQuery = () => {
    if (editorPane.action === "new" && editorPane.type === "goal") {
      return false;
    } else if (editorPane.action === "delete" && editorPane.type === "update") {
      return false;
    } else {
      return true;
    }
  };

  const buildNewGoalInfo = () => {
    return {
      title,
      description,
      category,
      deadline,
      user_id: currentUser.id
    };
  };

  const buildEditGoalInfo = () => {
    return {
      title,
      description,
      category,
      deadline,
      goalId: Number(goalId)
    };
  };

  const buildNewUpdateInfo = () => {
    return {
      text,
      goal_id: Number(goalId),
      user_id: currentUser.id
    };
  };

  const buildEditUpdateInfo = () => {
    return {
      text,
      goal_id: Number(goalId),
      updateId: Number(updateId)
    };
  };



  const setGoalEdit = id => {
    const goalToEdit = filterUserGoals().find(goal => goal.id === id)
    // console.log(goalToEdit)
    setTitle(goalToEdit.attributes.title);
    setDeadline(goalToEdit.attributes.deadline);
    setCategory(goalToEdit.attributes.category);
    setDescription(goalToEdit.attributes.description)
  }

  const setUpdateEdit = id => {
    const updateToEdit = filterUserUpdates().find(update => update.id === id)
    // console.log(goalToEdit)
    setText(updateToEdit.attributes.text)
  }

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
        <form>
          {!!(editorPane.type === "update" && editorPane.action !== "new") ? (
            <UpdateSelect
              editorPane={editorPane}
              updateId={updateId}
              setUpdateId={setUpdateId}
              filterUserUpdates={filterUserUpdates}
              setUpdateEdit={setUpdateEdit}
            />
          ) : null}

          {GoalSelectQuery() ? (
            <GoalSelect
              editorPane={editorPane}
              setGoalEdit={setGoalEdit}
              goalId={goalId}
              setGoalId={setGoalId}
              filterUserGoals={filterUserGoals}
            />
          ) : null}

          {!!(
            editorPane.action !== "delete" && editorPane.type === "update"
          ) ? (
            <TextField
              label="Update Text"
              placeholder="Write an update here..."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              required
              variant="filled"
              onChange={handleTextChange}
              value={text}
            />
          ) : null}

          {!!(editorPane.action !== "delete" && editorPane.type === "goal") ? (
            <>
              <TextField
                required
                label="Title"
                variant="filled"
                onChange={handleTitleChange}
                value={title}
              />

              <CategorySelect
                handleChange={handleCategoryChange}
                category={category}
              />

              <DeadLinePicker
                handleChange={handleDateChange}
                selectedDate={deadline}
              />
              <TextField
                label="Description"
                placeholder="Write a description here..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={handleDescriptionChange}
                value={description}
              />
            </>
          ) : null}

          <br />
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
          <h6>
            {editorPane.action.toUpperCase()} {editorPane.type.toUpperCase()}
          </h6>
        </Typography>
        <Button color="secondary" onClick={() => closeEditorPane()}>
          Hide Editor Pane
        </Button>
      </Paper>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  goalCreate: goalInfo => dispatch(goalCreate(goalInfo)),
  goalUpdate: goalInfo => dispatch(goalUpdate(goalInfo)),
  goalDelete: goalInfo => dispatch(goalDelete(goalInfo)),
  updateCreate: updateInfo => dispatch(updateCreate(updateInfo)),
  updateUpdate: updateInfo => dispatch(updateUpdate(updateInfo)),
  updateDelete: updateInfo => dispatch(updateDelete(updateInfo))
});

export default connect(null, mapDispatchToProps)(EditorPane);
