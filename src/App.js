import React, { useState, useEffect } from "react";
import UserCard from "./Components/UserCard.js";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userData = await axios("https://api.github.com/users");
      setUserData(userData.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {userData.map((user, index) => (
        <UserCard data={user} key={index} />
      ))}
    </div>
  );
}

export default App;
