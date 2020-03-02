import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

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

const ExperienceContainer = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>New Experience</Button>
        <Button>Edit Experience</Button>
        <Button>Delete Experience</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>Share an update</Button>
      </ButtonGroup>
      </div>
      <h2>Experience Container</h2>
    </div>
  )
}

export default ExperienceContainer