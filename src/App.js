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

  console.log(userData);

  return (
    <div>
      {userData.map((user) => (
        <UserCard userData={user} />
      ))}
    </div>
  );
}

export default App;
