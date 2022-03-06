import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #bebfbf;
  display: flex;
  flex-direction: column;

  > h1 {
    padding: 1rem;
  }
`;
Container.displayName = "Container";

export const FormContainer = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #bebfbf;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Container.displayName = "Container";

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  > span {
    align-self: flex-start;
  }
`;
FieldsContainer.displayName = "FieldsContainer";

export const Buttons = styled.div`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  gap: 1rem;
`;
Buttons.displayName = "Buttons";
