import React from 'react';
import {Link} from 'gatsby';

import classes from './Header.module.scss';

const Header = () => (
	<header>
		<h1>Jacobo's Blog site</h1>
		<nav>
			<Link className={classes.link} to="/">
				Index
			</Link>
			&nbsp;|&nbsp;
			<Link className={classes.link} to="/blog">
				Blog
			</Link>
			&nbsp;|&nbsp;
			<Link className={classes.link} to="/contact">
				Contact
			</Link>
			&nbsp;|&nbsp;
			<Link className={classes.link} to="/about">
				About
			</Link>
		</nav>
	</header>
);

export default Header;
