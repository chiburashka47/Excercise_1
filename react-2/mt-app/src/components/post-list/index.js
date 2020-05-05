import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

export default function PostList({ posts, onDelete, onToggleStatus }) {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        {/* <PostListItem label={item.label} important={item.important} /> */}
        <PostListItem
          {...itemProps}
          onDelete={() => {
            onDelete(id);
          }}
          onToggleLike={() => {
            onToggleStatus(id, "like");
          }}
          onToggleImportant={() => {
            onToggleStatus(id, "id");
          }}
        />
      </li>
    );
  });

  return <ListGroup className="app-list ">{elements}</ListGroup>;
}
