import React, { useState, useEffect } from 'react'

const Profile = ({ currentUser }) => {

  // const username = currentUser.attributes.username
    const [username, setUsername] = useState("")
    const [fullName, setFullName] = useState("")
    const [score, setScore] = useState(0)
    const [tier, setTier] = useState("")
    const [email, setEmail] = useState("")

    const updateProfileState = () => {
      setUsername(currentUser.attributes.username);
      setFullName(currentUser.attributes.full_name);
      setScore(currentUser.attributes.score);
      setTier(currentUser.attributes.tier);
      setEmail(currentUser.attributes.email);
    }

    const clearProfileState = () => {
      setUsername("");
      setFullName("");
      setScore(0);
      setTier("");
      setEmail("");
    }

    useEffect(() => {
      return currentUser ? updateProfileState() : clearProfileState()
    })

  return (
    <div>
      <h1>Profile Page</h1>
      <h3>{username}</h3>
    </div>
  )
}

export default Profile
