import { connect } from "react-redux";
import { fetchUsers } from '../actions/userActions'
import React, { Component } from 'react'
import WelcomeNavBar from "./WelcomeNavBar";
import '../styles/App.css'
import SignUpForm from "./SignUpForm"

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }


  render() {
    return (
      <div>
      <WelcomeNavBar />
      <SignUpForm />
      </div>
    )
  }
}

const mapDispatchToProps = (state) => {
  return {
    userData: state.users.userList
  }
}


export default connect(mapDispatchToProps, { fetchUsers })(App)
