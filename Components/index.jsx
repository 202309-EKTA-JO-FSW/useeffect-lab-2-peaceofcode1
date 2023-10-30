import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import UserCard from "./UserCard";

const Index = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div>
      <Form setUsername={setUsername} />
      {userData && <UserCard userData={userData} />}
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
