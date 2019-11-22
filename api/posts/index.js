import fetch from "isomorphic-fetch";

export function getPosts() {
  return fetch(
    "https://26mzd5qy.api.sanity.io/v1/data/query/venkuzaseprsicz?query=*[_type%20==%20%27post%27]|%20order(_createdAt desc)"
  );
}

export function getPost(slug) {
  return fetch(
    `https://26mzd5qy.api.sanity.io/v1/data/query/venkuzaseprsicz?query=*[slug.current=="${slug}"]`
  );
}

export function getNextPost(id) {
  return fetch(
    `https://26mzd5qy.api.sanity.io/v1/data/query/venkuzaseprsicz?query=*[_type%20==%20%27post%27]&&order=="${id +
      1}"]`
  );
}
