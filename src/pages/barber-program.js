import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProgramCostTable from "../components/programCostTable";

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
      
      <ProgramCostTable costs={costsObj} />
    </Layout>
  )
  
  export default BarberProgram