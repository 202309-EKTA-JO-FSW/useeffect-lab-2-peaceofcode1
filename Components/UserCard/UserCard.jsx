import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="user-card">
      <img src={userData.avatar_url} alt="User Avatar" />
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
    </div>
  );
};

export default UserCard;
