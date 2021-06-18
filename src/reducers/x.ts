const x = () => {
  const coordinatesArray = [];

  for (let i = rangeStart; i < 3; i++) {
    for (let j = rangeStart; j < 3; j++) {
      coordinatesArray.push([i, j]);
    }
  }

  return coordinatesArray;
};
