// const makeStack = () => {
//   let queue = 0;
//   const isEmpty = () => queue === 0;
//   const push = () => queue++;
//   const size = () => queue;
//
//   return {
//     isEmpty,
//     push,
//     size
//   };
// };
//
// let stack = makeStack();

describe.only('the stack spec', () => {
  // beforeEach(() => {
  //   stack = makeStack();
  // });
  //
  // it('starts empty', () => {
  //   stack.isEmpty().should.be.true();
  // });
  // it('starts with stack size 0', () => {
  //   stack.size().should.equal(0);
  // });
  //
  //
  // it('is not be empty when pushed', () => {
  //   stack.push();
  //   stack.isEmpty().should.be.false();
  // });
  //
  //
  // it('leaves stack size 1 when pushed', () => {
  //   stack.push();
  //   console.log('Stack Size = ' + stack.size());
  //   stack.size().should.equal(1);
  // });
  //
  // it('leaves stack empty when pushed and popped');
  // it('leaves stack size 0 when pushed and popped');
  // it('overflows');
  // it('under-flows');
  // it('pops the same one pushed');
  // it('pops the same two pushed');
  // it('accepts only positive capacity');

  it('starts empty');
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
