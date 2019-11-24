import React from "react";
import { LayoutHome as Layout } from "../components/Layout";
import { getPosts } from "../api/posts";
import Post from "../components/Post";

const IndexPage = ({ posts }) => {
  if (!posts) {
    return "Loading";
  }

  return (
    <Layout>
      <h1>Venku zase prší</h1>
      {posts.result.map(p => (
        <article>
          <Post key={p.orderId} post={p} type="home" />
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
