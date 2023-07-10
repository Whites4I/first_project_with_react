import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "/error", element: <Error /> },
  { path: "/*", element: <Error /> },
];

export const publicRoutes = [{ path: "/*", element: <Login /> }];
