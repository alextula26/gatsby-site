import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Author from './Author';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import * as styles from './Post.module.scss';

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const {
    tags,
    title,
    date,
    socialImage
  } = post.frontmatter;

  const img = getImage(socialImage.childImageSharp);

  return (
    <div className={styles.post}>
      <Link className={styles.postHomeButton} to="/">All Articles</Link>

      <div className={styles.postContent}>
        <div style={{ textAlign: 'center' }}><GatsbyImage image={img} alt={title} /></div>
        <Content body={html} title={title} />
      </div>

      <div className={styles.postFooter}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>
    </div>
  );
};

export default Post;
