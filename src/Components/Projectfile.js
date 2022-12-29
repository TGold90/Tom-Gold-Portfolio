import React, { useState } from "react";
import Projects from "./projects.json";

export default function Projectfile() {
  const [isShown, setIsShown] = useState(null);

  const changeElement = (id) => {
    setIsShown((stateTarget) => (stateTarget === id ? null : id));
  };
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
          <div>
            {/* <img className='relative' src={JotItDown}></img> */}

            <div className='overlay'>HELLO</div>
          </div>
        </div>
      );
    })
  );
}
