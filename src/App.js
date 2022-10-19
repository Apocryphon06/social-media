import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Render from "./components/Render";
import { PathContextProvider } from "./context/PathContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <PathContextProvider>
      <Container>
        <Navbar />
        <Render />
      </Container>
    </PathContextProvider>
  );
}

export default App;
