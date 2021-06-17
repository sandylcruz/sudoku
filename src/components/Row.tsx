import React from "react";

import Cell from "./Cell";

const Row = React.memo(({}) => {
  // return (
  //   <RowContainer>
  //     {row.map((tile, index) => (
  //       <Tile key={index} value={tile.value} id={tile.id} />
  //     ))}
  //   </RowContainer>
  // );
  return <Cell />;
});

export default Row;
