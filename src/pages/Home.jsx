import React, { useContext } from "react";
import styled from "styled-components";
import Feed from "../components/Feed";
import Form from "../components/Form";
import Post from "../components/Post";
import { BoolContext } from "../context/BoolContext";
import { DataContext } from "../context/DataContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  align-items: center;
`;

function Home() {
  // eslint-disable-next-line
  const [bool, setBool] = useContext(BoolContext);
  // eslint-disable-next-line
  const [data, setData] = useContext(DataContext);

  return (
    <Container>
      <Post />
      {bool ? <Form /> : <></>}
      {data.map((item) => (
        <Feed
          key={item._id}
          id={item._id}
          name={item.name}
          picture={item.picture}
          description={item.description}
        />
      ))}
    </Container>
  );
}

export default Home;
