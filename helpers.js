const add = x => y => x + y
const pluralize =
  (single, plural) => num =>
    `${num} ${Math.abs(num) === 1 ? single : plural}`

module.exports = {
  add,
  pluralize
}
