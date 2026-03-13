import { RootRoute, Route, Router } from '@tanstack/react-router';
import Home from '../app/Home';
import AllBooks from '../app/all-books/AllBooks';
import App from '../app/app';
import ButtonsDemo from '../app/buttons/ButtonsDemo';
import DialogDemo from '../app/dialog/DialogDemo';
import LinksDemo from '../app/links/LinksDemo';
import CenterCircularProgressDemo from '../app/progress-bar/CenterCircularProgressDemo';
import ReactIfDemo from '../app/react-if/ReactIfDemo';
import SnackBarDemo from '../app/snack-bar/SnackBarDemo';

const rootRoute = new RootRoute({
	component: App,
});

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home,
});

const homeRoute = new Route({
	getParentRoute: () => rootRoute,
	path: 'home',
	component: Home,
});

const buttonsRoute = new Route({
	getParentRoute: () => rootRoute,
	path: 'buttons',
	component: ButtonsDemo,
});

const snackBarRoute = new Route({
	getParentRoute: () => rootRoute,
	path: 'snack-bar',
	component: SnackBarDemo,
});

const dialogRoute = new Route({
	getParentRoute: () => rootRoute,
	path: 'dialog',
	component: DialogDemo,
});

const circularProgressRoute = new Route({
	getParentRoute: () => rootRoute,
	path: 'circular-progress',
	component: CenterCircularProgressDemo,
});

const booksRoute = new Route({
	getParentRoute: () => rootRoute,
	path: 'books',
	component: AllBooks,
});

const reactIfRoute = new Route({
	getParentRoute: () => rootRoute,
	path: 'react-if',
	component: ReactIfDemo,
});

const linksRoute = new Route({
	getParentRoute: () => rootRoute,
	path: 'links',
	component: LinksDemo,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	homeRoute,
	buttonsRoute,
	snackBarRoute,
	dialogRoute,
	circularProgressRoute,
	booksRoute,
	reactIfRoute,
	linksRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface Register {
		router: typeof router;
	}
}
