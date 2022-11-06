import React from 'react';
import Projects from './projects.json';
// import images from './images'

export default function Project() {
    return Projects && Projects.map( project => {
    return (
        <div className='project-card text-light-g-text'>
            <img src={project.src} alt={project.alt}/>
                <div class="project-info flex flex-col flex-wrap break-normal text-center">
                     <h3 key={project.id}>{project.name}</h3>
                     <p className='text-sm flex-wrap'>{project.about}</p>
                </div>
            <div className='buttonDiv flex flex-wrap break-normal justify-center pt-5'>
                <a class="" href={project.appHref}
            target="_blank" rel="noreferrer" title={project.linkTitle}><button className='button-link'>App Link</button>
                </a>
                <a class="" href={project.repoHref}
            target="_blank" rel="noreferrer" title="Link to GitHub repository"><button className='button-link'>GitHub</button>
                </a>
            </div>
        </div>
    )
})
}