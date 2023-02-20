import React from 'react'
import "./overviewBotm.css"
import OverviewBotmLeft from '../OverviewBotmLeft/OverviewBotmLeft'
import OverviewBotmRight from '../OverviewBotmRight/OverviewBotmRight'

const OverviewBotm = () => {
  return (
    <div className='OverviewBotm'>
      <OverviewBotmLeft/>
      <OverviewBotmRight/>
    </div>
  )
}

export default OverviewBotm