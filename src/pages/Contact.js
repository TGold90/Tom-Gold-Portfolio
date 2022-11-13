import React from "react";
import { useState } from "react";

export default function Contact() {
  // //included functionality to actually post a message, but it doesnt work since there is no database :)

  // const [submitted, setSubmitted] = useState(false);
  // const handleSubmit = () => {
  //   setTimeout(() => {
  //     setSubmitted(true);
  //   }, 100);
  // };
  return (
    <section className='text-white content m-20 flex flex-wrap justify-center flex-col'>
      <h3 className='page-title'>Contact me!</h3>
      <form
        className='text-center'
        action=''
        // onSubmit={handleSubmit}
        // method='POST'
        // target='_blank'
      >
        <div className='mb-3 pt-0'>
          <input
            type='text'
            placeholder='Your name'
            name='name'
            className='w-96 px-3 py-3 relative text-sci-blue rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
            required
          />
        </div>
        <div className='mb-3 pt-0'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='w-96 px-3 py-3 relative text-sci-blue bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
            required
          />
        </div>
        <div className='mb-3 pt-0'>
          <textarea
            placeholder='Your message'
            name='message'
            className='w-2/3 px-3 py-3 relative text-sci-blue rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
            required
          />
        </div>
        <div className='mb-3 pt-0'>
          <button
            className='button-link shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='submit'
          >
            Send a message
          </button>
        </div>
      </form>
    </section>
  );
}
