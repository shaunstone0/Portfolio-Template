import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/projects';
import ProjectSquare from './projectSquare/ProjectSquare';

import './Projects.css';
const Projects = ({
  getProjects,
  projects: {
    projects: { data },
    loading,
  },
}) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div className='flex flex-column full-height marginnav justify-between project'>
      {loading || data == null ? (
        <div> loading.. </div>
      ) : (
          data.map((data) => <ProjectSquare key={data._id} data={data} />)
        )}
    </div>
  );
};

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, { getProjects })(Projects);
