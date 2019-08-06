import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

import FinancialAid from '../components/financialAid'
import NetPriceCalculator from '../components/netPriceCalculator'


const FinancialAidPage = () => (
  <Layout>
    <SEO title="KCK Financial Aid" />
    <br/>
    <FinancialAid />
    <NetPriceCalculator />
    <br />
  </Layout>
)

export default FinancialAidPage