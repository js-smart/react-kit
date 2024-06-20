import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>React Kit Demo</h1>
			<hr />
			<main>
				{/* Nested routes render here */}
				<Outlet />
			</main>
			<br /> <br />
			<nav style={{ textAlign: 'center' }}>
				<Link to="/">Home</Link> <br />
			</nav>
		</>
	);
}
