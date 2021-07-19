'use strict';

const path = require('path');
const _ = require('lodash');

const { paginate } = require('gatsby-awesome-pagination');
const siteConfig = require('../../config');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);

  const { postsPerPage } = siteConfig;
  const posts = _.get(result, 'data.allMarkdownRemark.edges');

  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    itemsPerFirstPage: 4,
    component: path.resolve('./src/templates/index-template.js'),
    pathPrefix: ({ pageNumber }) => (
      (pageNumber === 0) ? '/' : '/page'
    )
  });
};
