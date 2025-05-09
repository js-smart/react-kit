import { createBrowserRouter } from 'react-router-dom';
import Home from '../app/Home';
import ButtonsDemo from '../app/buttons/ButtonsDemo';
import SnackBarDemo from '../app/snack-bar/SnackBarDemo';
import DialogDemo from '../app/dialog/DialogDemo';
import CenterCircularProgressDemo from '../app/progress-bar/CenterCircularProgressDemo';
import AllBooks from '../app/all-books/AllBooks';
import App from '../app/app';
import ReactIfDemo from '../app/react-if/ReactIfDemo';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
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
			{
				path: '/react-if',
				element: <ReactIfDemo />,
			},
		],
	},
]);
