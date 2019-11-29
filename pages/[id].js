import { useRouter } from "next/router";
import { getPost } from "../api/posts";
import { LayoutPost } from "../components/Layout";
import { useState } from "react";

const Post = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  getPost(id).then(res => res.json().then(json => setData(json.result[0])));
  return data ? <LayoutPost data={data} /> : "Loading";
};

export default Post;
