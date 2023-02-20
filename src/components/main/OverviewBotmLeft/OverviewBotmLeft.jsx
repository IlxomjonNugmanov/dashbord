import React from 'react'
import "./overviewBotmLeft.css"

const OverviewBotmLeftCard = ({title , number})=>{
    return(
        <li className='OverviewBotmLeftCard__item'>
            <h3>{title}</h3>
            <p>{number}</p>
        </li>
    )
}

const OverviewBotmLeft = () => {
  return (
    <div className='OverviewBotmLeft'>
        <div className="OverviewBotmLeft__header">
            <div className='OverviewBotmLeft__headerLeft'>
               <h3>Unresolved tickets</h3>
               <p>Group: <strong>Support</strong> </p>
            </div>
               <p>View details</p>
        </div>
        <div className="OverviewBotmLeft__main">
           <ul className='OverviewBotmLeft__mainList'>
              <OverviewBotmLeftCard title={'Waiting on Feature Request'} number={'4238'}/>
              <OverviewBotmLeftCard title={'Awaiting Customer Response'} number={'1005'}/>
              <OverviewBotmLeftCard title={'Awaiting Developer Fix'} number={'914'}/>
              <OverviewBotmLeftCard title={'Pending'} number={'201'}/>
           </ul>
        </div>

    </div>
  )
}

export default OverviewBotmLeft