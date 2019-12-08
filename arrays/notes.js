const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'

}, {
    title: 'Habbits to work on',
    body: 'Exercise, easting a bit better'

}, {
    title: 'Office modification',
    body: 'Get a new seat'

}]


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            
        } else {
            return 0
        }
        
    })
    
}

sortNotes(notes)

notes //?

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()

    })
     
}



