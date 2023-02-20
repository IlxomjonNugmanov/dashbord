import React from 'react';
import { IconSearch , IconNew} from  "../../assets/icon/icon"
import avatar from '../../assets/img/headerAvatar.png'
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
      <div className="HeaderLogoWrap">
        <h2 className='HeaderLogoWrap__title'>
          Overview
        </h2>
      </div>
      <div className="HeaderLogoWrap__right">
        <IconSearch/>
        <IconNew/>
        <span className='headerLine'></span>
        <div className="headerAvatarWrap">
          <p className='headerAvatarWrap__title'>Jones Ferdinand</p>
          <img className='headerAvatar' src={avatar} alt="imgAvatar" />
        </div>
      </div>
    </header>
  )
}

export default Header