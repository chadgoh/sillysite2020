import React from "react";
import { graphql, Link } from "gatsby";

const aboutTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "25vw 75vw",
      }}>
      <div
        style={{
          display: "grid",
          backgroundColor: "#FFDAC1",
          height: "100vh",
        }}>
        <h1 style={{ alignSelf: "end" }}>{frontmatter.title}</h1>
        <Link style={{ alignSelf: "start" }} to="/">
          ← Back to home page
        </Link>
      </div>

      <div
        style={{
          paddingLeft: "5rem",
          display: "grid",
          height: "100vh",
          alignContent: "center",
          backgroundColor: "#E2F0CB",
        }}>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
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
