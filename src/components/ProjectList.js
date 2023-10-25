import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects = [] }) => {
  console.log(projects);
  return (
    <div className="project-list" data-testid="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} 
        name={project.name} 
        about={project.about} 
        technologies={project.technologies} />
      ))}
    </div>
  );
};

export default ProjectList;