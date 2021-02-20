import React, {PropsWithChildren} from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {};

const Layout = ({children}: PropsWithChildren<Props>) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;
