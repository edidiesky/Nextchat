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
      providesTags: ["Channel"],
    }),
    createChannel: builder.mutation({
      query: ({ workspaceid, ...formdata }) => ({
        method: "POST",
        body: formdata,
        credentials: "include",
        url: `${CHANNEL_URL}/${workspaceid}`,
      }),
      invalidatesTags: ["Channel"],
    }),
    getSingleChannel: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${CHANNEL_URL}/${data?.id}/${data?.workspaceid}`,
      }),
      providesTags: ["Channel"],
    }),
    updateChannel: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${CHANNEL_URL}/${data?.id}/${data?.workspaceid}`,
      }),
      invalidatesTags: ["Channel"],
    }),
    deleteChannel: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        credentials: "include",
        url: `${CHANNEL_URL}/${data?.id}/${data?.workspaceid}`,
      }),
      invalidatesTags: ["Channel"],
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
