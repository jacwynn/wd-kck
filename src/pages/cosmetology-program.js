import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProgramGeneralInfo from '../components/programGeneralInfo';
import ProgramCostTable from "../components/programCostTable";
import Textbooks from '../components/textbooks';

import cosmetologyHero from '../images/cosmetology-hero.jpg';

const content = {
  title: "Cosmetology Program",
  paragraphs: ["The Cosmetology Program (COSP) is taught in English. The Cosmetology course includes study in sterilization & Sanitation, hair cutting and styling, manicuring, makeup and facials, hair coloring, permanent waving, scalp and hair treatments. Students are required to complete 300 hours before being allowed to service clients on the clinical floor. Upon graduation students are required to demonstrate live model performances and complete the required HIV/AIDS education exam.", "The 1200 hour Cosmetology course prepares all graduates for the Florida State Board of Cosmetology Examination to become licensed cosmetologist. The students are trained in the basic manipulative skills, safety judgments, good work habit, business skills, professional ethics and to take and pass the state licensing examination. Upon completion of the Cosmetology Program, the student will receive a Diploma and be prepared to obtain entry-level employment in the cosmetology industry."],
  images: {
    heroImage: cosmetologyHero
  }
}

const costsObj = {
  title: "Cosmetology",
  tuition: "$11,500.00",
  appFees: "$50.00",
  regFees: "$100.00",
  supplies: "$950.00",
  stateFees: "$255.00",
  hivFees: "$20.00",
  totalCost: "$12,875.00",
  totalHours: "1200 Hours"
}

const textBooks = [
    {
        bookName: "Milady’s Standard Cosmetology Bundle(Standard Hardcover, Exam Review, Theory Workbook, & Practical Workbook) 2012",
        bookLink: "https://www.google.com/search?q=Milady%E2%80%99s+Standard+Cosmetology+Bundle(Standard+Hardcover%2C+Exam+Review%2C+Theory+Workbook%2C+%26+Practical+Workbook)+2012&cad=h"
    },
    {
        bookName: "ISBN-13: 9781133023975 $248.95",
        bookLink: "https://www.google.com/search?q=ISBN-13%3A+9781133023975&oq=ISBN-13%3A+9781133023975&aqs=chrome..69i57j69i58.814j0j9&sourceid=chrome&es_sm=91&ie=UTF-8"
    },
    {
        bookName: "Onetonline.org - SOC CODE: 39-5012",
        bookLink: "https://www.onetonline.org/link/summary/39-5012.00"
    }

]

const CosmetologyProgram = () => (
    <Layout>
      <SEO title="Cosmetology Program" />
      <br/>
      <ProgramGeneralInfo content={content} />
      <ProgramCostTable costs={costsObj} />
      <Textbooks books={textBooks} />
    </Layout>
  )
  
  export default CosmetologyProgram