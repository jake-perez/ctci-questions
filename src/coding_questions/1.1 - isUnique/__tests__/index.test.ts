import { isUniqueFast, isUniqueSlow } from '..';

describe('isUnique', () => {
  it('should detect unique strings', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz1234567890,./;[]-=';

    expect(isUniqueSlow(str)).toEqual(true);
    expect(isUniqueFast(str)).toEqual(true);
  });

  it('should detect non-unique strings', () => {
    const str = 'abcdefghijklm4nopqrstuvwxyz1234567890,./;[]-=';

    expect(isUniqueSlow(str)).toEqual(false);
    expect(isUniqueFast(str)).toEqual(false);
  });
});
