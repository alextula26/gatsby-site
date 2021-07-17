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
            url
          }
        }
      }
    }
  `);

  const news = await graphql(`
    query NewsListQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/contents/news/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  posts.data.allMarkdownRemark.nodes.forEach((node) => {
    const { url, category } = node.frontmatter;
    actions.createPage({
      path: `/posts/${category}/${url}`,
      component: path.resolve('./src/templates/single-post.js'),
      context: { url },
    });
  });

  news.data.allMarkdownRemark.nodes.forEach((node) => {
    const { slug } = node.frontmatter;
    actions.createPage({
      path: `/news/${slug}`,
      component: path.resolve('./src/templates/single-news.js'),
      context: { slug },
    });
  });
};
