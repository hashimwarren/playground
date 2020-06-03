// const myAge = 27
// const message = myAge >= 27 ? 'You can vote' : 'You cannot vote'

const myAge = 27

const showPage = () => {
    return 'showing the page 1'
}

const showErrorPage = () => {
    return 'show error page 1'
}

const message = myAge >= 28 ? showPage() : showErrorPage()

console.log(message)

const team = {
    names: ['Tyler', 'Porter', 'Hashim', 'Alex'],
    maxTeam: 4
}

const teamMessage = function (maxTeam, team) {
    console.log(team.length <= maxTeam ? `Team size: ${team.length}` : `Your team is too large`)
}

teamMessage(team.maxTeam, team.names) //?

//const teamMessage = team.length <= 4 ? `Team size: ${team.length}` : `Your team is too large` //?

teamMessage //?

// if (myAge >= 18) {
//     message = 'You can watch'

// } else {
//     message = 'You cannot vote'
// }

// console.log(message)