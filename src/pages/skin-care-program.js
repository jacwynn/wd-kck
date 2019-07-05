import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProgramGeneralInfo from '../components/programGeneralInfo';
import ProgramCostTable from "../components/programCostTable";
import Textbooks from '../components/textbooks';

import skinCareHero from '../images/skin-care-hero.jpg';

const content = {
  title: "Skin Care Program",
  paragraphs: ["The Skin Care Specialist Program (SKSP) is taught in English. The Skin Care Specialist course will train students in skin care, facial treatments, make-up application, and hair removal. Completion of this course prepares students to become a licensed skin care specialist.", "The 260 hour Skin Care Specialist course teaches theory and practical skills in all phases of skin care. The Skin Care Specialist program prepares students with the basic foundation necessary in sterilization and Sanitation, manipulative skills, safety judgment, proper work habits, business skills, and professional ethnics. Upon completion of the Skin Care Specialist program, the student will receive a diploma and be prepared to obtain entry level employment as a Certified Skin Care Specialist."],
  images: {
    heroImage: skinCareHero
  }
}

const costsObj = {
  title: "Skin Care",
  tuition: "$2,800.00",
  appFees: "$50.00",
  regFees: "$100.00",
  supplies: "$480.00",
  stateFees: "$80.00",
  hivFees: "$20.00",
  totalCost: "$3,530.00",
  totalHours: "260 hours"
}

const textBooks = [
    {
        bookName: "Milady’s Standard Esthetics Fundamental (Standard Hardcover, Exam review & workbook)11th Edition 2013;",
        bookLink: "https://www.google.com/search?q=ISBN-13%3A+9781133023975&oq=ISBN-13%3A+9781133023975&aqs=chrome..69i57j69i58.814j0j9&sourceid=chrome&es_sm=91&ie=UTF-8#q=Milady%E2%80%99s+Standard+Esthetics+Fundamental+(Standard+Hardcover%2C+Exam+review+%26+workbook)11th+Edition+2013"
    },
    {
        bookName: "ISBN-13: 9781285042336 $255.95",
        bookLink: "https://www.google.com/search?q=ISBN-13%3A+9781133023975&oq=ISBN-13%3A+9781133023975&aqs=chrome..69i57j69i58.814j0j9&sourceid=chrome&es_sm=91&ie=UTF-8#q=ISBN-13:+9781285042336"
    },
    {
        bookName: "Onetonline.org - SOC CODE: 39-5094",
        bookLink: "https://www.onetonline.org/link/summary/39-5094.00"
    }

]

const SkinCareProgram = () => (
    <Layout>
      <SEO title="Skin Care Program" />
      <br/>
      <ProgramGeneralInfo content={content} />
      <ProgramCostTable costs={costsObj} />
      <Textbooks books={textBooks} />
    </Layout>
  )
  
  export default SkinCareProgram