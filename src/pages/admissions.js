import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import GeneralInfo from '../components/generalInfo';
import Orientation from '../components/orientation';

const AdmissionPage = () => (
  <Layout>
    <SEO title="Admission" />
    <br />
    <GeneralInfo title="Admission" paragraphs={["test", "test"]} />
    <Orientation />
  </Layout>
)

export default AdmissionPage