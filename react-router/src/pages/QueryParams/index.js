import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function QueryParams() {
  const { id, author } = useParams();
  const { search } = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <>
      <h1>
        Props {id} {author}
      </h1>
      <h2>Query Params - Token: {queryParams.get("token")}</h2>
    </>
  );
}
