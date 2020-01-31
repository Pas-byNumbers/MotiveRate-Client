import React from 'react'

const Profile = ({ currentUser }) => {

  // const username = currentUser.attributes.username

  return (
    <div>
      <h1>Profile Page</h1>
      <h3>{currentUser ? currentUser.attributes.username : null }</h3>
    </div>
  )
}

export default Profile
