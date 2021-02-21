import React, {PropsWithChildren} from 'react';

import Footer from './Footer';
import Header from './Header';
import '../styles/index.scss';
import classes from './Layout.module.scss';

type Props = {};

const Layout = ({children}: PropsWithChildren<Props>) => (
	<div className={classes.container}>
		<div className={classes.content}>
			<Header />
			{children}
		</div>
		<Footer />
	</div>
);

export default Layout;
