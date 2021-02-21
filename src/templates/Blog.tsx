import React from 'react';
import {graphql, PageProps} from 'gatsby';
import Layout from '../components/Layout';

const Blog = ({data}: PageProps) => {
	const markdownRemark = (data as GatsbyTypes.Query).markdownRemark as GatsbyTypes.MarkdownRemark;
	console.log(data);
	return (
		<Layout>
			<h1>{markdownRemark.frontmatter?.title}</h1>
			<p>{markdownRemark.frontmatter?.date}</p>
			<div dangerouslySetInnerHTML={{__html: markdownRemark.html as string}}></div>
		</Layout>
	);
};

export default Blog;

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`;
