import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
Container.displayName = "Container";

export const Header = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;
Header.displayName = "Header";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bebfbf;
  padding: 2rem;
`;
TableContainer.displayName = "TableContainer";

export const MainTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  font-size: 30px;
`;
MainTableHeader.displayName = "MainTableHeader";

export const Table = styled.table`
  border: 1px solid gray;
  width: 100%;
`;
Table.displayName = "Table";

export const TableHead = styled.thead`
  display: flex;

  :nth-child(1) {
    background: rgba(245, 245, 245, 255);
  }
`;
TableHead.displayName = "TableHead";

export const TableBody = styled.tbody``;
TableBody.displayName = "TableBody";
