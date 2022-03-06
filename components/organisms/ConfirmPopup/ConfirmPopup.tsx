import Button from "atoms/Button";
import React from "react";
import {
  Buttons,
  Container,
  DataContainer,
  Header,
  ModalPopup,
} from "./styles";

type ConfirmPopupProps = {
  onCancel?: () => void;
  onClick?: () => void;
  data?: any;
};

const ConfirmPopup = ({ data, onCancel, onClick }: ConfirmPopupProps) => {
  return (
    <Container>
      <ModalPopup>
        <Header>Delete</Header>
        <DataContainer>
          {data.name} {data.email}
        </DataContainer>
        <Buttons>
          <Button title="Cancel" variant="cancel" onClick={onCancel} />
          <Button title="Delete" onClick={onClick} />
        </Buttons>
      </ModalPopup>
    </Container>
  );
};

export default ConfirmPopup;
