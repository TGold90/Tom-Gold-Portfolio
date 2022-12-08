import React, { useState } from "react";
import Projects from "./projects.json";
// import images from './images'

export default function Project() {
  const [isShown, setIsShown] = useState(null);

  const changeElement = (id) => {
    setIsShown((prevSingleTarget) => (prevSingleTarget === id ? null : id));
  };
  // console.log(Project.id);
  return (
    Projects &&
    Projects.map((project) => {
      return (
        <div
          onMouseEnter={() => changeElement(project.id)}
          onMouseLeave={() => changeElement(project.id)}
          key={project.id}
          className='project-card bg-purple bg-opacity-40 text-white'
        >
          {isShown === project.id ? (
            <div className='project-info flex flex-col flex-wrap break-normal text-center'>
              <h3 key={project.id}>{project.name}</h3>
              <p className='text-sm flex-wrap'>{project.about}</p>
              <p className='text-sm flex-wrap p-5'>{project.description}</p>

              <div className='buttonDiv flex flex-row flex-wrap break-normal justify-center'>
                <a
                  className=''
                  href={project.appHref}
                  target='_blank'
                  rel='noreferrer'
                  title={project.linkTitle}
                >
                  <button className='button-link h-2 w-3'>App Link</button>
                </a>
                <a
                  className=''
                  href={project.repoHref}
                  target='_blank'
                  rel='noreferrer'
                  title='Link to GitHub repository'
                >
                  <button className='button-link'>GitHub</button>
                </a>
              </div>
            </div>
          ) : (
            <div className='project-img object-cover'>
              <img src={project.src} alt={project.alt} />
            </div>
          )}
        </div>
      );
    })
  );
}
