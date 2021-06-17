export interface Cell {
  possibleNumber: number;
  setNumber?: number;
}

export interface Board {
  grid: Array<Cell>;
}

export interface ReduxState {
  board: Board;
}
