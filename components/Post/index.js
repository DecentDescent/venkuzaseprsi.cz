import React from "react";
import { Link } from "../../routes";
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

const PostItem = ({ type, post }) => (
  <Link route="post" params={{ slug: post.slug.current }}>
    <a>
      <h3>{post.title}</h3>
      {type !== "home" ? (
        <BlockContent blocks={post.body} serializers={serializers} />
      ) : (
        ""
      )}
    </a>
  </Link>
);

export default PostItem;
