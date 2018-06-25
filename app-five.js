const title = 'Combine Stateful Computations Using A State Monad';
console.log(title);

const State = require('crocks/State');
const { get, modify } = State;
const { add, inc } = require('./helpers');
const constant = require('crocks/combinators/constant');

// addState :: Number => State Number
const addState = n => get(add(n));

// incState :: Number => State Number
const incState = n => modify(inc).map(constant(n));

// compute :: Number -> State Number
const compute = n =>
  State.of(n)
    .chain(addState)
    .chain(incState);

console.log(compute(10).evalWith(2));
