import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
	return (
		<Layout>
			<h1>Hello</h1>
			<p>you folks</p>
			<p>
				Need a developer? <Link to="/contact">drop a message</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;
