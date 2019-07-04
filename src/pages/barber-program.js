import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProgramGeneralInfo from '../components/programGeneralInfo';
import ProgramCostTable from "../components/programCostTable";

import barberImage1 from '../images/barber-1.jpeg';
import barberImage2 from '../images/barber-2.jpeg';
import barberImage3 from '../images/barber-3.jpeg';
import barberImage4 from '../images/barber-4.jpeg';
import barberHero from '../images/barber-hero.jpg';

const content = {
  title: "Barber Program",
  paragraphs: ["The Barbering Program (BARP) is taught in English. The Barber program course includes study in sterilization and sanitation, hair cutting, shaving & Mustache trim, facial, shampooing, styling, hair coloring, permanent waving, scalp and hair treatments, hair straightening, wigs and hairpieces, and regular toupee hair cutting. Students are required to complete 300 hours before being allowed to service clients on the clinical floor. Upon graduation students are required to demonstrate live model performances and complete the required HIV/AIDS education exam.", "The 1200 hour Barber/Styling course prepares all graduates for the Florida State Board of Barbering Examination to become licensed barbers. The students are trained in the basic manipulative skills, safety judgments, good work habit, business skills, professional ethics and to take and pass the state licensing examination. Upon completion of the Barbering Program, the student will receive a diploma and be prepared to obtain entry-level employment in the barbering industry."],
  images: {
    heroImage: barberHero,
    contentImages: [barberImage1, barberImage2, barberImage3, barberImage4]
  }
}

const costsObj = {
  tuition: "$11,500.00",
  appFees: "$50.00",
  regFees: "$100.00",
  supplies: "$950.00",
  stateFees: "$255.00",
  hivFees: "$20.00",
  totalCost: "$12,875.00",
  totalHours: "1200 Hours"
}

const BarberProgram = () => (
    <Layout>
      <SEO title="Barber Program" />
      <br/>
      <ProgramGeneralInfo content={content} />
      <ProgramCostTable costs={costsObj} />
    </Layout>
  )
  
  export default BarberProgram