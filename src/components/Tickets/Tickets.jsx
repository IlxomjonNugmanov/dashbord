import React from 'react'
import avatar from "../../assets/img/5.png"
import "./tickets.css"

// const ticketListIteamChild = ({title , text}) => {
//   return(
//     <div className='ticketsChild'>
//       <h3 className='ticketsChild__h3'>{title}</h3>
//       <p className='ticketsChild__[p'>{text}</p>
//     </div>
//   )
// }

// const ticketListIteam = ({ ticketTitle ,  ticketText , nameTitle , nameDate , dateMoth , dateH ,  ticketsBtnName}) =>  {
//   return(
//     <li className='tickets__item'>
//       <img src={avatar} alt="avatar" />
//       <div className='ticketsChild'>
//         <h3 className='ticketsChild__h3'>{ticketTitle}</h3>
//         <p className='ticketsChild__[p'>{ticketText}</p>
//       </div>
//       <div className='ticketsChild'>
//         <h3 className='ticketsChild__h3'>{nameTitle}</h3>
//         <p className='ticketsChild__[p'>{nameDate}</p>
//       </div>
//       <div className='ticketsChild'>
//         <h3 className='ticketsChild__h3'>{dateMoth}</h3>
//         <p className='ticketsChild__[p'>{dateH}</p>
//       </div>

//       <button className='ticketsBtn'>{ticketsBtnName}</button>
//     </li>
//   )
// }

const data = [
  {
    id :1,
    ticketsBtnName:'High',
    ticketTitle:'Contact Email not Linked',
    ticketText:'Updated 1 day ago',
    nameTitle:'Tom Cruise',
    nameDate:'on 24.05.2019',
    dateH:'6:30 pm',
    dateMoth:'May 26, 2019'
  },
  {
    id :2,
    ticketsBtnName:'low',
    ticketTitle:'Adding Images to Featured Posts',
    ticketText:'Updated 1 day ago',
    nameTitle:'Matt Damon',
    nameDate:'on 24.05.2019',
    dateH:'8:00 AM',
    dateMoth:'May 26, 2019'
  },
  {
    id :3,
    ticketsBtnName:'High',
    ticketTitle:'Contact Email not Linked',
    ticketText:'Updated 1 day ago',
    nameTitle:'Tom Cruise',
    nameDate:'on 24.05.2019',
    dateH:'5:40 PM',
    dateMoth:'May 26, 2019'

  },
  {
    id :4,
    ticketsBtnName:'High',
    ticketTitle:'Contact Email not Linked',
    ticketText:'Updated 1 day ago',
    nameTitle:'Tom Cruise',
    nameDate:'on 24.05.2019',
    dateH:'6:30 pm',
    dateMoth:'May 26, 2019'
  },
  {
    id :5,
    ticketsBtnName:'low',
    ticketTitle:'Adding Images to Featured Posts',
    ticketText:'Updated 1 day ago',
    nameTitle:'Matt Damon',
    nameDate:'on 24.05.2019',
    dateH:'8:00 AM',
    dateMoth:'May 26, 2019'
  },
  {
    id :6,
    ticketsBtnName:'High',
    ticketTitle:'Contact Email not Linked',
    ticketText:'Updated 1 day ago',
    nameTitle:'Tom Cruise',
    nameDate:'on 24.05.2019',
    dateH:'5:40 PM',
    dateMoth:'May 26, 2019'
  }
]

const Tickets = () => {
  return (
    <div className='Tickets'>
      <div className="ticketsHeader">
        <h3 className='ticketsHeader__title'>
         All tickets
        </h3>
        <div className="ticketsHeader__iconWrap">
          <button>Sort</button>
          <button>Filter</button>
        </div>
      </div>
      <div className="ticketsMain">
          <table className='ticketsTable'>
          <tr>
            <td>Ticket details</td>
            <td>Customer name</td>
            <td>Date</td>
            <td>Priority</td>
          </tr>
          {data.map( (iteam) =>           
          <tr>
            <td className='td1'>
               <img src={avatar} alt="avatar" />
               <div className='ticketsChild'>
                  <h3 className='ticketsChild__h3'>{iteam.ticketTitle}</h3>
                  <p className='ticketsChild__p'>{iteam.ticketText}</p>
                </div>
            </td>
            <td>
              <h3 className='ticketsChild__h3'>{iteam.nameTitle}</h3>
              <p className='ticketsChild__p'>{iteam.nameDate}</p>
            </td>
            <td>
                <h3 className='ticketsChild__h3'>{iteam.dateMoth}</h3>
                <p className='ticketsChild__p'>{iteam.dateH}</p>
            </td>
            <td>
              <button>{iteam.ticketsBtnName}</button>
            </td>
          </tr>
      )}
        </table>
      </div>
    </div>
  )
}

export default Tickets