import { get, post } from './request';

export const getGear = () => get('/api/gear');
export const postGear = data => post('/api/gear', data);
