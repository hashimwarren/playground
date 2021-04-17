// named export
// default export

//TODO fix webpack servers

const add = (a, b) => a + b

const name = 'Madison Georgiann Warren'

const square = (x) => x * x
console.log('from my code');
export { add, name, square as default }