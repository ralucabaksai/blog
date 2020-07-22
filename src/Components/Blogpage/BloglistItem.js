import React from "react";
import { Link } from "react-router-dom";

function BloglistItem({ post }) {
  return (
    <article className='mb-4'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/blogpage/article`}> Read more...</Link>
    </article>
  );
}

export default BloglistItem;
