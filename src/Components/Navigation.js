import React from 'react';


// sets the Nav bar components - onClick--> runs handlepage change which changes state to current selection.
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs list-none text-white text-xs h-8">
      <li className=" nav-item inline h-8 sm:px-4">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-item inline h-8 text-sci-blue sm:px-4 gold-glow' : 'nav-item inline h-8 '}
        >
          About
        </a>
      </li>
      <li className="nav-item inline sm:px-4">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-item inline h-8 text-sci-blue sm:px-4 gold-glow' : 'nav-item inline h-8 '}
        >
          Contact
        </a>
      </li>
      <li className="nav-item inline sm:px-4">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-item inline h-8 text-sci-blue sm:px-4 gold-glow' : 'nav-item inline h-8 '}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item inline sm:px-4">
        <a
          href="#contact"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-item inline h-8 text-sci-blue sm:px-4 gold-glow' : 'nav-item inline h-8 '}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
