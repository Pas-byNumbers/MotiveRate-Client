import { connect } from "react-redux";
// import { fetchUsers } from "../actions/userActions";
import React, { Component } from "react";
import WelcomeNavBar from "./WelcomeNavBar";
import "../styles/App.css";
import { Switch, Route } from 'react-router-dom';
import {getProfileFetch} from '../actions/userActions';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';

class App extends Component {
  componentDidMount() {
    this.props.getProfileFetch()
  }

  render() {
    return (
      <div>
        <WelcomeNavBar />
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LogInForm} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

// const mapStateToProps = state => {
//   return {
//     userData: state.users.userList
//   };
// };

export default connect(null, mapDispatchToProps)(App);
