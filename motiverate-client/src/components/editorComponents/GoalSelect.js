import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
    maxWidth: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GoalSelect = ({ 
    editorPane,
    setGoalEdit,
    filterUserGoals,
    goalId,
    setGoalId }) => {

  const classes = useStyles();

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          Select a Goal
        </InputLabel>
        <Select
          value={goalId}
          onChange={
            e => {
              setGoalId(e.target.value)
              if (editorPane.action === 'edit' && editorPane.type === 'goal') {
                setGoalEdit(e.target.value)
              }
            }}
        >
          {
            filterUserGoals().map(goal => (
              <MenuItem value={goal.id}>
              {goal.attributes.title}
              </MenuItem>
            )) }
          
        </Select>
      </FormControl>
  )
}

export default GoalSelect
