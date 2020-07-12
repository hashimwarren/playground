// product --> Object.prototype --> null

const product = new Object({
    name: 'War of Art'
})

product.name = 'Rest'

Object.prototype.hasOwnProperty = () => 'this is the new function'

// hasOwnProperty

console.log(product.hasOwnProperty('hasOwnProperty'))
console.log(product)