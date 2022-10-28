import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: none;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dfdfdf;
  padding: 20px;
  width: 450px;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
    border-bottom: 1px solid #dfdfdf;
    border-radius: 0;
  }
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  color: white;
  background-color: #07635e;
  border: 1 px solid #07635e;
  &:hover {
    background-color: #fff;
    color: black;
    border: 1 px solid black;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 400px;
  font-size: 14px;
`;

function Comment() {
  return (
    <Container>
      <Wrapper>
        <InputContainer>
          <Input placeholder="Add a comment" />
          <Button>Comment</Button>
        </InputContainer>
      </Wrapper>
    </Container>
  );
}

export default Comment;
