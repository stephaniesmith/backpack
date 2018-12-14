import {
  FETCH_GEAR,
  FETCH_GEAR_LOADING,
  FETCH_GEAR_DONE,
  CREATE_GEAR
} from '../actions/gear';
import { STATES } from 'mongoose';

const initialState = {
  loading: false,
  list: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_GEAR:
      return { ...state, list: payload };
    case CREATE_GEAR:
      return { ...state, list: [...state.list, payload] };
    case FETCH_GEAR_LOADING:
      return { ...state, loading: true };
    case FETCH_GEAR_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
