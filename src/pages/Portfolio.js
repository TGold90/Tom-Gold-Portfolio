import React from 'react';
import Project from '../Components/Project';

export default function Portfolio() {
    return (
        <section className='text-plutonium px-10 pb-10'>
        <h3 className='page-title glow-text'>Recent Projects</h3>
        <section className='grid grid-cols-3 gap-10 px-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
            <Project/>
        </section>
        </section>
    )
}