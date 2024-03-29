import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogleMenu = () => {
    setOpen(!open);
  };
  
  return (
    <nav className="navbar">
      <a href="#home">
        <img alt="" src="/images/dcflip-logo.png" className="logo" />
      </a>
      <span className="menu" onClick={toogleMenu}>
        <img alt="" src="/icons/menu.png" />
      </span>
      <div className={`links ${open ? "open" : null}`}>
        <span className="close" onClick={toogleMenu}>
          <img alt="" src="/icons/close.png" />
        </span>
        <a href="#story">
          <div className="link" onClick={toogleMenu}>
            <p>Buy Token</p>
          </div>
        </a>
        <a href="#roadmap">
          <div className="link" onClick={toogleMenu}>
            <p>Whitepaper</p>
          </div>
        </a>
        <a
          href="https://dcflip.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="link" onClick={toogleMenu}>
            <p>Coinflip</p>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
