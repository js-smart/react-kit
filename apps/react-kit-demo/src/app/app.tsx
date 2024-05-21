import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ButtonsDemo from './buttons/ButtonsDemo';
import SnackBarDemo from './SnackBarDemo';
import DialogDemo from './DialogDemo';
import Root from '../routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: '/buttons',
        element: <ButtonsDemo />,
      },
      {
        path: '/snack-bar',
        element: <SnackBarDemo />,
      },
      {
        path: '/dialog',
        element: <DialogDemo />,
      },
      {
        path: '/circular-progress',
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
