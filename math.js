const add = (a, b) => a + b
const sub = (a, b) => a - b

const test = (a, b) => add(a, b) / sub(a, b)

module.exports = {
    add,
    sub,
    test,
}