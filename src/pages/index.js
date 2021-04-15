import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Img from "gatsby-image";

export default function Home({ data }) {
  const Image = data.file.childImageSharp.fluid;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Home </h1>
          <div>Hello world!</div>
          <Link to="/projects" className={styles.btn}>
            My Projects
          </Link>
        </div>
        <Img fluid={Image} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BannerImage {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
