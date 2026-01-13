import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-crud-backend-sandy.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["USER"],
  endpoints: (builder) => ({
    // user get query
    getUser: builder.query({
      query: () => "/users/",
      providesTags: ["USER"],
    }),
    // create user mutation
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/users/createUser",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["USER"],
    }),
    // update user mutation
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["USER"],
    }),
    // delete user mutation
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
  // endpoints: EndPointMethods,
});

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = api;
