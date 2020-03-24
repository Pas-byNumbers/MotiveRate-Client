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

const UpdateSelect = ({ 
    editorPane,
    setUpdateEdit,
    filterUserUpdates,
    UpdateId,
    setUpdateId }) => {

  const classes = useStyles();

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          Select an Update
        </InputLabel>
        <Select
          value={UpdateId}
          onChange={
            e => {
              setUpdateId(e.target.value)
              if (editorPane.action === 'edit' && editorPane.type === 'update') {
                setUpdateEdit(e.target.value)
              }
            }}
        >
          {editorPane.action !== 'new' && editorPane.type === 'update' ?
            filterUserUpdates().map(update => (
              <MenuItem value={update.id}>
              {update.attributes.text}
              </MenuItem>
            )) : null}
          
        </Select>
      </FormControl>
  )
}

export default UpdateSelect
