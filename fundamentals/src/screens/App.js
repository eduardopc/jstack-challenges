import React, { useState } from "react";

import Header from "./Header";
import Posts from "./Posts";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Post1",
      description: "Description Post1",
      likes: 20,
    },
    {
      id: Math.random(),
      title: "Post2",
      description: "Description Post2",
      likes: 30,
    },
    {
      id: Math.random(),
      title: "Post3",
      description: "Description Post3",
      likes: 5,
    },
    {
      id: Math.random(),
      title: "Post4",
      description: "Description Post4",
      likes: 40,
    },
  ]);

  function handleAddPost() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          title: `Post${prevState.length + 1}`,
          description: `Description Post${prevState.length + 1}`,
          likes: 20,
        },
      ]);
    }, 2000);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <>
      <Header title="Header da Aplicação">
        <h2>Header h2</h2>
        <button onClick={handleAddPost}>Adicionar Post</button>
      </Header>

      {posts.map((post, index) => (
        <Posts
          key={index}
          onRemove={handleRemovePost}
          post={{
            id: post.id,
            title: post.title,
            description: post.description,
            likes: post.likes,
          }}
        />
      ))}
    </>
  );
}

export default App;
