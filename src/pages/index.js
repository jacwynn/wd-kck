import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout";
import Footer from '../components/footer';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    
        
    <Footer/>
  </Layout>
)

export default IndexPage