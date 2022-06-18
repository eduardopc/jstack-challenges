import React from "react";
import PropTypes from 'prop-types';

import Button from "../Button";

import * as S from './styles'

function Posts({ post, onRemove }) {
  return (
    <div>
      <article style={{ backgroundColor: "#25D1BF" }}>
        <strong style={{ marginRight: 5 }}>{post.title}</strong>
        <Button onClick={() => onRemove(post.id)}>Remover</Button>
        <br />
        <S.description>{post.description}</S.description>
        <S.likes>Likes: {post.likes}</S.likes>
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
