describe.only('the prime factors canary spec', () => {
  it('returns none for 1');
  it('returns [2] for 2');
  it('returns [3] for 3');
  it('returns [2, 2] for 4');
  it('returns [5] for 5');
  it('returns [2, 3] for 6');
  it('returns [7] for 7');
  it('returns [2, 2, 2] for 8');
  it('returns [3, 3] for 9');
});
