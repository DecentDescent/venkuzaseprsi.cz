import React from "react";
import Layout from "../layouts/Main";
import { getPosts } from "../api/posts";
import Post from "../components/Post";

const IndexPage = ({ posts }) => {
  if (!posts) {
    return "Loading";
  }

  return (
    <Layout>
      {posts.result.map(p => (
        <article>
          <Post key={p.title} post={p} type="home" />
        </article>
      ))}
    </Layout>
  );
};

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts();
  const json = await res.json();
  return { posts: json };
};

export default IndexPage;
