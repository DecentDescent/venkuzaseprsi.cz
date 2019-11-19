import fetch from "isomorphic-fetch";

export function getPosts() {
  return fetch("https://26mzd5qy.api.sanity.io/v1/data/query/venkuzaseprsicz");
}

export function getPost(slug) {
  return fetch(
    `https://26mzd5qy.api.sanity.io/v1/data/query/venkuzaseprsicz?query=*[_type%20==%20%27post%27]}`
  );
}
