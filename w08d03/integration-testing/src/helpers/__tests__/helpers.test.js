import { calcStatus, skynet } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(calcStatus()).toBe('Waiting');
  });
});

describe('skynet function', () => {

  test('when cheating is false, returns a valid response', () => {
    const playerSelection = 'Moai';
    const isCheating = false;
    const actual = skynet(playerSelection, isCheating);

    const options = ['Moai', 'Axe', 'Tree'];

    // expect(options.includes(actual)).toBe(true);
    expect(options).toContain(actual);
  });

  test('when cheating is true, returns the winning response', () => {
    const playerSelection = 'Moai';
    const isCheating = true;
    const actual = skynet(playerSelection, isCheating);

    const expected = 'Tree';

    expect(actual).toBe(expected);
  });

});
