import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Comment from "../components/Comment";
import Feed from "../components/Feed";
import Form from "../components/Form";
import Post from "../components/Post";
import { BoolContext } from "../context/BoolContext";
import { DataContext } from "../context/DataContext";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media (max-width: 768px) {
    padding-left: 20px;
  }
  align-items: center;
`;

function Home() {
  // eslint-disable-next-line
  const [bool, setBool] = useContext(BoolContext);
  // eslint-disable-next-line
  const [data, setData] = useContext(DataContext);

  const options = {
    method: "GET",
    url: "http://127.0.0.1:8000/api/jobs",
  };

  const getAllJobs = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Post />
      <Comment />
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
