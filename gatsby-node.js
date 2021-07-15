const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Blogs {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        category
                        url
                    }
                }
            }
        }
    `)
    
    data.allMarkdownRemark.nodes.forEach(node => {
        const { url, category } = node.frontmatter;
        actions.createPage({
            path: `/blogs/${category}/${url}`,
            component: path.resolve('./src/templates/single-blog.js'),
            context: { url }
        })
    })
}