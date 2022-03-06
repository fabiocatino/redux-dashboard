import { faker } from "@faker-js/faker";
import Button from "atoms/Button";
import FormInput from "atoms/FormInput";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "store/userSlice";
import { Buttons, Container, FieldsContainer, FormContainer } from "./styles";

type AddUserFormProps = {};

const AddUserForm = ({}: AddUserFormProps) => {
  const dispatch = useDispatch(),
    router = useRouter(),
    { id, name, email, username, city } = router.query,
    [value, setValue] = useState({ name, email }),
    [error, setError] = useState<any>({});

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!value.name)
      setError((prevState: any) => ({
        ...prevState,
        name: "Field cannot be empty",
      }));
    if (!value.email)
      setError((prevState: any) => ({
        ...prevState,
        email: "Field cannot be empty",
      }));

    if (!value.name || !value.email || error.name || error.email) return;
    if (e.target.type === "text") {
    }
    if (id) {
      dispatch(
        editUser({
          id: Number(id),
          name: value.name!.toString(),
          username,
          address: {
            city,
          },
          email: value.email!.toString(),
        })
      );
    } else {
      dispatch(
        addUser({
          id: Math.floor(Math.random() * 100),
          name: value.name!.toString(),
          username: faker.animal.horse(),
          email: value.email!.toString(),
          address: {
            city: faker.address.cityName(),
          },
        })
      );
    }
    router.push("/");
  };

  const changeHandler = (e: any) => {
    if (e.target.type === "text") {
      setError((prevState: any) => ({
        ...prevState,
        name: "",
      }));
      if (e.target.value.length <= 2) {
        setError((prevState: any) => ({
          ...prevState,
          name: "Name is too short.",
        }));
      } else if (!e.target.value.trim())
        setError((prevState: any) => ({
          ...prevState,
          name: "Empty value",
        }));
      setValue({ name: e.target.value, email: value.email });
    }

    if (e.target.type === "email") {
      setError((prevState: any) => ({
        ...prevState,
        email: "",
      }));

      if (regex.test(e.target.value) === false) {
        setError((prevState: any) => ({
          ...prevState,
          email: "Invalid Email",
        }));
      }

      setValue({ name: value.name, email: e.target.value });
    }
  };

  return (
    <Container>
      <h1>Form</h1>
      <FormContainer>
        <form>
          <FieldsContainer>
            <FormInput
              onChange={(e) => changeHandler(e)}
              type="text"
              required
              label="Name"
              error={error.name}
              value={value.name?.toString() || ""}
            />
            <FormInput
              onChange={(e) => changeHandler(e)}
              type="email"
              required
              label="Email"
              error={error.email}
              value={value.email?.toString() || ""}
            />
            <Buttons>
              <Button
                title="Cancel"
                variant="cancel"
                onClick={() => router.push("/")}
              />
              <Button
                type="submit"
                title="Submit"
                variant="submit"
                onClick={(e: any) => submitHandler(e)}
              />
            </Buttons>
          </FieldsContainer>
        </form>
      </FormContainer>
    </Container>
  );
};

export default AddUserForm;

const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
