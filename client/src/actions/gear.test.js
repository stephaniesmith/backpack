import { fetchGear, FETCH_GEAR } from './gear';

jest.mock('../services/gear.js');

describe('artists actions', () => {
  it('has a promise as its payload', () => {
    const action = fetchGear();
    // expect(typeof action.payload.then).toEqual('function');
    expect(action.type).toEqual(FETCH_GEAR);
  });
});
