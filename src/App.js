import "./styles.css";
import { useGetPostsQuery } from "./services/postsApi";
import React from "react";
import { Box, Card, CardContent } from "@mui/material";

export default function App() {
  const { error, isLoading, data: posts } = useGetPostsQuery();
  return (
    <Box className="App">
      {isLoading && <p>Loding </p>}
      {error && (
        <p>
          An error occurred!! <strong>{error}</strong>{" "}
        </p>
      )}
      {posts && <Posts posts={posts} />}
    </Box>
  );
}

const Posts = function ({ posts }) {
  return posts.map((post) => (
    <Card
      style={{ padding: "5px 15px", margin: "10px 30px" }}
      elevation={3}
      key={post.id}
    >
      <CardContent>
        <h3 style={{ textTransform: "capitalize" }} as="h4" size="md">
          {post.title}
        </h3>
        <p>{post.body}</p>
      </CardContent>
    </Card>
  ));
};
