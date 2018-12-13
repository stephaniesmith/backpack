import {
  FETCH_BACKPACKS,
  FETCH_BACKPACK,
  FETCH_BACKPACK_LOADING,
  FETCH_BACKPACK_DONE,
} from '../actions/backpacks';

const initialState = {
  loading: false,
  list: [],
  detail: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_BACKPACKS:
      return { ...state, list: payload };
    case FETCH_BACKPACK:
      return { ...state, detail: payload };
    case FETCH_BACKPACK_LOADING:
      return { ...state, loading: true };
    case FETCH_BACKPACK_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
