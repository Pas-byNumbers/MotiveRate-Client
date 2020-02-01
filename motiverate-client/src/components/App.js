import { connect } from "react-redux";
// import { fetchUsers } from "../actions/userActions";
import React, { Component } from "react";
import WelcomeNavBar from "./WelcomeNavBar";
import UserNavBar from "./UserNavBar";
import "../styles/App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { getProfileFetch, logoutUser } from "../actions/userActions";
import LandingPageContainer from "../containers/LandingPageContainer"
import Profile from "./Profile";


class App extends Component {
  componentDidMount() {
    this.props.getProfileFetch();
  }

  handleLogOut = () => {
    // event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Remove the user object from the Redux store
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        {!!window.localStorage.token ? (
          <UserNavBar handleLogOut={this.handleLogOut} profileComponent={Profile} currentUser={this.props.currentUser} />
        ) : (
          <WelcomeNavBar />
        )}
        <Switch>
          <Route path="/profile">
            <Profile currentUser={this.props.currentUser.data} />
          </Route>
          <Route exact path="/" component={LandingPageContainer} />
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
});

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  userData: state.users.userList
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
