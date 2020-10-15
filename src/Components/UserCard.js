import React from "react";
import styled from "styled-components";

const UserCard = (data) => {
  return (
    <Card>
      <img src={data.data.avatar_url} alt="Avatar" />
      <CardContent>
        <h1>{data.data.login}</h1>
        <a href={data.data.followers}>Followers link</a>
      </CardContent>
    </Card>
  );
};

export default UserCard;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  max-width: 200px;
  margin: 15px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 5px 5px 0 0;
    max-width: 200px;
  }
`;

const CardContent = styled.div`
  padding: 15px;
`;
