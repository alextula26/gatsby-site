const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const posts = await graphql(`
    query PostListQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/contents/posts/" } }
      ) {
        nodes {
          frontmatter {
            category
            title
            url
          }
        }
      }
    }
  `);

  console.log(posts.data.allMarkdownRemark.nodes)

  posts.data.allMarkdownRemark.nodes.forEach((node) => {
    const { url, category } = node.frontmatter;
    actions.createPage({
      path: `/posts/${category}/${url}`,
      component: path.resolve('./src/templates/single-post.js'),
      context: { url },
    });
  });
};
