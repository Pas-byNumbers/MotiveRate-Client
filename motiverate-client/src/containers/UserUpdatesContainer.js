import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import UpdateCard from '../components/cards/UpdateCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const UserUpdatesContainer = ({
  filterUserUpdates,
  formatDateTime,
  goalData,
  openEditorPane,
  currentUser
}) => {
  const classes = useStyles()

  const findGoal = goalId => {
    const goal = goalData.find(goal => Number(goal.id) === Number(goalId))
    return goal
  }

  const findUser = userId => {
    return null
  }

  const incrementSupporters = update => {
    return null
  }

  return (
    <div>
      <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => openEditorPane("update", "new")}>New Update</Button>
        <Button onClick={() => openEditorPane("update", "edit")}>Edit Update</Button>
        <Button onClick={() => openEditorPane("update", "delete")}>Delete Update</Button>
      </ButtonGroup>

      </div>
      <div className={classes.root} >
       {!!filterUserUpdates() ? filterUserUpdates().map(update => (
        <UpdateCard
          incrementSupporters={incrementSupporters}
          update={update}
          formatDateTime={formatDateTime}
          findGoal={findGoal}
          findUser={findUser}
          currentUser={currentUser}
          /> 
      )) : null } 
      </div>
      
    </div>
  )
}

export default UserUpdatesContainer