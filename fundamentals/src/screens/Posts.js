import React from "react";
import PropTypes from "proptypes";

function Posts({ title, description, likes }) {
  return (
    <div>
      <article style={{ backgroundColor: "#25D1BF" }}>
        <strong>{title}</strong>
        <br />
        <p>{description}</p>
        Likes: {likes}
      </article>
      <br />
    </div>
  );
}

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Posts;
