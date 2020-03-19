import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ViewModal from './ViewModal';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  expander: {
    minWidth: 400,
    maxWidth: 500
  }
});


export default function GoalList({
  filterUserGoals, 
  formatDateTime,
  completeGoal,
  archiveGoal
 }) {
  const classes = useStyles();

  const capitalizeCategory = category => {
   return category.charAt(0).toUpperCase() + category.slice(1)
  }

 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">
                Deadline
            </TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="right">

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterUserGoals()
            .filter(goal => goal.attributes.archived === false)
            .map(goal => (
            <TableRow key={goal.id}>
              <TableCell component="th" scope="row">
                {goal.attributes.title}
              </TableCell>
              <TableCell align="center">{capitalizeCategory(goal.attributes.category)}</TableCell>
              <TableCell align="center">{formatDateTime(goal.attributes.deadline)}</TableCell>
              <TableCell align="center">{goal.attributes.completed ? <DoneOutlineIcon /> : "Ongoing"}</TableCell>
              <TableCell align="center">
              <ExpansionPanel className={classes.expander}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography>Description</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           {goal.attributes.description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
              </TableCell>
              <TableCell align="left">
                <ViewModal 
                  goal={goal}
                  formatDateTime={formatDateTime}
                  completeGoal={completeGoal}
                  archiveGoal={archiveGoal}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}