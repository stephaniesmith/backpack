import reducer from './gear';
import { FETCH_GEAR } from '../actions/gear';


describe('gear reducer', () => {
  const initialState = {
    loading: false,
    list: []
  };

  const gear = [
    {
      name: 'R1',
      brand: 'Patagonia',
      type: 'clothes',
      weight: 9.87
    },
    {
      name: 'Lone Peak 3.0',
      brand: 'Altra',
      type: 'footwear',
      weight: 8.7
    }
  ];

  it('returns initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('fetches all gear', () => {
    const action = { type: FETCH_GEAR, payload: gear };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, list: gear });
  });

});
