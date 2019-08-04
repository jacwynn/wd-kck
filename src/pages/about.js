import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContentBlock from '../components/contentBlock';
import Staff from '../components/staff';

import vaIMG from '../images/vabenefits-stamp.png';

const hyperlinks = {
    naccas: "<a href='http://www.naccas.org' target='_blank'>www.naccas.org</a>"
}

const contentAbout = {
    title: "About KCK Beauty & Barber Academy",
    paragraphs: [
        "KCK Beauty and Barber Academy, INC. prepares students with the skills needed to pursue careers in the Beauty and Barber Industry.",
        "If you are looking to jumpstart your career, please consider enrolling at KCK Beauty and Barber Academy. Request information packet to get started or call us today at (904)516-9280."
    ]
}

const contentApproval = {
    title: "Approvals",
    paragraphs: [
        "KCK Beauty and Barber Academy is approved by the State of Florida as a training Institution to qualify graduates for State Licensing as Barbers, Cosmetologist, Manicurist or Skin Care Specialist. We are licensed by the Commission for Independent Education and Florida Department of Education.",
        <div dangerouslySetInnerHTML={{__html: 'KCK Beauty & Barber Academy is accredited by the National Accrediting Commission of Career Arts and Sciences (NACCAS), 3015 Colvin Street, Alexandria, VA 22314 <a href="http://www.naccas.org" target="_blank">-www.naccas.org</a>'}} />
    ]
}

const contentVABenefits = {
    title: "VA Benefits",
    paragraphs: [
        <div dangerouslySetInnerHTML={{__html: 'KCK Beauty and Barber Academy, Inc is approved by US Department of Veteran Affairs for Veterans Training for Education assistance of Veterans, dependents of Veterans and Survivors of Veterans. Call today to speak to our financial director for more information regarding Veteran Benefits. Helpful link to refer to <a href="https://www.va.gov/" target="_blank">www.va.gov</a>'}} />
    ]
}

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <br/>
    <ContentBlock title={contentAbout.title} paragraphs={contentAbout.paragraphs} />
    <Staff />
    <ContentBlock title={contentApproval.title} paragraphs={contentApproval.paragraphs} />
    <ContentBlock title={contentVABenefits.title} paragraphs={contentVABenefits.paragraphs} image={vaIMG}/>
  </Layout>
)

export default AboutPage