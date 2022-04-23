import React, { useEffect, useState } from "react";

import AddPost from "./AddPost";
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

  useEffect(() => {
    console.debug("Mount component");

    return () => {
      console.debug("Ummount component");
    };
  });

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
      <Header title="Header da Aplicação com CSS Modules">
        <AddPost handleAddPost={handleAddPost} />
      </Header>

      {
        posts.map((post, index) => (
          <Posts key={index} onRemove={handleRemovePost} post={post} />
        ))
      }
    </>
  );
}

export default App;
