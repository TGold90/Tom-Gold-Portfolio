import React from "react";
import Github from "../images/GitHub-64px.png";
import LinkedIn from "../images/linkedin.png";

export default function Footer() {
  return (
    <>
      <div className='nav-anchor'></div>
      <footer className='gold-glow bg-gradient-to-t from-purple to-black justify-right text-xs'>
        <div>Copyright © Tom Gold 2023</div>
        <div className='flex justify-between'>
          <span className='mx-3 text-sm'>Contact: </span>
          <span className='mx-3 text-sm'>thomaswgold90@gmail.com</span>
          <a href='https://github.com/TGold90' target='_blank'>
            <img className='h-5 px-3' src={Github} />
          </a>
          <a
            href='https://www.linkedin.com/in/tom-gold-72256a177/'
            target='_blank'
          >
            <img className='h-5' src={LinkedIn} />
          </a>
        </div>
      </footer>
    </>
  );
}
