import React from 'react';
import Navbar from './navbar';
import Topbar from './Topbar';
import useSticky from '../hooks/useSticky';

const Header = () => {
  // Use a smaller threshold (80) so the transition is immediate and less distracting
  const isSticky = useSticky(80); 

  return (
    <header className={`header-container ${isSticky ? 'is-sticky' : ''}`}>
      <Topbar />
      <Navbar isSticky={isSticky} />
    </header>
  );
};

export default Header;
