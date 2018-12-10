import { getGear } from '../services/gear';

export const FETCH_GEAR = 'FETCH_GEAR';
export const FETCH_GEAR_LOADING = 'FETCH_GEAR_LOADING';
export const FETCH_GEAR_DONE = 'FETCH_GEAR_DONE';

export const fetchGear = () => ({
  type: FETCH_GEAR,
  loadStart: FETCH_GEAR_LOADING,
  loadEnd: FETCH_GEAR_DONE,
  payload: getGear()
});
