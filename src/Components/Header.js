import React from 'react';
import Navigation from './Navigation';

export default function Header (props) {
    return (
        <>
        <header className='flex flex-wrap justify-between items-center w-screen bg-gray font-sans fixed md: justify-center sm:justify-center'>
            <h1 className='px-20 sm-pt-10 text-3xl glow-text'>...tg</h1>
            {/* <img src="tg-logo2.png" className='h-40 px-10'/> */}
            <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
        </header>
        <div className='nav-anchor'></div>
        </>
    )
}