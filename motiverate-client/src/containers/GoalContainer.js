import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GoalList from '../components/GoalList'



const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
}));

const GoalContainer = ({ 
  openEditorPane, 
  filterUserGoals,
  formatDateTime,
  completeGoal,
  archiveGoal
}) => {

  const classes = useStyles();




  return (
    <div>
      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => openEditorPane("goal", "new")}>New Goal</Button>
          <Button onClick={() => openEditorPane("goal", "edit")}>Edit Goal</Button>
          <Button onClick={() => openEditorPane("goal", "delete")}>Delete Goal</Button>
        </ButtonGroup>

        <GoalList 
         filterUserGoals={filterUserGoals}
         formatDateTime={formatDateTime}
         completeGoal={completeGoal}
         archiveGoal={archiveGoal}
         /> 
         
      </div>
    </div>
  );
};


export default GoalContainer
