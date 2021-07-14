import * as React from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMarkdownRemark.nodes.map(node => (
          <li key={node.frontmatter.url}>
            {node.frontmatter.title}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
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