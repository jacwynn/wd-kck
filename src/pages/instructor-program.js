import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProgramGeneralInfo from '../components/programGeneralInfo';
import ProgramCostTable from "../components/programCostTable";
import Textbooks from '../components/textbooks';

import instructorHero from '../images/instructor-hero.jpg';

const content = {
  title: "Instructor Program",
  paragraphs: ["The Instructor Program (INSP) is taught in English. The Instructor Program includes learning about common student problems & issues, good teaching techniques and practices and how to handle & prevent potential school problems. Completion of this course prepares graduates to become licensed Instructors in the State of Florida. It is not a requirement in the State of Florida to have completed an Instructor Program to become a licensed Instructor. The State of Florida requires Instructors to hold a current Florida license in related field.", "The 600 Hour Instructor Program is designed to instruct and train students on how to become effective Instructors. The student will become skilled in using their professional knowledge already obtained to teach students interested in the beauty & barber industry using teaching techniques learned from this program. The program prepares students with the foundation necessary to become Certified Barber, Cosmetology, Esthetician or Manicure Instructor. Upon completion of the course, student will receive a diploma and obtain entry-level employment in the beauty industry as an Instructor."],
  images: {
    heroImage: instructorHero
  }
}

const costsObj = {
  title: "Instructor",
  tuition: "$3,900.00",
  appFees: "$50.00",
  regFees: "$100.00",
  supplies: "$700.00",
  totalCost: "$4,750.00",
  totalHours: "600 hours"
}

const textBooks = [
    {
        bookName: "Milady’s Master’s Educator (Standard Hardcover)3rd Edition 2014; ISBN-13: 9781133693697 $161.95",
        bookLink: "https://www.google.com/search?q=Milady%E2%80%99s+Master+Educator+(Standard+Hardcover)3rd+Edition+2014;+ISBN-13:+9781133693697+$161.95&spell=1&cad=h"
    },
    {
        bookName: "Onetonline.org - SOC CODE: 25-2032",
        bookLink: "https://www.onetonline.org/link/summary/25-2032.00"
    }

]

const InstructorProgram = () => (
    <Layout>
      <SEO title="Instructor Program" />
      <br/>
      <ProgramGeneralInfo content={content} />
      <ProgramCostTable costs={costsObj} />
      <Textbooks books={textBooks} />
    </Layout>
  )
  
  export default InstructorProgram