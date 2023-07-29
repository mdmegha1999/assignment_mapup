import React from 'react';
import './Navbar.css'; 

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">MapUp App</h1>
      <div className="navbar-buttons">
        <button className="navbar-button">Login</button>
        <button className="navbar-button">Logout</button>
        <button className="navbar-button">Profile</button>
      </div>
    </div>
  );
};

export default Header;
