import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GoalList from '../components/GoalList'
import { fetchAllGoals, goalCreate } from "../actions/goalActions"

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

const GoalContainer = (props) => {
  const classes = useStyles();

//  useEffect(async () => {
//    props.fetchAllGoals()
//  })

  return (
    <div>
      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>New Goal</Button>
          <Button>Edit Goal</Button>
          <Button>Delete Goal</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button>Share an update</Button>
        </ButtonGroup>
         <GoalList />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  goalCreate: goalInfo => dispatch(goalCreate(goalInfo)),
  fetchAllGoals: () => dispatch(fetchAllGoals())
})

const mapStateToProps = state => ({
  goalData: state.goals.goalList
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer)
