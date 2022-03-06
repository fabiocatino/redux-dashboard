import styled from "styled-components";

export const Container = styled.button<{ variant?: string }>`
  background: ${({ variant }) =>
    variant === "create"
      ? "rgba(20,121,209,255)"
      : variant === "edit"
      ? "orange"
      : variant === "submit"
      ? "green"
      : variant === "cancel"
      ? "white"
      : "red"};
  width: ${({ variant }) => (variant === "create" ? "150px" : "80px")};
  height: 40px;
  padding: 0.2rem;
  border: ${({ variant }) =>
    variant === "cancel" ? "1px solid orange" : "none"};
  border-radius: 5px;
  color: ${({ variant }) => (variant === "cancel" ? "orange" : "white")};
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;
Container.displayName = "Container";
