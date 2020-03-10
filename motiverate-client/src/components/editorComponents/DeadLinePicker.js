import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const DeadLinePicker = ({ selectedDate, handleChange }) => {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/* <Grid container justify="space-around"> */}
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            label="Deadline"
            value={selectedDate}
            onChange={handleChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        {/* </Grid> */}
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DeadLinePicker;
