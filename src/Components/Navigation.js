import React from "react";

// sets the Nav bar components - onClick--> runs handlepage change which changes state to current selection.
function Navigation({ currentPage, handlePageChange }) {
  return (
    <header className='flex flex-wrap justify-between items-center w-screen bg-gradient-to-b from-purple to-black font-sans fixed md: justify-center sm:justify-center'>
      <a href='#about' onClick={() => handlePageChange("About")}>
        <h1 className='px-20 sm-pt-10 text-3xl gold-glow'>tg</h1>
      </a>
      <ul className='nav nav-tabs list-none text-white text-sm h-8 '>
        <li className=' nav-item inline h-8 sm:px-4'>
          <a
            href='#about'
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About"
                ? "nav-item inline h-8 text-sci-blue sm:px-4 gold-glow"
                : "nav-item inline h-8 "
            }
          >
            About
          </a>
        </li>
        {/* <li className="nav-item inline sm:px-4">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-item inline h-8 text-sci-blue sm:px-4 gold-glow' : 'nav-item inline h-8 '}
        >
          Contact
        </a>
      </li> */}
        <li className='nav-item inline sm:px-4'>
          <a
            href='#portfolio'
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio"
                ? "nav-item inline h-8 text-sci-blue sm:px-4 gold-glow"
                : "nav-item inline h-8 "
            }
          >
            Portfolio
          </a>
        </li>
        <li className='nav-item inline sm:px-4'>
          <a
            href='#contact'
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume"
                ? "nav-item inline h-8 text-sci-blue sm:px-4 gold-glow"
                : "nav-item inline h-8 "
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
