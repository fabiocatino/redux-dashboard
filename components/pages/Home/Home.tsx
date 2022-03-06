import Button from "atoms/Button";
import TableCell from "atoms/TableCell";
import TableRow from "atoms/TableRow";
import { useRouter } from "next/router";
import ConfirmPopup from "organisms/ConfirmPopup";
import { Header } from "pages/FormPage/styles";
import React, { useEffect, useState } from "react";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllUsersQuery } from "store/usersApi";
import { deleteUser, setUsers } from "store/userSlice";
import { User } from "types/user";
import {
  Container,
  MainTableHeader,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "./styles";

const Home = () => {
  const { data } = useGetAllUsersQuery(""),
    dispatch = useDispatch(),
    router = useRouter(),
    [togglePopup, setTogglePopup] = useState<boolean>(false),
    [chosenUser, setChosenUser] = useState<User>(),
    [list, setList] = useState<User[]>([]),
    [isSorted, setIsSorted] = useState<boolean>(false),
    users = useSelector((state: any) => state.user);

  useEffect(() => {
    if (!users.length) {
      const userData =
        data &&
        data.map((user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: {
            city: user.address.city,
          },
        }));
      dispatch(setUsers(userData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dispatch]);

  useEffect(() => {
    users ? setList([...users]) : setList([]);
  }, [users]);

  const openModal = (user: User) => {
    setTogglePopup(true);
    setChosenUser(user);
  };

  const deleteHandler = () => {
    dispatch(deleteUser(chosenUser!.id));
    setTogglePopup(false);
  };

  const sortHandler = () => {
    setIsSorted((prevState) => !prevState);
    const sortArr = !isSorted
      ? list.sort((a, b) => (a.username > b.username ? 1 : -1))
      : list.sort((a, b) => (a.username > b.username ? -1 : 1));
    setList([...sortArr]);
  };

  return (
    <Container>
      <TableContainer>
        <MainTableHeader>
          User List
          <Button
            title="Add New"
            variant="create"
            onClick={() => router.push("/add-user")}
          />
        </MainTableHeader>
        {list && list.length ? (
          <Table>
            <TableHead>
              {tw?.map((field, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    {field}
                    {field === "Username" &&
                      (!isSorted ? (
                        <BiSortUp key={idx} onClick={sortHandler} size={20} />
                      ) : (
                        <BiSortDown key={idx} onClick={sortHandler} size={20} />
                      ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {list?.map((user: any) => (
                <TableRow key={user?.id}>
                  <TableCell>{user?.id}</TableCell>
                  <TableCell>{user?.name}</TableCell>
                  <TableCell>{user?.username}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user?.address?.city}</TableCell>
                  <TableCell>
                    <Button
                      title="Edit"
                      variant="edit"
                      onClick={() =>
                        router.push({
                          pathname: "add-user",
                          query: { ...user, city: user.address.city },
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      title="Delete"
                      onCancel={() => setTogglePopup(false)}
                      onClick={() => openModal(user)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Header>No users found.</Header>
        )}
        {togglePopup && (
          <ConfirmPopup
            data={chosenUser}
            onClick={deleteHandler}
            onCancel={() => setTogglePopup(false)}
          />
        )}
      </TableContainer>
    </Container>
  );
};

export default Home;

const tw = ["Id", "Name", "Username", "Email", "City", "Edit", "Delete"];
