import React from 'react';


export default function Footer() {
    return (
        <>
        <div className='nav-anchor'></div>
        <footer className='glow-text bg-gray justify-right text-xs'>
        <div>Copyright © Tom Gold 2022</div>
        <div className='flex justify-between'>
        <a href="https://github.com/TGold90" target="_blank" ><img src="GitHub-32px.png"/></a>
        <a href="https://www.linkedin.com/feed/" target="_blank" ><img className='h-8 px-5' src="LI-in-Bug.png"/></a>
        </div>
        </footer>
        </>
    )
}
