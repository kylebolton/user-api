import React from "react";
import styled from "styled-components";

const UserCard = (loginName, avatarUrl, followers) => {
  return (
    <Card>
      <h1>{loginName}</h1>
      <img src={avatarUrl} alt="Avatar" />
      <a href={followers}>Followers link</a>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  background: #fff;
  padding: 20px;
`;
