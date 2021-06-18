import React from "react";

import styled from "styled-components";
import Row from "./Row";
import { Cell } from "../types";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BorderDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid purple;
`;

interface BoardProps {
  grid: Array<Cell>;
}

const Board = React.memo<BoardProps>(() => {
  // const grid = [];
  // for (let row = 0; row <= 4; row++) {
  //   grid.push([]);
  //   for (let col = 0; col < 4; col++) {
  //     grid[row].push(<Row key={`${col}${row}`} />);
  //   }
  // }
  // console.log("GRID:", grid);
  return (
    <BodyContainer>
      <BorderDiv>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </BorderDiv>
    </BodyContainer>
  );
});

export default Board;
