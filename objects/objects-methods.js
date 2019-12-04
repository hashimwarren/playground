let restaurant = {
    name: 'Red Rooster',
    guestCapacity: 100,
    guestCount: 0,
    manager: 'madison',
    checkAvailability: function (partySize) {
        if (partySize > this.guestCapacity - this.guestCount ) {
            return `${this.manager} says they can't come in!`    
        }return `${this.manager} says bring them in!`

    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize

    } ,
    removeParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
        
    }
}

restaurant.checkAvailability(4) //?
restaurant.seatParty(100)
restaurant.checkAvailability(4) //?
restaurant.guestCount //?
restaurant.removeParty(5)
restaurant.guestCount //?

