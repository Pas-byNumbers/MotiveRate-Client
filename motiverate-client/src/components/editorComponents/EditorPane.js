import React from "react";
import { connect } from "react-redux";
import {
  goalCreate,
  goalUpdate,
  goalDelete
} from "../../actions/goalActions";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CategorySelect from "./CategorySelect";
import DeadLinePicker from "./DeadLinePicker";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import UserItemSelect from "./UserItemSelect";

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    }
  }
}));

const EditorPane = ({
  editorPane,
  goalCreate,
  closeEditorPane,
  currentUser,
  filterUserGoals,
}) => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [deadline, setDeadline] = React.useState();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [userItemId, setUserItemId] = React.useState();

  const handleDateChange = date => {
    setDeadline(date);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleTitleChange = event => {
    setTitle(event.target.value);
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
            goalDelete({goalId: Number(userItemId)});
            break;
          default:
            return null;
        }
        break;
      default:
        return null;
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
      goalId: Number(userItemId)
    };
  };

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
        <form>
          {editorPane.action !== "new" ? (
            <UserItemSelect
              editorPane={editorPane}
              userItemId={userItemId}
              setUserItemId={setUserItemId}
              filterUserGoals={filterUserGoals}
            />
          ) : null}

          {editorPane.action !== "delete" ? (
            <>
              <TextField
                required
                label="Title"
                variant="filled"
                onChange={handleTitleChange}
                value={title}
              />
              {editorPane.type === "goal" ? (
                <CategorySelect
                  handleChange={handleCategoryChange}
                  category={category}
                />
              ) : null}
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
  goalDelete: goalInfo => dispatch(goalDelete(goalInfo))
});

export default connect(null, mapDispatchToProps)(EditorPane);
