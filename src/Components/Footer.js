import React from "react";

export default function Footer() {
  return (
    <>
      <div className='nav-anchor'></div>
      <footer className='gold-glow bg-gradient-to-t from-purple to-black justify-right text-xs'>
        <div>Copyright © Tom Gold 2022</div>
        <div className='flex justify-between'>
          <a href='https://github.com/TGold90' target='_blank'>
            <img className='h-5 px-3' src='GitHub-32px.png' />
          </a>
          <a
            href='https://www.linkedin.com/in/tom-gold-72256a177/'
            target='_blank'
          >
            <img className='h-5' src='LI-in-Bug.png' />
          </a>
        </div>
      </footer>
    </>
  );
}
