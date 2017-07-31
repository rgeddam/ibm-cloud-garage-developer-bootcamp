/* eslint-disable no-param-reassign */
function primeFactorsOf(number) {
  const factors = [];
  let divisor = 2;
  while (number > 1) {
    for (; number % divisor === 0; number /= divisor) factors.push(divisor);
    divisor++;
  }
  return factors;
}

describe.only('the prime factors canary spec', () => {

  it('returns none for 1', () => {
    primeFactorsOf(1).should.deepEqual([]);
  });

  it('returns [2] for 2', () => {
    primeFactorsOf(2).should.deepEqual([2]);
  });

  it('returns [3] for 3', () => {
    primeFactorsOf(3).should.deepEqual([3]);
  });
  it('returns [2, 2] for 4', () => {
    primeFactorsOf(4).should.deepEqual([2, 2]);
  });

  it('returns [5] for 5', () => {
    primeFactorsOf(5).should.deepEqual([5]);
  });

  it('returns [2, 3] for 6', () => {
    primeFactorsOf(6).should.deepEqual([2, 3]);
  });

  it('returns [7] for 7', () => {
    primeFactorsOf(7).should.deepEqual([7]);
  });

  it('returns [2, 2, 2] for 8', () => {
    primeFactorsOf(8).should.deepEqual([2, 2, 2]);
  });

  it('returns [3, 3] for 9', () => {
    primeFactorsOf(9).should.deepEqual([3, 3]);
  });

  //2, 2 , 2 ,2, 2, 3, 3, 7
});
