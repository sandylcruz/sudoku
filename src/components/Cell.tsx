import React from "react";

import styled from "styled-components";

const StyledCell = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid black;
  font-family: raleway;
`;

const Cell = React.memo(() => {
  return <StyledCell>Hi</StyledCell>;
});

export default Cell;
