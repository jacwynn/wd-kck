import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContactHeroImage from '../components/contactHeroImage';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <br />
    <ContactHeroImage />
  </Layout>
)

export default ContactPage