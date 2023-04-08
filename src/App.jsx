import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/error/Error";
import Quizs from "./components/quizs/Quizs";
import Topics from "./components/topics/Topics";
import Layout from "./layout/Layout";
import { topicsLoader } from "./loader/loader";

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
          loader: topicsLoader,
        },
        {
          path: "/topic",
          element: <Topics />,
          loader: topicsLoader,
        },
        {
          path: "/topic/:id",
          element: <Quizs />,
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
