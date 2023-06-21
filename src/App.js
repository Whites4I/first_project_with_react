import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((i) => i.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />

      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Sort by'
        option={[
          { value: "title", name: "by name" },
          { value: "body", name: "by description" },
        ]}
      />

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title='Posts for JS' />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not find</h1>
      )}
    </div>
  );
}

export default App;
