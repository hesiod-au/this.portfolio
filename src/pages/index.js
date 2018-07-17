import React from 'react'
import PortfolioLeft from '../components/portfolioleft'
import PortfolioRight from '../components/portfolioright'
import portfolios from "../data/portfolio"

const IndexPage = () => (
  <div className="app">

    <div className="leftcol">
      <PortfolioLeft portfolios={portfolios} />


    </div>
    <div className="rightcol">
      <PortfolioRight />
    </div>
  </div>
)

export default IndexPage
