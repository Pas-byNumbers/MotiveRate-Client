import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper, Typography, Divider } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import GoalContainer from "./GoalContainer"
import MilestoneContainer from "./MilestoneContainer"
import TaskContainer from "./TaskContainer"
import ExperienceContainer from "./ExperienceContainer"
import EditorPane from "../components/editorComponents/EditorPane";

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

const UserItemsContainer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [editorPane, setEditorPane] = React.useState({
    active: false,
    type: "",
    action: "",
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const closeEditorPane = () => {
    setEditorPane({
      ...editorPane,
      active: false
    })
  }

  const openEditorPane = (typeSelected, actionSelected) => {
    setEditorPane({
      active: true,
      type: typeSelected,
      action: actionSelected
    })
  }

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

        {editorPane.active ? 
        <EditorPane 
          closeEditorPane={closeEditorPane} 
          editorPane={editorPane}
          currentUser={props.currentUser}   
          /> 
        : null}

        <TabPanel value={value} index={0} dir={theme.direction}>
          <GoalContainer openEditorPane={openEditorPane} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MilestoneContainer />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TaskContainer />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ExperienceContainer />
        </TabPanel>
      </Paper>
    </div>
  )
}

export default UserItemsContainer
