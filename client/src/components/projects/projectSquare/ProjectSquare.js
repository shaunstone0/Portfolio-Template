import React from 'react';
import './ProjectSquare.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TechSquare from '../TechSquare';

const ProjectSquare = ({
  data: { name, propicture, desc, tech, todos, author, _id, createdAt },
}) => {
  return (
    <div className='square'>
      <Link _id={_id} to={`project/${_id}`}>
        <div className='image'>
          <img
            src={require(`../../../img/projects/${propicture}`)}
            alt='project'
          />
        </div>
        <div className='project-name'>{name}</div>

        <div className='tech-box flex'>
          {tech.map((tech) => (
            <TechSquare tech={tech} />
          ))}
        </div>
        <div className='flex align-center created-box'>
          <div className='created'> Created Date: {createdAt}</div>
          <div className='created-arrow flex justify-end'>
            <FontAwesomeIcon
              icon='arrow-circle-right'
              className='icon-created'
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectSquare;
