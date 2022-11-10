import React from 'react';

// need to figure out the height for all of the pages 

export default function About() {
    return (
    <section className='text-plutonium px-10 content'>
        {/* <h3 className='page-title glow-text'>About Me</h3> */}
        <div className='bg-gray bg-opacity-20 about-p px-20'>
        <p className='py-3'>- My name is Tom Gold.</p>
        <p className='py-3'>- I am a web developer and graduate of the University of Utah Fullstack Coding Bootcamp.</p>
        <p className='py-3'>- I come from a product development background in the furniture industry. I understand how to make great products: from concept to production to marketing.</p>
        </div>
        <div className='bg-gray bg-opacity-20 about-p px-20 py-5 my-10'>
            <h4>Technologies/Tools</h4>
            <ul className='px-5 list-none flex flex-wrap flex-row'>
                <li className='p-5'>Javascript</li>
                <li className='p-5'>HTML</li>
                <li className='p-5'>CSS</li>
                <li className='p-5'>Javascript</li>
            </ul>
        </div>
        
    </section>
    )
}