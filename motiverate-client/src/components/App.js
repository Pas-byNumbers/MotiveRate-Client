import { connect } from "react-redux";
// import { fetchUsers } from "../actions/userActions";
import React, { Component } from "react";
import WelcomeNavBar from "./WelcomeNavBar";
import "../styles/App.css";
import { Switch, Route } from 'react-router-dom';
import { getProfileFetch, logoutUser } from '../actions/userActions';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';

class App extends Component {
  componentDidMount() {
    this.props.getProfileFetch()
  }

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <WelcomeNavBar />
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LogInForm} />
        </Switch>
        {this.props.currentUser.username
            ? <button onClick={this.handleClick}>Log Out</button>
            : null
          }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  userData: state.users.userList
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
