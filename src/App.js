import React, { useState, useEffect } from "react";
import UserCard from "./Components/UserCard.js";
import axios from "axios";
import styled from "styled-components";

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
    <Container>
      {userData.map((userData, index) => (
        <UserCard data={userData} key={index} />
      ))}
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 960px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;
