import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "types/user";

const baseUrl =
  "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data ";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], string>({
      query: () => ({
        url: baseUrl,
      }),
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
