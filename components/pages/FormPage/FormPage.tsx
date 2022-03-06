import AddUserForm from "molecules/AddUserForm";
import React from "react";
import { useGetAllUsersQuery } from "store/usersApi";
import { Container } from "./styles";

type Props = {};

const FormPage = (props: Props) => {
  return (
    <Container>
      <AddUserForm />
    </Container>
  );
};

export default FormPage;
