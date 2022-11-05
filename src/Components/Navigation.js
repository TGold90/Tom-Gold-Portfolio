import React from 'react';


// sets the Nav bar components - onClick--> runs handlepage change which changes state to current selection.
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs list-none px-10 text-plutonium">
      <li className=" nav-item px-10 inline hover:bg-plutonium hover:text-sci-blue sm:px-4">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-item-active' : 'bg-sci-blue'}
        >
          About
        </a>
      </li>
      <li className="nav-item px-10 inline hover:bg-plutonium hover:text-sci-blue sm:px-4">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item px-10 inline hover:bg-plutonium hover:text-sci-blue sm:px-4">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item px-10 inline hover:bg-plutonium hover:text-sci-blue sm:px-4">
        <a
          href="#contact"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
