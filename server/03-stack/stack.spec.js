
const makeStack = () => {
  let stackSize = 0;

  const isEmpty = () => stackSize === 0;
  const push = () => stackSize++;
  const size = () => stackSize;

  return {
    isEmpty,
    push,
    size
  };
};

let stack = makeStack();

describe.only('the stack spec', () => {


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
    //stack.push();
    stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped');
  it('leaves stack size 0 when pushed and popped');
  it('overflows');
  it('under-flows');
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
