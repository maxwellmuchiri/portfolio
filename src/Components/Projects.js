import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <a href="project1-url">
            <img src="project1-image-url" alt="Project 1" />
            <h3>Project 1 Name</h3>
          </a>
          <p>Project 1 Description</p>
        </li>
        <li>
          <a href="project2-url">
            <img src="project2-image-url" alt="Project 2" />
            <h3>Project 2 Name</h3>
          </a>
          <p>Project 2 Description</p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
