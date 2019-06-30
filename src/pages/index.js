import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroImage from '../components/heroImage';
import Programs from '../components/programs';
import ContentBlock from '../components/contentBlock';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage />
    <Programs />
    <ContentBlock />
  </Layout>
)

export default IndexPage