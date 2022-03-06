import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
Container.displayName = "Container";

export const Input = styled.input`
  width: 600px;
  height: 30px;
  outline: none;
  :focus {
    outline: none;
    border: 1px solid #f1a1a1;
  }
`;
Input.displayName = "Input";
