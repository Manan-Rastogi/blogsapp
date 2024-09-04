import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import Protected from "./components/AuthLayout.jsx";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import EditPost from "./pages/EditPost.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import Post from "./pages/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Protected>
            <AllPosts />
          </Protected>
        ),
      },
      {
        path: "/add-post/:slug",
        element: (
          <Protected>
            <AddPost />
          </Protected>
        ),
      },

      {
        path: "/edit-post/:slug",
        element: (
          <Protected>
            <EditPost />
          </Protected>
        ),
      },

      {
        path: "/post/:slug",
        element: (
          <Protected>
            <Post />
          </Protected>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
