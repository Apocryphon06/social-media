import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";
import { nanoid } from "nanoid";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dfdfdf;
  width: 450px;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 16px;
  color: grey;
  margin-bottom: 10px;
`;
const Input = styled.input`
  background-color: transparent;
  border: 0.5px solid black;
  font-size: 16px;
  padding: 10px;
`;
// eslint-disable-next-line
const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #21bfae;
  border: 0.5px solid #e4e1e2;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background-color: #07635e;
  }
  margin-top: 30px;
  margin-bottom: 20px;
`;

function Form() {
  // eslint-disable-next-line
  const [data, setData] = useContext(DataContext);
  const [desc, setdesc] = useState("");
  const [link, setLink] = useState("");

  return (
    <Wrapper>
      <Label>Add a short description</Label>
      <Input
        onChange={(e) => setdesc(e.target.value)}
        type="text"
        placeholder="tag a location or a place"
      />
      <Input
        type="text"
        onChange={(e) => setLink(e.target.value)}
        placeholder="type or paste an image link"
      />
      <Button
        onClick={() =>
          setData((prevData) => [
            {
              _id: nanoid(),
              picture: link,
              name: "Hrithik Ch",
              description: desc,
            },
            ...prevData,
          ])
        }
      >
        CREATE
      </Button>
    </Wrapper>
  );
}

export default Form;
