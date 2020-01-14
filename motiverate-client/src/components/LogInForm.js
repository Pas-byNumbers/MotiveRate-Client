import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { userLogInFetch } from "../actions/userActions";

class LogInForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLogInFetch(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Log in to MotiveRate</h1>

        
        <TextField
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          />

          <br/>

        <TextField
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <Button type='submit'>
          Log in
        </Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLogInFetch: userInfo => dispatch(userLogInFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(LogInForm);
