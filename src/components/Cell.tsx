import React from "react";

import styled from "styled-components";

const StyledCell = styled.div`
  height: 55px;
  width: 55px;
  border: 1px solid black;
  font-family: helvetica;
`;

const TextDiv = styled.div`
  display: flex;
  text-align: center;
  width: 55px;
  height: 55px;
  margin-left: 21px;
  margin-top: 21px;
`;

const Cell = React.memo(() => {
  return (
    <StyledCell>
      <TextDiv>Hi</TextDiv>
    </StyledCell>
  );
});

export default Cell;
