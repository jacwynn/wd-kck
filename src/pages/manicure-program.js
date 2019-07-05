import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProgramGeneralInfo from '../components/programGeneralInfo';
import ProgramCostTable from "../components/programCostTable";
import Textbooks from '../components/textbooks';

import manicureImage1 from '../images/manicure-1.jpeg';
import manicureImage2 from '../images/manicure-2.jpeg';
import manicureImage3 from '../images/manicure-3.jpeg';
import manicureImage4 from '../images/manicure-4.jpeg';
import manicureHero from '../images/manicure-hero.jpg';

const content = {
  title: "Manicure Program",
  paragraphs: ["The Manicuring Program (MANP) is taught in English. The Manicure program includes study in nail structure, manicuring techniques, as well as artificial nail application and nail tips. The program instructs the student in the state laws and provides the foundation and skills necessary to become a Certified Nail Technology Specialist.", "The 240 hour Manicure course teaches theory and practical skills in all phases of manicuring. The program prepares the student with the basic foundation necessary in sterilization and sanitation, manipulative skills, safety judgment, proper work habits, business skills, professional ethics, applying to state board for licensing, continue education requirements. Upon completion of the manicuring program, the student will receive a diploma and be prepared to obtain entry-level employment as a Nail Technology Specialist."],
  images: {
    heroImage: manicureHero,
    contentImages: [manicureImage1, manicureImage2, manicureImage3, manicureImage4]
  }
}

const costsObj = {
  title: "Manicure",
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
      bookName: "Milady’s Standard Nail Technology (Standard Softcover)7th Edition 2015; ISBN-13: 9781285080475 $117.95",
      bookLink: "https://www.google.com/search?q=ISBN-13%3A+9781133023975&oq=ISBN-13%3A+9781133023975&aqs=chrome..69i57j69i58.814j0j9&sourceid=chrome&es_sm=91&ie=UTF-8#q=Milady%E2%80%99s+Standard+Nail+Technology+(Standard+Soft+Cover)7th+Edition+2015;+ISBN-13:+9781285080475&spell=1"
  },
  {
      bookName: "Milady’s Standard Nail Technology Student Workbook ;ISBN-13: 9781285080512 $61.95",
      bookLink: "https://www.google.com/search?q=ISBN-13%3A+9781133023975&oq=ISBN-13%3A+9781133023975&aqs=chrome..69i57j69i58.814j0j9&sourceid=chrome&es_sm=91&ie=UTF-8#q=Milady%E2%80%99s+Standard+Nail+Technology+Student+Workbook+%3BISBN-13:+9781285080512"
  },
  {
      bookName: "Onetonline.org - SOC CODE: 39-5092",
      bookLink: "https://www.onetonline.org/link/summary/39-5092.00"
  }

]

const ManicureProgram = () => (
    <Layout>
      <SEO title="Manicure Program" />
      <br/>
      <ProgramGeneralInfo content={content} />
      <ProgramCostTable costs={costsObj} />
      <Textbooks books={textBooks} />
    </Layout>
  )
  
  export default ManicureProgram