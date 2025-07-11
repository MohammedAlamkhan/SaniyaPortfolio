import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = ({ projects }) => {
  let { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page-container">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.details}</p>
      {project.contributions && project.contributions.length > 0 && (
        <div className="project-contributions">
          <h3>My Contributions:</h3>
          <ul>
            {project.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
