import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchAllUpdates, incrementSupport } from '../actions/updateActions'
import { fetchAllGoals } from '../actions/goalActions'
import { fetchAllUsers } from '../actions/userActions'
import UpdateCard from '../components/cards/UpdateCard';

const useStyles = makeStyles({
  div: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
  
});

const UpdatesContainer = (props) => {
  const classes = useStyles()

  const findUser = userId => {
    const user = props.userData.find(user => Number(user.id) === Number(userId))
    return user
  }

  const findGoal = goalId => {
    const goal = props.goalData.find(goal => Number(goal.id) === Number(goalId))
    return goal
  }

  const formatDateTime = goalDate => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' }
    return new Date(goalDate).toLocaleDateString(undefined, options)
  }

  const incrementSupporters = updateId => {
    props.incrementSupport(updateId)
  }

  const useFetching = () => {
    useEffect(() => {
      props.fetchAllUsers()
      props.fetchAllGoals()
      props.fetchAllUpdates()
      
    }, [])
  }

  

  return (
    <div className={classes.div} >
    {useFetching()}
      {props.updateData
        .map(update => (
        <UpdateCard
          incrementSupporters={incrementSupporters}
          update={update}
          formatDateTime={formatDateTime}
          findUser={findUser}
          findGoal={findGoal}
          currentUser={props.currentUser}
          />
      ))}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchAllGoals: () => dispatch(fetchAllGoals()),
  fetchAllUpdates: () => dispatch(fetchAllUpdates()),
  incrementSupport: updateId => dispatch(incrementSupport(updateId))
})

const mapStateToProps = state => ({
  userData: state.users.userList,
  goalData: state.goals.goalList,
  updateData: state.updates.updateList
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdatesContainer);
