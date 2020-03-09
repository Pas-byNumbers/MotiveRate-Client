import React, { useEffect } from "react";
import { connect } from "react-redux"
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GoalList from '../components/GoalList'
import { fetchAllGoals, goalCreate } from "../actions/goalActions"
import EditorPane from "../components/editorComponents/EditorPane";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
}));

const GoalContainer = ({ fetchAllGoals, goalCreate, goalData}) => {
  const classes = useStyles();
  const [editorPane, setEditorPane] = React.useState({
    active: false,
    type: "",
    action: "",
  })


  const useFetching = () => {
    useEffect(() => {
      fetchAllGoals()
    }, [])
  }

  const showGoalData = () => {
   console.log(goalData) 
  }

//  useEffect(async () => {
//    props.fetchAllGoals()
//  })

  return (
    <div>
    {editorPane.active ? <EditorPane /> : null}
      <div className={classes.root}>
      <Button onClick={() => setEditorPane({
        ...editorPane,
        active: !editorPane.active
      })}>Show Editor Pane</Button>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>New Goal</Button>
          <Button>Edit Goal</Button>
          <Button>Delete Goal</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button onClick={showGoalData}>Share an update</Button>
        </ButtonGroup>
        {useFetching()}
         <GoalList goals={goalData} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  goalCreate: goalInfo => dispatch(goalCreate(goalInfo)),
  fetchAllGoals: () => dispatch(fetchAllGoals())
})

const mapStateToProps = state => ({
  goalData: state.goals.goalList
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer)
