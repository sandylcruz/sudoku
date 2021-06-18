import React from "react";

import Row from "./Row";

interface BoardProps {
  grid: 
}

const Board = React.memo(() => {
  // const grid = [];
  // for (let row = 0; row <= 4; row++) {
  //   grid.push([]);
  //   for (let col = 0; col < 4; col++) {
  //     grid[row].push(<Row key={`${col}${row}`} />);
  //   }
  // }
  // console.log("GRID:", grid);
  return <Row />;
});

export default Board;
