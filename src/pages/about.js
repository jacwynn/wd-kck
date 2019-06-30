import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContentBlock from '../components/contentBlock';
import Staff from '../components/staff';

import vaIMG from '../images/vabenefits-stamp.png';


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
        "KCK Beauty & Barber Academy is accredited by the National Accrediting Commission of Career Arts and Sciences (NACCAS), 3015 Colvin Street, Alexandria, VA 22314 -www.naccas.org"
    ]
}

const contentVABenefits = {
    title: "VA Benefits",
    paragraphs: [
        "KCK Beauty and Barber Academy is approved by the State of Florida as a training Institution to qualify graduates for State Licensing as Barbers, Cosmetologist, Manicurist or Skin Care Specialist. We are licensed by the Commission for Independent Education and Florida Department of Education.",
        "KCK Beauty & Barber Academy is accredited by the National Accrediting Commission of Career Arts and Sciences (NACCAS), 3015 Colvin Street, Alexandria, VA 22314 -www.naccas.org"
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