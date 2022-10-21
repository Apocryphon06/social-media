import { Add, Close } from "@material-ui/icons";
import React, { useContext } from "react";
import styled from "styled-components";
import { BoolContext } from "../context/BoolContext";

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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Post() {
  const [bool, setBool] = useContext(BoolContext);

  return (
    <Wrapper>
      <TitleWrapper>
        Create new post
        <Actions>
          <Add
            onClick={() => setBool(true)}
            style={{
              color: "white",
              borderRadius: "50%",
              backgroundColor: "#07635e",
              cursor: "pointer",
              marginRight: "20px",
              padding: 5,
            }}
          />
          {bool ? (
            <Close
              onClick={() => setBool(false)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <></>
          )}
        </Actions>
      </TitleWrapper>
    </Wrapper>
  );
}

export default Post;
