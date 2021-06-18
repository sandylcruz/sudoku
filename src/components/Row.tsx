import React from "react";

import styled from "styled-components";
import Cell from "./Cell";

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = React.memo(({}) => {
  // return (
  //   <RowContainer>
  //     {row.map((tile, index) => (
  //       <Tile key={index} value={tile.value} id={tile.id} />
  //     ))}
  //   </RowContainer>
  // );
  return (
    <RowContainer>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </RowContainer>
  );
});

export default Row;
