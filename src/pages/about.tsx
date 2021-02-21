import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

const BlogPage = () => {
	return (
			<Layout>
				<h1>About</h1>
				<p>Some important data</p>
				<p>
					Want to know more? Click <a href="/contact">here</a>
				</p>
			</Layout>
	);
};

export default BlogPage;
 