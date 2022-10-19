import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PathContext } from "../context/PathContext";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  background-color: #07635e;
  justify-content: space-around;
  position: fixed;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  color: white;
  border: ${(props) => props.border};
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Brand = styled.div`
  font-size: 22px;
  cursor: pointer;
  font-family: RedRock;
  color: white;
`;

const Actions = styled.div`
    display: flex:
    flex-direction:row;
    align-items: center;
    
`;

function Navbar() {
  const [status, setStatus] = useState(true);
  // eslint-disable-next-line
  const [path, setPath] = useContext(PathContext);
  return (
    <Wrapper>
      <Brand onClick={() => setPath("home")}>Social Media</Brand>{" "}
      <Actions>
        <Button border={"none"} onClick={() => setPath("profile")}>
          Profile
        </Button>
        {!status ? (
          <Button border={"1px solid white"} onClick={() => setStatus(true)}>
            SIGN IN
          </Button>
        ) : (
          <Button border={"1px solid white"} onClick={() => setStatus(false)}>
            SIGN OUT
          </Button>
        )}
      </Actions>
    </Wrapper>
  );
}

export default Navbar;
