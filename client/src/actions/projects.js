import axios from 'axios';
import { GET_PROJECTS, GET_PROJECT, PROJECT_ERROR } from './types';

export const getProjects = () => async (dispatch) => {
  try {
    const res = await axios.get('/projects');

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err },
    });
  }
};

export const getProjectById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/projects/${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err },
    });
  }
};

