import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';

import Layout from '../components/Layout';
import classes from './blog.module.scss';

const BlogPage = () => {
	const data = useStaticQuery<GatsbyTypes.Query>(query);

	return (
		<Layout>
			<h1>blog</h1>
			<ol className={classes.posts}>
				{data.allMarkdownRemark.edges.map(({node: {frontmatter, fields}}) =>
					frontmatter && fields ? (
						<li className={classes.post} key={fields.slug}>
							<Link to={`/blog/${fields.slug}` ?? '/'}>
								<h2>{frontmatter.title}</h2>
								<p>{frontmatter.date}</p>
							</Link>
						</li>
					) : null,
				)}
			</ol>
		</Layout>
	);
};

export default BlogPage;

const query = graphql`
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						date
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;
