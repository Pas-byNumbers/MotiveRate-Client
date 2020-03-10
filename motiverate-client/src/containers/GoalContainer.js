import React, { useEffect } from "react";
import { connect } from "react-redux"
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GoalList from '../components/GoalList'
import { fetchAllGoals } from "../actions/goalActions"


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

const GoalContainer = ({ fetchAllGoals, goalData, openEditorPane }) => {
  const classes = useStyles();


  const useFetching = () => {
    useEffect(() => {
      fetchAllGoals()
    }, [])
  }

  const showGoalData = () => {
   console.log(goalData) 
  }

//  useEffect(async () => {
//    props.fetchAllGoals()
//  })

  return (
    <div>
      <div className={classes.root}>
      
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => openEditorPane("goal", "new")}>New Goal</Button>
          <Button onClick={() => openEditorPane("goal", "edit")}>Edit Goal</Button>
          <Button onClick={() => openEditorPane("goal", "delete")}>Delete Goal</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button onClick={showGoalData}>Share an update</Button>
        </ButtonGroup>
        {useFetching()}
         <GoalList goals={goalData} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchAllGoals: () => dispatch(fetchAllGoals())
})

const mapStateToProps = state => ({
  goalData: state.goals.goalList
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer)
