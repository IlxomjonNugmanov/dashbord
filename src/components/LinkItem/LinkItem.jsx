import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

const LinkItem = ({img , iteamText , linkTo}) => {
  return (
    <li className='iteam'>
      <Link to={linkTo} className='itemLink'>
        {img}
        <p className='itemText'>{iteamText}</p>
      </Link>
    </li>
  )
}

export default LinkItem