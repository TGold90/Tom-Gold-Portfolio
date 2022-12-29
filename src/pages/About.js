import React from "react";
import Github from "../images/GitHub-64px.png";
import LinkedIn from "../images/linkedin.png";
import LandScapeMe from "../images/landscape-me.jpeg";

// need to figure out the height for all of the pages

export default function About() {
  return (
    <section className='text-white px-20 xl:text-xl lg:px-6 md:px-4 sm:px-0 content grid grid-cols-2 gap-5 gap-x-20 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
      <div className='col-span-2 xl:col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-1 text-5xl p-5 text-center'>
        Hello. My name is Tom{" "}
        <strong className='font-extrabold gold-glow'>Gold</strong>
      </div>
      <div className='rounded-lg m-5'>
        <img className='about-p' src={LandScapeMe}></img>
      </div>
      <div className='bg-purple bg-opacity-40 about-p p-10 align-middle m-5 flex justify-center items-center'>
        <ul className='py-3 text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-lg xl:ml-10 lg:ml-10 md:ml-8 sm:ml-4 list-roman justify-center align-middle ml-12'>
          {/* <li className='m-2'>Coding bootcamp graduate</li> */}
          <li className='m-5'>Fullstack Stack Developer</li>
          <li className='m-5'>
            React, Node, Express MongoDB, SQL, GraphQL, Vanilla JS, JQuery,
            Tailwind
          </li>
          <li className='m-5'>
            3 Years of Experience with product development and product life
            cycle management in a separate industry
          </li>
        </ul>
      </div>
      <div className=' flex flex-row col-span-2 xl:col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-1 text-6xl p-10 justify-center'>
        <a href='https://github.com/TGold90' target='_blank'>
          <img className='h-10 px-4' src={Github} />
        </a>
        <a
          href='https://www.linkedin.com/in/tom-gold-72256a177/'
          target='_blank'
        >
          <img className='h-10 px-4' src={LinkedIn} />
        </a>
      </div>
    </section>
  );
}
