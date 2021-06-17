import React from "react";

import Cell from "./Cell";

const Row = React.memo(() => {
  return <Cell />;
});

export default Row;
