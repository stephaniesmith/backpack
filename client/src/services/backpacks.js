import { get } from './request';

export const getBackpacks = () => get('/api/backpacks');

export const getBackpack = id => get(`/api/backpacks/${id}`);
