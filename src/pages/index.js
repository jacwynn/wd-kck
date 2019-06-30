import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroImage from '../components/heroImage';
import Programs from '../components/programs';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage />
    <Programs />
        

  </Layout>
)

export default IndexPage