import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

const ContactPage = () => {
	return (
			<Layout>
				<h1>Contact</h1>
				<p>Drop us a message.</p>
				<p>
					Find us in{' '}
					<Link to="https://twitter.com" target="blank">
						twitter
					</Link>
				</p>
			</Layout>
	);
};

export default ContactPage;
