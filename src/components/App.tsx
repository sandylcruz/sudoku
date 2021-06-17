import React from "react";

import styled from "styled-components";

import Board from "./Board";

const H1 = styled.h1`
  font-family: alegreya sans sc thin;
  font-size: 80px;
  text-align: center;
  margin: 0;
`;

const P = styled.p`
  font-family: raleway;
  font-size: 20px;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <H1>Sudoku</H1>
      <Board />
    </div>
  );
}

export default App;
