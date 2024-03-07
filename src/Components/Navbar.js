import React, { useState } from 'react';

export default function Navbar() {  
return (
    <nav className="navbar" dir='rtl'>
      <div className="navbar-container">
      
        <div className={`navbar-links`}>
          <ul>
          <a className="navbar-logo" href='/'>
          <img src="logo.webp" width={'50px'} height={'50px'} alt='logo' ></img>
        </a>
            <li><a href="/">דף הבית</a></li>
            <li><a href="/treatments">טיפולים</a></li>
            <li><a href="/about">אודות</a></li>
            <li><a href="/contact">צרו קשר</a></li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

