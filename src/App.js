import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "a", body: "e" },
    { id: 2, title: "v", body: "w" },
    { id: 3, title: "s", body: "a" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((i) => i.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search...'
      />
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
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title='Posts for JS'
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not find</h1>
      )}
    </div>
  );
}

export default App;
