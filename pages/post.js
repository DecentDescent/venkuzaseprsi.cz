import React from "react";
import Layout from "../layouts/Main";
import { getNextPost, getPost } from "../api/posts";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "../routes";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

const getNext = id => {
  const nextPost = getNextPost(id);
  console.log(nextPost);
};
const PostPage = ({ post }) => {
  if (!post) {
    return "Loading";
  }
  return (
    <Layout>
      <h1>{post.order}</h1>
      <BlockContent blocks={post.body} serializers={serializers} />
      <Link href="/">
        <a>Domůůůů</a>
      </Link>
    </Layout>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug);
  const json = await res.json();
  return { post: json.result[0] };
};

export default PostPage;
