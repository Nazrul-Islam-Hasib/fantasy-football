import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header text-center">
        <img src={logo} alt="logo"/>
            <h2>Create your Fantasy Team</h2>
        </div>
    );
};

export default Header;