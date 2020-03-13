import React from "react";
import UserCard from "../components/cards/UserCard";
import UserItemsContainer from "./UserItemsContainer";



const ProfileContainer = ({ currentUser, handleLogOut }) => {
  

  return (
    <div>
      <UserCard 
        currentUser={currentUser}
        handleLogOut={handleLogOut}
        />
      {/* <UserToolbar /> */}
      <UserItemsContainer
        currentUser={currentUser}
       />

    </div>
  );
};

export default ProfileContainer;
