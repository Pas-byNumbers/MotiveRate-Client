import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginLeft: theme.spacing(1),
    minWidth: 180
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const CategorySelect = props => {
  const classes = useStyles();

  const capitalizeCategory = category => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select value={props.category} onChange={props.handleChange}>
        <MenuItem value={"arts"}>Arts</MenuItem>
        <MenuItem value={"food"}>Food</MenuItem>
        <MenuItem value={"technology"}>Technology</MenuItem>
        <MenuItem value={"sports"}>Sports</MenuItem>
        <MenuItem value={"entertainment"}>Entertainment</MenuItem>
        <MenuItem value={"travel"}>Travel</MenuItem>
        <MenuItem value={"music"}>Music</MenuItem>
        <MenuItem value={"literature"}>Literature</MenuItem>
        <MenuItem value={"film"}>Film</MenuItem>
        <MenuItem value={"business"}>Business</MenuItem>
        <MenuItem value={"horticulture"}>Horticulture</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
