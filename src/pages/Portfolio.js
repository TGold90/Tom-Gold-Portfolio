import React from "react";
import Project from "../Components/Project";
import Projectfile from "../Components/Projectfile";

export default function Portfolio() {
  return (
    <section className='text-white mx-10 pb-10'>
      <h3 className='page-title text-white'>Recent Projects</h3>
      <section className='grid grid-cols-3 gap-10 gap-x-16 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
        <Project />
      </section>
    </section>
  );
}
