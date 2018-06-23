const { get } = require('crocks/State');
const compose = require('crocks/helpers/compose');
const objOf = require('crocks/helpers/objOf');
const option = require('crocks/pointfree/option');
const prop = require('crocks/Maybe/prop');

const { burgers, tacos } = require('./data');

// defaultProp :: (String, a) -> Object -> b
const defaultProp = (key, def) => compose(option(def), prop(key));

// getBurgers :: State Object a
const getBurgers = get(defaultProp('burgers', 0));

// burgersToTacos :: State Object
const burgersToTacos = getBurgers.map(objOf('tacos'));

console.log(getBurgers.evalWith(burgers));

console.log(burgersToTacos.evalWith(tacos));
