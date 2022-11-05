import React from 'react';
import Projects from './projects.json';
// import images from './images'

export default function Project() {
    return Projects && Projects.map( project => {
    return (
        <div className='projectCard text-light-g-text p-10'>
            <img src={project.src} alt={project.alt}/>
            <div>
            <a class="" href={project.appHref}
            target="_blank" rel="noreferrer" title={project.linkTitle}><button className='button-link'>App Link</button>
            </a>
            <a class="" href={project.repoHref}
            target="_blank" rel="noreferrer" title="Link to GitHub repository"><button className='button-link'>GitHub</button>
            </a>
            </div>
                <div class="project-title">
                     <h3 key={project.id}>{project.name}</h3>
                     <p>{project.about}</p>
                </div>
        </div>
    )
})
}