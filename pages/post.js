import React from "react";
import { LayoutPost } from "../components/Layout";
import { getPost } from "../api/posts";
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

const PostPage = ({ post }) => {
  if (!post) {
    return "Loading";
  }
  return (
    <LayoutPost
      imageAuthor={post.imageAuthor}
      imageLink={post.imageLink}
      image={post.image}
      imagePosition={post.imagePosition}
      title={post.title}
      excerpt={post.excerpt}
      order={post.order}
      song={post.song}
      songURL={post.songURL}
    >
      <BlockContent blocks={post.body} serializers={serializers} />
      <footer>
        <Link href="/">
          <svg viewBox="0 0 47.707 47.707">
            <path d="m26.561 0h-24c-.552 0-1 .447-1 1s.448 1 1 1h24c9.925 0 18 8.075 18 18s-8.075 18-18 18h-21.586l6.293-6.293-1.414-1.414-7.999 7.999c-.001.001-.001.001-.002.002l-.707.706.706.706.002.002 7.999 7.999 1.414-1.414-6.292-6.293h21.586c11.028 0 20-8.972 20-20s-8.973-20-20-20z" />
          </svg>
        </Link>
      </footer>
    </LayoutPost>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.slug);
  const json = await res.json();
  return { post: json.result[0] };
};

export default PostPage;
