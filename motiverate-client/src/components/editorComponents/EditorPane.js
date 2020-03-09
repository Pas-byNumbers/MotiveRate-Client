import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CategorySelect from './CategorySelect';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    },
  },
}));

const EditorPane = () => {
  const classes = useStyles()
  const [category, setCategory] = React.useState("")

  const handleCategoryChange = event => {
    setCategory(event.target.value)
  }

  return (
    <div className={classes.root}>
    <Paper variant="outlined" square>
      <form>
      <TextField label="Title" variant="filled" />
      <CategorySelect handleChange={handleCategoryChange} category={category}
      />
      </form>
    </Paper>
  </div>
  )
}

export default EditorPane
