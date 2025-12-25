import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
  }),
  tagTypes: ["DATA"],
  endpoints: (builder) => ({
    // simple get query
    getData: builder.query({
      query: () => ({
        url: "/get-endpoint",
      }),
      providesTags: ["DATA"],
    }),
  }),
  // endpoints: EndPointMethods,
});

export const { useGetDataQuery } = api;
