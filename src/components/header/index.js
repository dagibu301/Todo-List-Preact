import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Link activeClassName={style.active} href="/">TodoApp</Link>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/create">Create</Link>
		</nav>
	</header>
);

export default Header;
