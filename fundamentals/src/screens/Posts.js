import React from "react";
import PropTypes from "proptypes";

function Posts({ post, onRemove }) {
  return (
    <div>
      <article style={{ backgroundColor: "#25D1BF" }}>
        <strong>{post.title}</strong>
        <button onClick={() => onRemove(post.id)}>Remover</button>
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
