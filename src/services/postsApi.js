import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const postsApiSlice = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (res) => res.sort((a, b) => a.id - b.id),
      providesTags: ["Posts"]
    }),
    addPost: builder.query({
      query: builder.mutation({
        query: (post) => ({
          url: "/posts",
          method: "post",
          body: post
        }),
        providesTags: ["Posts"]
      })
    }),
    updatePost: builder.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "patch",
        body: post
      }),
      providesTags: ["Posts"]
    }),
    deletePost: builder.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "delete",
        body: post.id
      })
    })
  })
});

export const { useGetPostsQuery } = postsApiSlice;
