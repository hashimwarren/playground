const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()

counter.increment()
counter.decrement()
counter.decrement()
counter.get() //?

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
add10(-2) //?
add10(20) //?

const add100 = createAdder(100)
add100(-90) //?


const createTipper = (base) => {
    return (bill) => {
        return `$${bill * base}`
    }

}

const tip15 = createTipper(.15)
const tip20 = createTipper(.20)

tip15(90) //?
tip20(300) //?