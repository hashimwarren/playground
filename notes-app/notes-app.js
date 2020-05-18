let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const noteId = uuidv4()
    notes.push({
        id: noteId,
        title: '',
        body: ''
    })

    saveNotes(notes)
    location.assign('edit.html' + '#' + noteId)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)

    }

})

const now = new Date()
//console.log(now.getTime())
const timestamp = now.getTime()
const myDate = new Date(timestamp)

// console.log(now.toString())
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of Month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Second: ${now.getSeconds()}`)

// 1 create two dates in the past
// 2 get timestamps for both
// 3 figure out which is first and print its time (toString)

const dateOne = new Date('janury 25 2018')
const dateTwo = new Date('janury 25 2017')

if (dateOne.getTime() < dateTwo.getTime()) {
    console.log(dateOne.toString())
} else {
    console.log(dateTwo.toString())
}



