import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import Catalog from '../components/schoolCatalog';


const SchoolCatalogPage = () => (
  <Layout>
    <SEO title="KCK Catalog" />
    <br />
    <Catalog />
  </Layout>
)

export default SchoolCatalogPage