import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { userCreate } from "../redux/actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

class SignUpForm extends Component {
  constructor() {
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      score: 0,
      tier: "wanderer"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userCreate(this.state);
  };

  render() {
    const classes = useStyles();
    return (
      <div className={classes.root} noValidate autoComplete="off">
        <form onSubmit={this.handleSubmit}>
          <h1>Register your MotiveRate Account</h1>
          <br />
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Score"
            variant="outlined"
            name="score"
            value={this.state.score}
          />
          <TextField
            id="outlined-basic"
            label="Tier"
            variant="outlined"
            name="tier"
            value={this.state.tier}
          />

          <Button variant="contained" type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userCreate: userInfo => dispatch(userCreate(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUpForm);
