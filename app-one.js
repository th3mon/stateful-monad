// State s a
// (s -> (a, s))
const State = require('crocks/State');
const { get } = require('crocks/State');
const Pair = require('crocks/Pair');
const compose = require('crocks/helpers/compose');

const updateValue = x => State(s => Pair(s + x, s));

const updateState = x => State(s => Pair(s, s + x));

// console.log(updateValue(10).runWith(45));
// console.log(updateState(10).runWith(45));

const { add, pluralize } = require('./helpers');

// getState :: () -> State s
const getState = () => State(s => Pair(s, s));

// makeAwesome :: Number -> String
const makeAwesome = pluralize('Awesome', 'Awesomes');

// flow :: Number -> String
const flow = compose(makeAwesome, add(10));

console.log(
  getState()
    // .map(add(10))
    // .map(makeAwesome)
    .map(flow)
    .runWith(23)
    .fst()
);

console.log(
  get()
    // .map(add(10))
    // .map(makeAwesome)
    .map(flow)
    .runWith(23)
    .fst()
);
