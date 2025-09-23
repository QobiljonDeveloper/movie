import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import("@/pages/home"));
const Movie = lazy(() => import("@/pages/movie"));
const BookMarks = lazy(() => import("@/pages/bookmarks"));
const Search = lazy(() => import("@/pages/search"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/movies", element: <Movie /> },
        { path: "/bookmarks", element: <BookMarks /> },
        { path: "/search", element: <Search /> },
        { path: "/movies/:id", element: <MovieDetail /> },
      ],
    },
    { path: "*", element: <div>404</div> },
  ]);
  return router;
};

export default memo(AppRouter);
