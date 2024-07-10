import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ButtonsDemo from './buttons/ButtonsDemo';
import SnackBarDemo from './snack-bar/SnackBarDemo';
import DialogDemo from './dialog/DialogDemo';
import Root from '../routes/root';
import CenterCircularProgressDemo from './progress-bar/CenterCircularProgressDemo';
import AllBooks from './all-books/AllBooks';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
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
				element: <CenterCircularProgressDemo />,
			},
			{
				path: '/books',
				element: <AllBooks />,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
