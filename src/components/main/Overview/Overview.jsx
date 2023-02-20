import React from 'react'
import OverviewCardTop from  "../OverviewCardTop/OverviewCardTop"
import OverviewCenter from '../OverviewCenter/OverviewCenter'
import OverviewBotm from '../OverviewBotm/OverviewBotm'

import "./overview.css"

const Overview = () => {
  return (
    <div className='overview'>
      <div className="Overview__top">
        <OverviewCardTop text={'Unresolved'} number={'60'}/>
        <OverviewCardTop text={'Overdue'} number={'16'}/>
        <OverviewCardTop text={'Open'} number={'43'}/>
        <OverviewCardTop text={'On hold'} number={'64'}/>
      </div>
      <div className='overviewCenter'>
      <OverviewCenter/>
      </div>
      <OverviewBotm/>
    </div>
  )
}

export default Overview