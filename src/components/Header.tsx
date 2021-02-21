import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';

import classes from './Header.module.scss';

const Header = () => {
	const data = useStaticQuery<GatsbyTypes.Query>(query);

	return (
		<header className={classes.header}>
			<h1>
				<Link className={classes.title} to="/">
					{data.site?.siteMetadata?.description}
				</Link>
			</h1>
			<nav>
				<Link className={classes.navItem} activeClassName={classes.active} to="/">
					Index
				</Link>
				<Link className={classes.navItem} activeClassName={classes.active} to="/blog">
					Blog
				</Link>
				<Link className={classes.navItem} activeClassName={classes.active} to="/contact">
					Contact
				</Link>
				<Link className={classes.navItem} activeClassName={classes.active} to="/about">
					About
				</Link>
			</nav>
		</header>
	);
};

export default Header;

const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
