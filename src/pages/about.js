import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContentBlock from '../components/contentBlock';
import Staff from '../components/staff';


const content = {
    title: "About KCK Beauty & Barber Academy",
    paragraphs: [
        "KCK Beauty and Barber Academy, INC. prepares students with the skills needed to pursue careers in the Beauty and Barber Industry.",
        "If you are looking to jumpstart your career, please consider enrolling at KCK Beauty and Barber Academy. Request information packet to get started or call us today at (904)516-9280."
    ]
}

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <br/>
    <ContentBlock title={content.title} paragraphs={content.paragraphs} />
    <Staff />
  </Layout>
)

export default AboutPage