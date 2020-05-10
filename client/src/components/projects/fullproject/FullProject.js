import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjectById } from '../../../actions/projects';
import './FullProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FullProject = ({
  getProjectById,
  projects: {
    project: { data },
    loading,
  },
  match,
}) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match]);

  return (
    <div className='marginnav fullproject'>
      {' '}
      {loading || data == null ? (
        <div> Loading...</div>
      ) : (
        <div>
          <div className='project-title yellow-bg black uppercase'>
            {data.name}
          </div>
          <section className='grey project-img flex'>
            <div>
              <img
                src={require(`../../../img/projects/${data.picture}`)}
                alt='picture1'
              />
            </div>
            <div className='problem-desc '>
              <span className='problem-title uppercase flex justify-center align-center'>
                The Problem{' '}
                <FontAwesomeIcon
                  icon='caret-right'
                  className='icon yellow icon-project'
                />
              </span>
              <p>{data.problemDesc}</p>
            </div>
          </section>
          <section className='flex section-project project-img'>
            <div className='app-details'>
              <span className='problem-title uppercase flex justify-center align-center'>
                Application Details{' '}
                <FontAwesomeIcon
                  icon='caret-right'
                  className='icon yellow icon-project'
                />
              </span>
              <p>{data.detailedDesc}</p>
              <br />
              <p>{data.moreDesc}</p>
            </div>
            <div>
              <img
                src={require(`../../../img/projects/2nd Project/${data.picture3}`)}
                alt='picture2'
              />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

FullProject.propTypes = {
  getProjectById: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { getProjectById })(FullProject);
