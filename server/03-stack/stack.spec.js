
const makeStack = (maxSize) => {

  let stackValues = [];
  if (maxSize < 1) throw new Error('Stack Size cannot be < 1');

  const isEmpty = () => stackValues.length === 0;
  const size = () => stackValues.length;

  const push = (value) => {
    if (stackValues.length === maxSize) throw new Error('Cannot exceed 3');
    stackValues.push(value);
  };

  const pop = () => {
    if (stackValues.length === 0) throw new Error('Cannot be -1');
    return stackValues.pop();
  };

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
    stack.size().should.be.equal(0);
  });

  it('overflows', () => {
    stack = makeStack(3);
    stack.push();
    stack.push();
    stack.push();
    const overFlowStack = () => {
      stack.push();
    };
    overFlowStack.should.throw('Cannot exceed 3');
  });

  it('under-flows', () => {
    stack.push();
    stack.pop();

    const underFlowStack = () => {
      stack.pop();
    };
    underFlowStack.should.throw('Cannot be -1');
  });

  it('pops the same one pushed', () => {
    stack.push('a');

    stack.pop().should.be.equal('a');
  });
  it('pops the same two pushed', () => {
    stack.push('x');
    stack.push('y');

    stack.pop().should.be.equal('y');
    stack.pop().should.be.equal('x');
  });
  it('accepts only positive capacity', () => {
    const pushPositiveValues = () => {
      stack = makeStack(0);
    };
    pushPositiveValues.should.throw('Stack Size cannot be < 1');
  });
});
