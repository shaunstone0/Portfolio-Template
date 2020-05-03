import { GET_PROJECTS, GET_PROJECT, PROJECT_ERROR, CLEAR } from '../actions/types';

const initalState = {
  project: [],
  projects: [],
  loading: true,
  error: {},
};

export default function (state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR:
      return {
        ...state,
        project: [],
        projects: [],
        loading: false
      }

    default:
      return state;
  }
}
