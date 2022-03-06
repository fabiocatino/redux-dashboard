import React from "react";
import { Container } from "./styles";

type ButtonProps = {
  variant?: string;
  title?: string;
  type?: string;
  onClick?: (...args: any[]) => void;
  onCancel?: () => void;
};

const Button = ({ variant, title, type, onClick, onCancel }: ButtonProps) => {
  return (
    <Container onClick={onClick} variant={variant}>
      {title}
    </Container>
  );
};

export default Button;
