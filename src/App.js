import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";



function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
  ]);

const addNewPost = () => {
  
}

  return (
    <div className="App"> 
    <form>
      <MyInput type="text" placeholder="Name post"/>
      <MyInput type="text" placeholder="Description post"/>
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
      <PostList posts={posts} title='list posts 1'/>
    </div>
  );
}

export default App;
  