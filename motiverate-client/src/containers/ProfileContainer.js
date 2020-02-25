import React from "react";
import UserCard from "../components/UserCard";
import UserToolbar from "../components/UserToolbar";
import UserItemsContainer from "./UserItemsContainer";



const ProfileContainer = ({ currentUser, handleLogOut }) => {
  

  return (
    <div>
      <UserCard 
        currentUser={currentUser}
        handleLogOut={handleLogOut}
        / >
      {/* <UserToolbar /> */}
      <UserItemsContainer />
    </div>
  );
};

export default ProfileContainer;
