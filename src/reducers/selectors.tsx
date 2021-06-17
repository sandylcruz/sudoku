import { createSelector } from "reselect";

// interface ReduxState {
//   board: number[];
// }

// export const selectGrid = createSelector<ReduxState, boolean, boolean>(
//   (state) => state.board.grid,
//   (grid) =>
//     grid.reduce((accumulator, row, i: number) => {
//       row.forEach((tile, j) => {
//         const position = i * 4 + j;
//         accumulator.push({ value: tile.value, position, id: tile.id });
//       });

//       return accumulator;
//     }, [])
// );
