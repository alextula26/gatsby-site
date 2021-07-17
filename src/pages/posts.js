import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

const PostsPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout pageTitle="My Posts">
      <ul>
      {
        nodes.map((node) => {
          const {
            category, url, title, image
          } = node.frontmatter;
          const img = getImage(image);
          return (<li key={node.frontmatter.url}>
            <GatsbyImage image={img} alt={title} />
            <Link key={node.id} to={`/posts/${category}/${url}`}>{title}</Link>
          </li>);
        })
      }
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query PostsPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contents/posts/" } }
    ) {
      nodes {
        id
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 200, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
export default PostsPage;