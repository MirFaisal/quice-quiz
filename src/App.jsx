import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Error from "./components/error/Error";
import Topics from "./components/topics/Topics";
import Layout from "./layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Topics />,
        },
        {
          path: "/topic",
          element: <Topics />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
