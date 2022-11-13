import React from "react";

// need to figure out the height for all of the pages

export default function About() {
  return (
    <section className='text-white px-10 xl:text-xl lg:px-6 md:px-4 sm:px-0 content grid grid-cols-2 gap-10 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
      <div className='.about-big col-span-2 xl:col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-1 text-6xl p-10 text-center'>
        Hello. My name is Tom{" "}
        <strong className='font-extrabold gold-glow'>Gold</strong>
      </div>
      <div className='me-img rounded-lg m-10'>
        <img className='about-p' src='landscape-me.jpeg'></img>
      </div>
      <div className='bg-purple bg-opacity-40 about-p px-20 align-middle m-10 flex justify-center items-center'>
        <ul className='py-3 text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-lg xl:ml-10 lg:ml-10 md:ml-8 sm:ml-4 list-roman justify-center align-middle ml-12'>
          <li className='m-2'>Coding bootcamp graduate</li>
          <li className='m-2'>Fullstack Stack Developer</li>
          <li className='m-2'>
            React, Node, Express MongoDB, SQL, GraphQL, Vanilla JS, JQuery,
            Tailwind
          </li>
          <li className='m-2'>
            3 Years Experience Professional Product Development
          </li>
          <li className='m-2'>Solution Oriented</li>
        </ul>
      </div>
    </section>
  );
}
