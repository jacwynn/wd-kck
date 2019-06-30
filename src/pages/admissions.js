import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import GeneralInfo from '../components/generalInfo';

const AdmissionPage = () => (
  <Layout>
    <SEO title="Admission" />
    <br />
    <GeneralInfo title="Admission" paragraphs={["test", "test"]} />
  </Layout>
)

export default AdmissionPage