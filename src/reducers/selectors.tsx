import { createSelector } from "reselect";

interface ReduxState {
  board: {
    grid: [
      id: {
        possibleNumber: number;
        setNumber?: number;
      }
    ];
  };
}

// export const selectGrid = createSelector<ReduxState, [], number[]>(
//   (state) => state.board.grid,
//   (grid) =>
//     grid.reduce((accumulator: [], row: [], i: number) => {
//       row.forEach((cell, j) => {
//         const position = i * 9 + j;
//         accumulator.push({ value: cell.value, position, id: cell.id });
//       });

//       return accumulator;
//     }, [])
// );
