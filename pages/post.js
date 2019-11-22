import React from "react";
import Layout from "layouts/Main";
import { getPost } from "api/posts";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

const PostPage = ({ post }) => {
  console.log("a", post);
  if (!post) {
    return "xLoading";
  }
  return (
    <Layout title="Záznam!">
      <h1>{post.title}</h1>
      <BlockContent blocks={post.body} serializers={serializers} />
    </Layout>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug);
  const json = await res.json();
  return { post: json.result[0] };
};

export default PostPage;
