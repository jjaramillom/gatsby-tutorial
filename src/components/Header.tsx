import React from 'react';
import {Link} from 'gatsby';

const Header = () => (
	<header>
		<h1>Jacobo's Blog site</h1>
		<nav>
			<Link to="/">Index</Link>&nbsp;|&nbsp;
			<Link to="/blog">Blog</Link>&nbsp;|&nbsp;
			<Link to="/contact">Contact</Link>&nbsp;|&nbsp;
			<Link to="/about">About</Link>
		</nav>
	</header>
);

export default Header;
