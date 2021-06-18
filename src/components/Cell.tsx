import React from "react";

import styled from "styled-components";

const StyledCell = styled.div`
  height: 55px;
  width: 55px;
  border: 1px solid black;
  font-family: helvetica;
`;

const Cell = React.memo(() => {
  return <StyledCell>Hi</StyledCell>;
});

export default Cell;
