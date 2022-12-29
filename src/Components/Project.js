import React, { useState } from "react";
import Projects from "./projects.json";

export default function Project() {
  const [isShown, setIsShown] = useState(null);

  const changeElement = (id) => {
    setIsShown((stateTarget) => (stateTarget === id ? null : id));
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
          className='project-card bg-purple bg-opacity-80 text-white'
        >
          {isShown === project.id && (
            <div className='project-info flex flex-col flex-wrap break-normal text-center min-h-full bg-purple bg-opacity-10 items-center'>
              <div className='my-6'>
                <h3 className='text-lg' key={project.id}>
                  {project.name}
                </h3>
                <p className='text-sm flex-wrap gold-glow'>{project.about}</p>
                <ul className='text-xs p-3 list-disc text-left mx-10'>
                  <li>{project.description1}</li>
                  <li>{project.description2}</li>
                  <li>{project.description3}</li>
                </ul>
                {/* <p className='text-xs flex-wrap p-5'>{project.description}</p> */}

                <div className='buttonDiv flex flex-row flex-wrap break-normal justify-center'>
                  <a
                    className=''
                    href={project.appHref}
                    target='_blank'
                    rel='noreferrer'
                    title={project.linkTitle}
                  >
                    <button className='button-link h-2 w-3'>Visit Site</button>
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
            </div>
          )}
          <img
            className='h-72 min-w-full'
            src={project.src}
            alt={project.alt}
          />
        </div>
      );
    })
  );
}
