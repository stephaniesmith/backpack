import { getBackpacks } from './backpacks';

describe('backpacks selector', () => {
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

  const state = {
    backpacks: {
      loading: false,
      list: backpacks
    }
  };

  it('gets a list of backpacks', () => {
    expect(getBackpacks(state)).toEqual(backpacks);
  });

});
