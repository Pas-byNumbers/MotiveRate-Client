import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const DeadLinePicker = ({ selectedDate, handleChange }) => {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DeadLinePicker;
