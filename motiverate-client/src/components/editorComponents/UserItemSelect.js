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

const UserItemSelect = ({ 
    editorPane,
    filterUserGoals,
    userItemId,
    setUserItemId }) => {

  const classes = useStyles();

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          Select an item to change
        </InputLabel>
        <Select
          value={userItemId}
          onChange={e => setUserItemId(e.target.value)}
        >
          {editorPane.action !== 'new' && editorPane.type === 'goal' ?
            filterUserGoals().map(goal => (
              <MenuItem value={goal.id}>
              {goal.attributes.title}
              </MenuItem>
            )) : null}
          
        </Select>
      </FormControl>
  )
}

export default UserItemSelect
