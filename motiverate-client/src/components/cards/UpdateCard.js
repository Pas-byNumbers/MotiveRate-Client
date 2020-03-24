import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    minWidth: 700,
    margin: 15
  },
  media: {
    height: 140
  },
  expander: {
    minWidth: 600,
    maxWidth: 600
  },
  header: {
    padding: 15
  }
});

export default function UpdateCard({
  update,
  formatDateTime,
  findUser,
  findGoal,
  currentUser,
  incrementSupporters
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
      </CardActionArea>
      <Typography
        variant="header"
        color="textPrimary"
        component="p"
        className={classes.header}
      >
      {currentUser.id === update.attributes.user_id ? 
        null :
        <>
        {!!findUser(update.attributes.user_id)
          ? findUser(update.attributes.user_id).attributes.username +
            " shared an update" : null}
        </>
      }
      </Typography>
      <Divider />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {update.attributes.text}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created on {formatDateTime(update.attributes.created_at)}
          <br />
          <br />
        </Typography>
        <ExpansionPanel className={classes.expander}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography variant="body3" color="textPrimary" component="h5">
              {!!findGoal(update.attributes.goal_id)
                ? findGoal(update.attributes.goal_id).attributes.title
                : null}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body3" color="textSecondary" component="p">
              {!!findGoal(update.attributes.goal_id)
                ? findGoal(update.attributes.goal_id).attributes.description
                : null}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CardContent>
      <CardActions>
        {Number(currentUser.id) === Number(update.attributes.user_id) ? (
          <Typography>
            You have {update.attributes.supporters} supporters!
          </Typography>
        ) : (
          <>
          {findGoal(update.attributes.goal_id).attributes.archived ? 
            <Typography>
            This update received {update.attributes.supporters} supporters!
          </Typography>
             :
            <Button size="small" color="primary" onClick={() => incrementSupporters(update.id)}>
            <GroupAddIcon />
            <br />
            {update.attributes.supporters}
          </Button>
            }
          </>
        )}
      </CardActions>
    </Card>
  );
}
