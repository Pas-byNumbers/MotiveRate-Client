import { connect } from "react-redux";
// import { fetchUsers } from "../actions/userActions";
import React, { Component } from "react";
import NavBar from "./NavBar";
import "../styles/App.css";
import { Switch, Route } from 'react-router-dom';
import { getProfileFetch, logoutUser } from '../actions/userActions';
import SignUpForm from './SignUpForm';
import LogInModal from './LogInModal';

class App extends Component {
  componentDidMount() {
    this.props.getProfileFetch()
  }

  handleLogOut = () => {
    // event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <NavBar 
          currentUser={this.props.currentUser}
          handleLogOut={this.handleLogOut}
        />
        <Switch>
          {/* <Route path="/signup" component={SignUpForm} /> */}
          {/* <Route path="/login" component={LogInModal} /> */}
        </Switch>
        
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
