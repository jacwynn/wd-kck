import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import Services from '../components/services';


const ServicesPage = () => (
  <Layout>
    <SEO title="KCK Services" />
    <br />
    <Services />
  </Layout>
)

export default ServicesPage