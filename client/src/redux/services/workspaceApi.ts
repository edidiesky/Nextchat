
import { WORKSPACE_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const workspaceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserWorkSpace: builder.query({
      query: (_data) => ({
        method: "GET",
        credentials: "include",
        url: `${WORKSPACE_URL}`,
      }),
    }),
    createWorkSpace: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
        credentials: "include",
        url: `${WORKSPACE_URL}`,
      }),
    }),
    getSingleWorkSpace: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${WORKSPACE_URL}/${data?.id}/${data?.workspaceuserid}`,
      }),
    }),
    updateWorkSpace: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${WORKSPACE_URL}/${data?.id}/${data?.workspaceuserid}`,

      }),
    }),
    deleteWorkSpace: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        credentials: "include",
        url: `${WORKSPACE_URL}/${data?.id}/${data?.workspaceuserid}`,

      }),
    }),
  }),
});

export const {
  useGetAllUserWorkSpaceQuery,
  useDeleteWorkSpaceMutation,
  useUpdateWorkSpaceMutation,
  useGetSingleWorkSpaceQuery,
  useCreateWorkSpaceMutation
} = workspaceApiSlice;
