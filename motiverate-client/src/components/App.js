import { connect } from "react-redux";
import { fetchUsers } from '../actions/userActions'
import React, { Component } from 'react'

class App extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }


  render() {
    return (
      <div>
        {console.log(this.props.userData)}
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

