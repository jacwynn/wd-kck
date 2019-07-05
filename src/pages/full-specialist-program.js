import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProgramGeneralInfo from '../components/programGeneralInfo';
import ProgramCostTable from "../components/programCostTable";
import Textbooks from '../components/textbooks';

import fullSpecialistHero from '../images/full-specialist-hero.jpg';

const content = {
  title: "Full Specialist Program",
  paragraphs: ["The Full Specialist Program (FUSP) is taught in English. The Full Specialist Program includes study in manicuring, makeup & facials, hand & arm massage or bleach & shampooing. Completion of this course prepares graduates to become a licensed full specialist.", "The 600 Hour Full Specialist Program is designed to instruct and train students in sterilization and sanitation, the theory and practical skills of manicure and skin care. The program prepares students with the foundation necessary to become Certified Full Specialist. Upon completion of the Full Specialist program, the student will receive a diploma, will apply to State of Florida for licensing and obtain entry-level employment in the nail and skin care industry."],
  images: {
    heroImage: fullSpecialistHero
  }
}

const costsObj = {
  title: "Full Specialist",
  tuition: "$5,750.00",
  appFees: "$50.00",
  regFees: "$100.00",
  supplies: "$880.00",
  stateFees: "$180.00",
  hivFees: "$20.00",
  totalCost: "$6,980.00",
  totalHours: "600 hours"
}

const textBooks = [
    {
        bookName: "Milady’s Standard Esthetics Fundamental (Standard Hardcover, Exam review & workbook)11th Edition 2013; ISBN-13: 9781285042336 $255.95",
        bookLink: "https://www.google.com/search?q=ISBN-13%3A+9781285042336&oq=ISBN-13%3A+9781285042336&aqs=chrome..69i64.2182j0j4&sourceid=chrome&es_sm=91&ie=UTF-8"
    },
    {
        bookName: "Milady’s Standard Nail Technology (Standard Softcover)7th Edition 2015; ISBN-13: 9781285080475 $117.95",
        bookLink: "https://www.google.com/search?q=ISBN-13%3A+9781285042336&oq=ISBN-13%3A+9781285042336&aqs=chrome..69i64.2182j0j4&sourceid=chrome&es_sm=91&ie=UTF-8#q=ISBN-13:+9781285080475"
    },
    {
        bookName: "Milady’s Standard Nail Technology Student Workbook ;ISBN-13: 9781285080512 $61.95",
        bookLink: "https://www.google.com/search?q=ISBN-13%3A+9781285042336&oq=ISBN-13%3A+9781285042336&aqs=chrome..69i64.2182j0j4&sourceid=chrome&es_sm=91&ie=UTF-8#q=ISBN-13:+9781285080512"
    },
    {
        bookName: "Onetonline.org - SOC CODE: 39-5092",
        bookLink: "hhttps://www.onetonline.org/link/summary/39-5092.00"
    },
    {
        bookName: "Onetonline.org - SOC CODE: 39-5094",
        bookLink: "hhttps://www.onetonline.org/link/summary/39-5094.00"
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