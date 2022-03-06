import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
Container.displayName = "Container";

export const Header = styled.h1`
  font-size: 30px;
  font-weight: bold;
  padding: 0.5rem;
`;
Header.displayName = "Header";

export const ModalPopup = styled.div`
  height: 250px;
  width: 500px;
  background: white;
  border-radius: 10px;
`;
ModalPopup.displayName = "ModalPopup";

export const DataContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 100px;
`;
DataContainer.displayName = "DataContainer";

export const Buttons = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0.5rem;
`;
Buttons.displayName = "Buttons";
