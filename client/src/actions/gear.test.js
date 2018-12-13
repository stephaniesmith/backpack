import { fetchGear, FETCH_GEAR } from './gear';

jest.mock('../services/gear.js');

describe('gear actions', () => {
  it('has a promise as its payload', () => {
    const action = fetchGear();
    expect(action.type).toEqual(FETCH_GEAR);
  });
});
