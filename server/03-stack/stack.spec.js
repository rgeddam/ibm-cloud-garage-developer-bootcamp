describe.only('the stack spec', () => {
  let stack = {
    isEmpty: () => true,
    push: () => {},
    size: 0
  };

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });
  it('starts with stack size 0');
  it('is not be empty when pushed');
  it('leaves stack size 1 when pushed');
  it('leaves stack empty when pushed and popped');
  it('leaves stack size 0 when pushed and popped');
  it('overflows');
  it('under-flows');
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
