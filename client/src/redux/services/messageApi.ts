import { MESSAGE_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const MessageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMessage: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        credentials: "include",
        url: `${MESSAGE_URL}`,
      }),
    }),
    getSingleMessage: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${MESSAGE_URL}/${data?.id}`,
      }),
    }),
    getAllMessage: builder.query({
      query: (_data) => ({
        method: "GET",
        credentials: "include",
        url: `${MESSAGE_URL}`,
      }),
    }),
    deleteMessage: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${MESSAGE_URL}/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useCreateMessageMutation,
  useGetSingleMessageQuery,
  useGetAllMessageQuery,
  useDeleteMessageMutation
} = MessageApiSlice;
