import React from "react";

import Row from "./Row";

const Board = React.memo(() => {
  //  <BoardContainer layout>
  //    {grid.map((row, index) => (
  //      <Row key={index} row={row} />
  //    ))}
  //  </BoardContainer>;
  return <Row />;
});

export default Board;
