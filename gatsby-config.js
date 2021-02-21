/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Full-stack-bootcamp',
		author: 'Jacobo Jaramillo',
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`,
				ignore: [`**/__generated__`],
			},
		},
		{
			resolve: `gatsby-plugin-typegen`,
			options: {
				outputPath: `src/__generated__/gatsby-types.d.ts`,
				emitSchema: {
					'src/__generated__/gatsby-introspection.json': true,
				},
				emitPluginDocuments: {
					'src/__generated__/gatsby-plugin-documents.graphql': true,
				},
			},
		},
	],
};
