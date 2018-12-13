import { fetchBackpacks, FETCH_BACKPACKS } from './backpacks';

jest.mock('../services/backpacks.js');

describe('backpacks actions', () => {
  it('has a promise as its payload', () => {
    const action = fetchBackpacks();
    expect(action.type).toEqual(FETCH_BACKPACKS);
  });
});
