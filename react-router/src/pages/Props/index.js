import React from "react";
import { useParams } from "react-router-dom";

export default function Props() {
  const { id, author } = useParams();

  return (
    <h1>
      Props {id} {author}
    </h1>
  );
}
