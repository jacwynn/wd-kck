import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroImage from '../components/heroImage';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage />
    
        

  </Layout>
)

export default IndexPage