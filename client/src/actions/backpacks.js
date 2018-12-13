import { getBackpacks, getBackpack } from '../services/backpacks';

export const FETCH_BACKPACKS = 'FETCH_BACKPACKS';
export const FETCH_BACKPACK = 'FETCH_BACKPACK';
export const FETCH_BACKPACK_LOADING = 'FETCH_BACKPACK_LOADING';
export const FETCH_BACKPACK_DONE = 'FETCH_BACKPACK_DONE';

export const fetchBackpacks = () => ({
  type: FETCH_BACKPACKS,
  loadStart: FETCH_BACKPACK_LOADING,
  loadEnd: FETCH_BACKPACK_DONE,
  payload: getBackpacks()
});

export const fetchBackpack = id => ({
  type: FETCH_BACKPACK,
  loadStart: FETCH_BACKPACK_LOADING,
  loadEnd: FETCH_BACKPACK_DONE,
  payload: getBackpack(id)
});
