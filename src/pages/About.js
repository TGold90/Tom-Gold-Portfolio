import React from 'react';

// need to figure out the height for all of the pages 

export default function About() {
    return (
    <section className='text-plutonium px-10'>
        <h3 className='page-title glow-text'>Stats and Bio</h3>
        <p>I am a web developerLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut sagittis sapien. Nam id commodo nulla. Fusce egestas rhoncus enim, vel rutrum sapien pretium nec. Vestibulum tincidunt semper sapien nec laoreet. Quisque ut eleifend est. Pellentesque rutrum, turpis sed rhoncus eleifend, dui nisl fringilla libero, sed tincidunt augue erat et risus. Vestibulum ligula ipsum, hendrerit et risus nec, pellentesque congue purus. Proin aliquam imperdiet rhoncus. Duis sed malesuada nunc, pulvinar imperdiet leo. Nunc egestas elit id lorem ullamcorper, a posuere dolor volutpat.</p>
        <div className='p-5'>
            <h4>Technologies</h4>
            <ul className='p-5 list-none flex flex-wrap flex-row'>
                <li className='p-5'>Javascript</li>
                <li className='p-5'>Javascript</li>
                <li className='p-5'>Javascript</li>
                <li className='p-5'>Javascript</li>
            </ul>
        </div>
    </section>
    )
}