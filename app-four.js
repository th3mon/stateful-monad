const title = 'Modify The State Of A State Monad';
console.log(title);

const { modify } = require('crocks/State');
const State = require('crocks/State');
const Pair = require('crocks/Pair');
const Unit = require('crocks/Unit');
const { add } = require('./helpers');

const mapProps = require('crocks/helpers/mapProps');

const state = { bubbles: 42 };

// modifyState :: (s -> s) -> State s ()
const modifyState = fn => State(s => Pair(Unit(), fn(s)));

// blowBubbles :: Number -> State Object ()
const blowBubbles = n => modifyState(mapProps({ bubbles: add(n) }));

const burstBubbles = n => blowBubbles(-n);
const burstBubble = () => burstBubbles(1);

// blowBubble :: () -> State Object ()
const blowBubble = () => modifyState(mapProps({ bubbles: add(1) }));

const blowBubble2 = () => modify(mapProps({ bubbles: add(1) }));

const blowBubble3 = () => blowBubbles(1);

console.log(blowBubble().execWith(state));

console.log(blowBubble2().execWith(state));

console.log(blowBubble3().execWith(state));

console.log(burstBubbles(10).execWith(state));

console.log(burstBubble().execWith(state));
