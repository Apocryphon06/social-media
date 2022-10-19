import React from "react";
import styled from "styled-components";
import Feed from "../components/Feed";
import { data } from "../dummy-data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

function Home() {
  return (
    <Container>
      {data.map((item) => (
        <Feed
          key={item._id}
          id={item._id}
          name={item.name}
          picture={item.picture}
        />
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />

      <span>Add new post</span>
    </Container>
  );
}

export default Home;
