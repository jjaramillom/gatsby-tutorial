import React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';

import Layout from '../components/Layout';

const BlogPage = () => {
	const data = useStaticQuery<GatsbyTypes.Query>(query);

	return (
		<Layout>
			<h1>blog</h1>
			<ol>
				{data.allMarkdownRemark.edges.map(({node: {frontmatter, fields}}) =>
					frontmatter && fields ? (
						<li key={fields.slug}>
							<Link to={`/blog/${fields.slug}` ?? '/'}>
								<h2>{frontmatter.title}</h2>
							</Link>
							<p>{frontmatter.date}</p>
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
