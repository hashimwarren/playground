const fizzBuzz = (numberLength, names) => {
    let number = new Array(numberLength)
    let newNumber = number.map((item, index) => {

        if (!item.index === 100) {
            number.push(item.index)

        }





    })

    console.log(newNumber);

}


fizzBuzz(100, { fizz: 3, buzz: 5, bazz: 7 })


