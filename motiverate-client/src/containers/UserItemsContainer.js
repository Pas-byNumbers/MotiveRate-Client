import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchAllGoals } from "../actions/goalActions"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper, Typography, Divider } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import GoalContainer from "./GoalContainer"
import UserUpdatesContainer from "./UserUpdatesContainer"
import ArchiveContainer from "./ArchiveContainer"
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

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

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

  const filterUserGoals = () => {
    const userGoals = props.goalData.filter(goal => goal.attributes.user_id === Number(props.currentUser.id))
    return userGoals
  }

  const useFetching = () => {
    useEffect(() => {
      props.fetchAllGoals()
    }, [])
  }

  return (
    <div className={classes.div} >
      {useFetching()}
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
        <Tab label="My Updates" />
        <Tab label="Archives" />
      </Tabs>
        <Divider />

        {editorPane.active ? 
        <EditorPane 
          closeEditorPane={closeEditorPane} 
          editorPane={editorPane}
          currentUser={props.currentUser}
          filterUserGoals={filterUserGoals}
          /> 
        : null}

        <TabPanel value={value} index={0} dir={theme.direction}>
          <GoalContainer
          openEditorPane={openEditorPane} 
          filterUserGoals={filterUserGoals}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <UserUpdatesContainer />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <ArchiveContainer />
        </TabPanel>
      </Paper>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchAllGoals: () => dispatch(fetchAllGoals())
})

const mapStateToProps = state => ({
  goalData: state.goals.goalList
})

export default connect(mapStateToProps, mapDispatchToProps)(UserItemsContainer)
