import reducer from './backpacks';
import { FETCH_BACKPACKS } from '../actions/backpacks';


describe('gear reducer', () => {
  const initialState = {
    loading: false,
    list: []
  };

  const backpacks = [
    {
      name: 'Weekend Backpack Setup',
      backpack: '1',
      gear: ['1', '2']
    },
    {
      name: 'Light Weight Setup',
      backpack: '2',
      gear: ['2', '3']
    }
  ];

  it('returns initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('fetches all backpacks', () => {
    const action = { type: FETCH_BACKPACKS, payload: backpacks };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, list: backpacks });
  });

});
