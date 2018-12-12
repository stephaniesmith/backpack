import { getGear } from './gear';

describe('gear selector', () => {
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

  const state = {
    gear: {
      loading: false,
      list: gear
    }
  };

  it('gets a list of gear', () => {
    expect(getGear(state)).toEqual(gear);
  });

});
