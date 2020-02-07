import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 600,
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Profile = ({ currentUser }) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [score, setScore] = useState(0);
  const [tier, setTier] = useState("");
  const [email, setEmail] = useState("");

  const updateProfileState = () => {
    setUsername(currentUser.attributes.username);
    setFullName(currentUser.attributes.full_name);
    setScore(currentUser.attributes.score);
    setTier(currentUser.attributes.tier);
    setEmail(currentUser.attributes.email);
  };

  const clearProfileState = () => {
    setUsername("");
    setFullName("");
    setScore(0);
    setTier("");
    setEmail("");
  };

  useEffect(() => {
    return currentUser ? updateProfileState() : clearProfileState();
  });

  return (
    <div>
      <h1>Profile Page</h1>
      <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {fullName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {email}
        </Typography>
        <Typography variant="body2" component="p">
          {tier.charAt(0).toUpperCase() + tier.slice(1)}
          <br />
          {"Score: " + score}
        </Typography>
        
      </CardContent>
      
    </Card>
    </div>
  );
};

export default Profile;
