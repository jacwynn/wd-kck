import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import GeneralInfo from '../components/generalInfo';
import Orientation from '../components/orientation';
import FinancialAssistance from '../components/financialAssistance';

const AdmissionPage = () => (
  <Layout>
    <SEO title="Admission" />
    <br />
    <GeneralInfo title="Admission" paragraphs={["test", "test"]} />
    <Orientation />
    <FinancialAssistance />
  </Layout>
)

export default AdmissionPage