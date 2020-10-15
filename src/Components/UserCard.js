import React from "react";
import styled from "styled-components";

const UserCard = (data) => {
  return (
    <Card>
      <h1>{data.data.login}</h1>
      <img src={data.data.avatar_url} alt="Avatar" />
      <a href={data.data.followers}>Followers link</a>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  background: #fff;
  padding: 20px;
`;
