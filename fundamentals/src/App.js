import React, { useEffect, useState, useLayoutEffect } from "react";

import AddPost from "./components/AddPost";
import Header from "./components/Header";
import Posts from "./components/Posts";

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
  const [first, setFirst] = useState(true);

  useEffect(() => {
    console.debug("Mount component");

    return () => {
      console.debug("Ummount component");
    };
  }, []);

  useLayoutEffect(() => {
    for (let index = 0; index <= 15000; index++) {
      console.debug(index);
      if (index === 15000) {
        console.debug("Mount component useLayoutEffect");
      }
    }
  }, [])

  function handleAddPost() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
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
      <button onClick={() => setFirst(!first)}>Set state</button>
      {first && (
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
      )}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default App;
