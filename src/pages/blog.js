import * as React from 'react'
import Layout from './layout'
import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        nodes.map(node => {
          const { category, url, title } = node.frontmatter;
          return (<li key={node.frontmatter.url}>
            <Link key={node.id} to={`/blogs/${category}/${url}`}>{title}</Link>
          </li> )
        })
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogPage {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          category
          title
          url
        }
      }
    }
  }
`
export default BlogPage