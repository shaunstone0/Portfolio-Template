import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjectById } from '../../../actions/projects';
import './FullProject.css'

const FullProject = ({ getProjectById, projects: { project: { data }, loading }, match }) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match]);



  return <div className='marginnav fullproject' > {loading || data == null ? (<div> Loading..</div >) : (
    <div>
      <div className="medium project-title">{data.name}</div>
      <div className="picture"><img src={require(`../../../img/projects/${data.picture}`)} alt="" /></div>
      <div className="desc">{data.desc}</div>

    </div>)}




  </div>
};

FullProject.propTypes = {
  getProjectById: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { getProjectById })(FullProject);
