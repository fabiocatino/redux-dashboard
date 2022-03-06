import React from "react";
import { Container } from "./styles";

type TableCellProps = {
  children?: any;
};

const TableCell = ({ children }: TableCellProps) => {
  return <Container>{children}</Container>;
};

export default TableCell;
