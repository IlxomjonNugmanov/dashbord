import React from 'react'
import OverviewCardTop from '../OverviewCardTop/OverviewCardTop'
import "./overviewCenter.css"
const OverviewCenter = () => {
  return (
    <div className='OverviewCenter'>
      <div className='OverviewCenter__left' >
          <div className='OverviewCenterDate'> 
            <h2>Today’s trends</h2>
            <p>as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className='OverviewCenterDateWeek'>
            <span className='overviewLine'></span>
            <p>Today</p>
            <span className='overviewLine'></span>
            <p>Yesterday</p>
          </div>
      </div>
      <div className='OverviewCenter__rightWrap'>
        <ul className='OverviewCenter__right'>
          <OverviewCardTop text={'Resolved'} number={'449'}/>
          <OverviewCardTop text={'Received'} number={'426'}/>
          <OverviewCardTop text={'Average first response time'} number={'33m'}/>
          <OverviewCardTop text={'Average response time'} number={'3h 8m'}/>
          <OverviewCardTop text={'Resolution within SLA'} number={'94%'}/>
        </ul>
      </div>
    </div>
  )
}

export default OverviewCenter