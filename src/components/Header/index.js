import React from 'react';

import './styles.css';

import netflixLogo from '../../assets/netflix_logo.png';
import netflixAvatar from '../../assets/netflix_avatar.png';

const Header = ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="#">
          <img src={netflixLogo} alt="netflix-logo-icon" />
        </a>
      </div>
      <div className="header--user">
        <a href="#">
          <img src={netflixAvatar} alt="netflix-user-icon"/>
        </a>
      </div>
    </header>
  );
};

export default Header;