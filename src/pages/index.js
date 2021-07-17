import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout pageTitle="Home Page">
      <p>Text</p>
      <StaticImage
        alt="My kittens"
        src="../images/kittens.jpg"
        width={800}
        layout="constrained"
        style={{ border: '10px solid red' }}
        placeholder="oh, my like kitten"
      />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
);
export default IndexPage;