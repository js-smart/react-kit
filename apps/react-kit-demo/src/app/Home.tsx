import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<ul>
				<Link to="/buttons">Buttons</Link> <br />
				<Link to="/snack-bar">Snack Bar</Link> <br />
				<Link to="/dialog">Dialog</Link> <br />
				<Link to="/circular-progress">Circular Progress</Link> <br />
				<Link to="/books">All Books</Link> <br />
				<Link to="/react-if">React If Demo</Link> <br />
				<Link to="/links">Links Demo</Link> <br />
			</ul>
		</div>
	);
}
