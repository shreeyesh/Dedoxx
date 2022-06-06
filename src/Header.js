import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';

function Header(props) {
    return (
        // BEM
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img 
     className="header__logo"
     src="https://download.logo.wine/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.png" alt="Logo" />
     
           <IconButton>
           <ChatIcon className="header__icon" fontSize="large" />
           </IconButton>
        </div>
    );
}

export default Header;