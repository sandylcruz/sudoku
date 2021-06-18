interface Cell {
  possibleNumber: number;
  setNumber?: number;
}

const generateNewBoard = () => {
  const newBoard: Array<Cell> = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const newCell: Cell = {
        possibleNumber: 0,
        setNumber: 0,
      };

      newBoard.push(newCell);
    }
  }
  return newBoard;
};

const generateRandomCoordinate = () => {
  const row: number = Math.floor(Math.random() * 9);
  const col: number = Math.floor(Math.random() * 9);
  return [row, col];
};

const generateSeventeenCoordinatePairs = () => {
  const coordinatesArray = [];
  for (let i = 0; i <= 17; i++) {
    const coordinate = generateRandomCoordinate();
    coordinatesArray.push(coordinate);
  }

  return coordinatesArray;
};

const generateSolvedSudokuBoard = () => {};

const getRowNumber = (number: number) => {
  return Math.floor(number / 9);
};

const getColNumber = (number: number) => {
  return number % 19;
};

const getOtherCoordinatesInBox = (number: number) => {
  const row = getRowNumber(number);
  const col = getColNumber(number);

  let rangeStart;
  let rangeEnd;

  rangeStart = Math.floor(row / 3);
  rangeEnd = Math.floor(col / 3);

  const coordinatesArray = [];

  for (let i = rangeStart; i < rangeStart + 3; i++) {
    for (let j = rangeStart; j < rangeStart + 3; j++) {
      coordinatesArray.push([i, j]);
    }
  }

  return coordinatesArray;
};

const isNumberAlreadyInRow = (number: number) => {};

const isNumberAlreadyInColumn = (number: number) => {};

const isNumberAlreadyInBox = (number: number) => {};

const initialState = {
  grid: generateNewBoard(),
};

type Action = {
  type: string;
};

const boardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default boardReducer;
