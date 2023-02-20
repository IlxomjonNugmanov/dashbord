import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import LinkItem from '../LinkItem/LinkItem.jsx'
import {Icon1 , Icon2 , Icon3 , Icon4, Icon5, Icon6 ,Icon7, Icon8 } from "../../assets/icon/icon"
import "./navbar.css"

import Overview from '../main/Overview/Overview'
import Tickets from "../Tickets/Tickets"
import Ideas from "../Ideas/Ideas"

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='logoWrap'>
            <li className='flex'>
                <Link to="/" className='logo'>
                    <img className='logoImg' src={logo} alt="logo" />
                    <p className='logoText'>Dashboard Kit</p>
                </Link>
            </li>
        </ul>
        <ul className='navBarList'>
            <LinkItem  linkTo={"/"} img={ <Icon1/>} iteamText={"Overview"} />
            <LinkItem  linkTo={"/tickets"} img={<Icon2/>} iteamText={"Tickets"} />
            <LinkItem  linkTo={"/ideas"} img={<Icon3/>} iteamText={"Ideas"} />
            <LinkItem  linkTo={"/contacts"} img={<Icon4/>} iteamText={"Contacts"} />
            <LinkItem  linkTo={"/agents"} img={<Icon5/>} iteamText={"Agents"} />
            <LinkItem  linkTo={"/articles"} img={<Icon6/>} iteamText={"Articles"} />
            <LinkItem  linkTo={"/settings"} img={<Icon7/>} iteamText={"Settings"} />
            <LinkItem  linkTo={"/subscription"} img={<Icon8/>} iteamText={"Subscription"} />
        </ul>
         
    </div>
  )
}

export default Navbar