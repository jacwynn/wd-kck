import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import vaIMG from '../images/vabenefits-stamp.png';
import vaBanner from '../images/banners/vabenefits-flags.jpg';

import ContentBlock from '../components/contentBlock';

const contentVABenefits = {
    title: "Veteran Benefits",
    paragraphs: [
        "KCK Beauty and Barber Academy, Inc is approved by US Department of Veteran Affairs for Veterans Training for Education assistance of Veterans, dependents of Veterans and Survivors of Veterans. Call today to speak to our financial director for more information regarding Veteran Benefits. Helpful link to refer to www.va.gov"
    ]
}


const VABenefits = () => (
  <Layout>
    <SEO title="KCK Veteran Benefits" />
    <br />
    <ContentBlock title={contentVABenefits.title} paragraphs={contentVABenefits.paragraphs} image={vaIMG} banner={vaBanner} />
  </Layout>
)

export default VABenefits