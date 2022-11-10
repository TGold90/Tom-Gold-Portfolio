import React from 'react';

// need to figure out the height for all of the pages 

export default function About() {
    return (
    <section className='text-white px-10 content grid grid-cols-2 gap-10'>
        <div className='.about-big col-span-2 text-6xl p-10 text-center'>Hello. My name is Tom <strong className='font-extrabold gold-glow'>Gold</strong></div>
        <div className='me-img rounded-lg'><img className='about-p' src='landscape-me.jpeg'></img></div>
        <div className='bg-gray bg-opacity-30 about-p px-20'>
        <ul className='py-3 text-2xl list-roman'>
            <li className='m-2'>Coding bootcamp graduate</li>
            <li className='m-2'>Fullstack stack Developer</li>
            <li className='m-2'>MERN, SQL, GraphQL, Tailwind/Bulma/Halfmoon</li>
            <li className='m-2'>Product Development Background</li>
            <li className='m-2'>Emphasis on user focused Development</li>
        </ul>

        
        </div>
        
    </section>
    )
}