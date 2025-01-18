import { CHANNEL_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const channelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserChannel: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${CHANNEL_URL}/${data?.workspaceid}`,
      }),
      providesTags: (result, error, workspaceid) => [
        { type: "Channels", id: workspaceid },
      ],
    }),
    createChannel: builder.mutation({
      query: ({ workspaceid, ...formdata }) => ({
        method: "POST",
        body: formdata,
        credentials: "include",
        url: `${CHANNEL_URL}/${workspaceid}`,
      }),
    }),
    getSingleChannel: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${CHANNEL_URL}/${data?.id}/${data?.workspaceid}`,
      }),
    }),
    updateChannel: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${CHANNEL_URL}/${data?.id}/${data?.workspaceid}`,
      }),
    }),
    deleteChannel: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        credentials: "include",
        url: `${CHANNEL_URL}/${data?.id}/${data?.workspaceid}`,
      }),
    }),
  }),
});

export const {
  useGetAllUserChannelQuery,
  useDeleteChannelMutation,
  useUpdateChannelMutation,
  useGetSingleChannelQuery,
  useCreateChannelMutation,
} = channelApiSlice;
