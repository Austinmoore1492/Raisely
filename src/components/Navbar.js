import React, { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  useEffect(() => {
    window.onscroll = () => {
      const nav = document.querySelector('#navbar');
      window.scrollY <= 300
        ? nav.setAttribute(
            'style',
            'opacity: 0;  transition: all 0.5s ease; pointer-events: none;'
          )
        : nav.setAttribute(
            'style',
            'background-color: #333; color: #f0f0f0; opacity: 1; transition: all 0.5s ease; pointer-events: all;'
          );
    };
  });

  return (
    <nav id="navbar" className="navbar bg-dark">
      <AnchorLink href="#home">
        <h2 className="home">Austin Moore</h2>
      </AnchorLink>
    </nav>
  );
};

export default Navbar;
