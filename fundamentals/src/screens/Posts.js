import React from "react";
import PropTypes from "proptypes";

import Button from "./Button";

function Posts({ post, onRemove }) {
  return (
    <div>
      <article style={{ backgroundColor: "#25D1BF" }}>
        <strong style={{ marginRight: 5 }}>{post.title}</strong>
        <Button onClick={() => onRemove(post.id)}>Remover</Button>
        <br />
        <p>{post.description}</p>
        Likes: {post.likes}
      </article>
      <br />
    </div>
  );
}

Posts.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Posts;
