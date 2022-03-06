import React from "react";
import { Container, Input } from "./styles";

type FormInputProps = {
  type: string;
  label: string;
  required?: boolean;
  onChange?: (e: any) => void;
  value?: string;
  error?: string;
};

const FormInput = ({
  type,
  label,
  required,
  onChange,
  value,
  error,
}: FormInputProps) => {
  return (
    <>
      <Container>
        {label}
        <div style={{ display: "flex", flexDirection: "column", color: "red" }}>
          <Input
            type={type}
            required={required}
            onChange={onChange}
            value={value}
          />
          <span>{error}</span>
        </div>
      </Container>
    </>
  );
};

export default FormInput;
