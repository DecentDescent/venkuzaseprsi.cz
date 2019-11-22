import React from "react";
import { LayoutPost } from "../components/Layout";
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
    <LayoutPost
      imageAuthor={post.imageAuthor}
      imageLink={post.imageLink}
      image={post.image}
    >
      <h1>{post.title}</h1>
      <h4>{post.category}</h4>
      <h4>{post.song}</h4>
      <BlockContent blocks={post.body} serializers={serializers} />
      <Link href="/">
        <a>Domůůůů</a>
      </Link>
    </LayoutPost>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug);
  const json = await res.json();
  return { post: json.result[0] };
};

export default PostPage;
