import { createSelector } from "reselect";

import { Cell, ReduxState } from "../types";

export const selectGrid = createSelector<ReduxState, Array<Cell>, Array<Cell>>(
  (state) => state.board.grid,
  (grid) => grid
);
