import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Render from "./components/Render";
import { BoolContextProvider } from "./context/BoolContext";
import { DataContextProvider } from "./context/DataContext";
import { PathContextProvider } from "./context/PathContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <PathContextProvider>
      <BoolContextProvider>
        <DataContextProvider>
          <Container>
            <Navbar />
            <Render />
          </Container>
        </DataContextProvider>
      </BoolContextProvider>
    </PathContextProvider>
  );
}

export default App;
