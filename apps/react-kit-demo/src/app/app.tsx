import { Link, Outlet } from 'react-router-dom';
import React from 'react';

export default function App() {
	return (
		<>
			<div className="sidenav">
				<ul>
					<Link to="/">Home</Link> <br />
					<Link to="/buttons">Buttons</Link> <br />
					<Link to="/snack-bar">Snack Bar</Link> <br />
					<Link to="/dialog">Dialog</Link> <br />
					<Link to="/circular-progress">Circular Progress</Link> <br />
					<Link to="/books">All Books</Link> <br />
				</ul>
			</div>

			<div className={'main'}>
				<h1 style={{ textAlign: 'center' }}>React Kit Demo</h1>
				<hr />
				<main>
					{/* Nested routes render here */}
					<Outlet />
				</main>
			</div>
		</>
	);
}
