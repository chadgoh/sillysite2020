import React from "react";
import { graphql, Link } from "gatsby";

const aboutTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <main style={{ maxWidth: "512", marginleft: "auto", marginRight: "auto" }}>
      <Link to="/">← Back to home page</Link>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </main>
  );
};

export default aboutTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
