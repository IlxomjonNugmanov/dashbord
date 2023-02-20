import React from 'react'
import "./overviewBotmRight.css"

const OverviewBotmRightCard = ({title , btnText}) => {
    return(
     <li className='OverviewBotmRightCard__item'>
        <input type="radio" name="radio" />
        <h3>{title}</h3>
        <button>{btnText}</button>
     </li>
    )
}

const OverviewBotmRight = () => {
  return (
    <div className='OverviewBotmRight'>
        <div className="OverviewBotmLeft__headerWrap">
            <div className='OverviewBotmLeft__header'>
                <div>
                   <h3 className='OverviewBotmLeft__header__title'>Tasks</h3>
                   <p className='OverviewBotmLeft__header__text'>Today</p>
                </div>
                <p className=''>View all</p>
            </div>
        </div>
        <div className="OverviewBotmLeft__newTaask">
            <input type="text" name="text" placeholder='Create new task'/>
            <button className='OverviewBotmLeft__newTaaskBtn'>+</button>
        </div>
        <div className="OverviewBotmLeft__main">
           <ul className='OverviewBotmLeft__mainList'>
              <OverviewBotmRightCard title={'Finish ticket update'} btnText={'Urgent'}/>
              <OverviewBotmRightCard title={'Create new ticket example'} btnText={'New'}/>
              <OverviewBotmRightCard title={'Update ticket report'} btnText={'Default'}/>
           </ul>
        </div>
    </div>
  )
}

export default OverviewBotmRight