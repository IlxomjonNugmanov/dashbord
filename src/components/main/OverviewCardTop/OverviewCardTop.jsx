import React from 'react'
import "./OverviewCardTop.css"

const OverviewCardTop = ({text , number}) => {
  return (
   <li className='OverviewCardTop__iteam'>
     <p className='OverviewCardTop__text'>{text}</p>
     <p className='OverviewCardTop__number'>{number}</p>
   </li>
  )
}
 
export default OverviewCardTop