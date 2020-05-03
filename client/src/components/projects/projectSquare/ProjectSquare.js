import React from 'react';
import './ProjectSquare.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProjectSquare = ({
  data: { name, picture, desc, tech, todos, author, _id },
}) => {
  return (
    <div>
      <div className='project-square project'>
        <Link _id={_id} to={`project/${_id}`}>
          <div className='project-pic'>
            <img
              src={require(`../../../img/projects/${picture}`)}
              alt='TimeKeeper'
            />
          </div>

          <div className='flex justify-between title-project'>
            <div className='small project-name bold'>
              {name}
              <p className='creator'>{author}</p>
            </div>
            <div>
              <FontAwesomeIcon icon='arrow-circle-right' className='icon' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSquare;
