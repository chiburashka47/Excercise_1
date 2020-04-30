import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import "../../style/index.css";

const app = () => {
  const data = [
    { label: "Going to learn React", important: true, id: "123" },
    { label: "That is so good", important: false, id: "2144" },
    { label: "I need a break...", important: false, id: "wqrq" },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};
export default app;
