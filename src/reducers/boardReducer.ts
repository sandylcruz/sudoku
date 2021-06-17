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
