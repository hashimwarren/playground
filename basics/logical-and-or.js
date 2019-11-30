let temp = 65

// logical AND operator

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
    
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

// are both vegan?
// at least one vegan
// none are vegan

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('try our vegan options')
    
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('try or vegan and regular options')
    
} else {
    console.log('try anything on on menu')

}