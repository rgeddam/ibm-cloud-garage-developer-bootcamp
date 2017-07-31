
const makeStack = () => {
  let stackSize = 0;

  const isEmpty = () => stackSize === 0;
  const push = () => stackSize++;
  const pop = () => stackSize--;
  const size = () => stackSize;

  return {
    isEmpty,
    push,
    pop,
    size
  };
};

describe.only('the stack spec', () => {

  let stack;

  beforeEach( () => {
    stack = makeStack();
  });

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });

  it('is not be empty when pushed', () => {
    stack.push();
    console.log('Stack size is ' + stack.size());
    stack.isEmpty().should.be.false();
  });

  it('leaves stack size 1 when pushed', () => {
    stack.push();
    stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped', () => {
    stack.isEmpty().should.be.true();
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    console.log('leaves stack size 0 when pushed and popped ' + stack.size());
    stack.size().should.equal(0);
  });

  it('overflows');
  it('under-flows');
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
