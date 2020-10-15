import React from "react";
import styled from "styled-components";

const UserCard = (userData) => {
  return (
    <Card>
      <h1>{userData.data.login}</h1>
      <img src={userData.data.avatar_url} alt="Avatar" />
      <a href={userData.data.followers}>Followers link</a>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  background: #fff;
  padding: 20px;
`;
