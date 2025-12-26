import { createBrowserRouter } from "react-router-dom";
import Home from "../app/Home";
import AllBooks from "../app/all-books/AllBooks";
import App from "../app/app";
import ButtonsDemo from "../app/buttons/ButtonsDemo";
import DialogDemo from "../app/dialog/DialogDemo";
import LinksDemo from "../app/links/LinksDemo";
import CenterCircularProgressDemo from "../app/progress-bar/CenterCircularProgressDemo";
import ReactIfDemo from "../app/react-if/ReactIfDemo";
import SnackBarDemo from "../app/snack-bar/SnackBarDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/buttons",
        element: <ButtonsDemo />,
      },
      {
        path: "/snack-bar",
        element: <SnackBarDemo />,
      },
      {
        path: "/dialog",
        element: <DialogDemo />,
      },
      {
        path: "/circular-progress",
        element: <CenterCircularProgressDemo />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/react-if",
        element: <ReactIfDemo />,
      },
      {
        path: "/links",
        element: <LinksDemo />,
      },
    ],
  },
]);
