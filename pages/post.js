import React from "react";
import { LayoutPost } from "../components/Layout";
import { getPost } from "../api/posts";

const PostPage = ({ post }) => {
  if (!post) {
    return "Loading";
  }
  return <LayoutPost data={post} />;
};

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug);
  const json = await res.json();
  return { post: json.result[0] };
};

export default PostPage;
