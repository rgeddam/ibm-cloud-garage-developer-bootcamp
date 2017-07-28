describe('the palindrome canary spec', () => {
  it('Shows the test infrastructure works', () => {
    true.should.be.true();
  });

  function isPalindrome(phrase) {
    //var removeChar = phrase.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    return phrase.split('').reverse().join('') === phrase;
  }

  describe('a plaindrome', () => {
    it('racecar is palindrome', () => {
      isPalindrome('racecar').should.be.true();
    });
    it('racecars is palindrome', () => {
      isPalindrome('racecars').should.be.false();
    });
  });
});
