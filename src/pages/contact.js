import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContactHeroImage from '../components/contactHeroImage';
import ContactMap from '../components/contactMap';
import SignupForm from '../components/signupForm';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <br />
    <ContactHeroImage />
    <ContactMap />
    <SignupForm />
  </Layout>
)

export default ContactPage