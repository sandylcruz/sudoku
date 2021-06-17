import React from "react";
import { useSelector } from "react-redux";

import Board from "./Board";
import { selectGrid } from "../reducers/selectors";

const Game = () => {
  const grid = useSelector(selectGrid);
  console.log("GRID:", grid);
  // return <h1>hi</h1>;
  return <Board grid={grid} />;
};

export default Game;
