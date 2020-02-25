import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper, Typography, Divider } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import GoalContainer from "./GoalContainer"
import MilestoneContainer from "./MilestoneContainer"
import TaskContainer from "./TaskContainer"
import ExperienceContainer from "./ExperienceContainer"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  div: {
    margin: theme.spacing(5),
    minHeight: 500
  },
  root: {
    flexGrow: 1,
  },
}));

const UserItemsContainer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.div} >
    
      <Paper elevation={3} square={false} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        // variant="fullWidth"
        centered
      >
        <Tab label="My Goals" />
        <Tab label="My Milestones" />
        <Tab label="My Tasks" />
        <Tab label="My Experiences" />
      </Tabs>
        <Divider />
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
          <GoalContainer />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
          <MilestoneContainer />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
          <TaskContainer />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
          <ExperienceContainer />
        </TabPanel>
      </Paper>
    </div>
  )
}

export default UserItemsContainer
