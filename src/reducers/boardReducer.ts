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
  console.log(newBoard);
  return newBoard;
};

const generateRandomCoordinate = () => {
  const row: number = Math.floor(Math.random() * 9);
  const col: number = Math.floor(Math.random() * 9);
  const coordinatePair: number[] = [row, col];
  return coordinatePair;
};

const generateSeventeenCoordinatePairs = () => {
  const coordinatesArray = [];
  for (let i = 0; i < 9; i++) {
    const coordinate = generateRandomCoordinate();
    coordinatesArray.push(coordinate);
  }

  return coordinatesArray;
};

console.log(generateSeventeenCoordinatePairs());

const getRowNumber = (number: number) => {
  return Math.floor(number / 9);
};

const getColNumber = (number: number) => {};

const getCellRowAndColumnNumber = (number: number) => {};

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
