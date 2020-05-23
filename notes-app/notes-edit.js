// 1. Add a DOM element between the title and body inputs
// 2. set text value: Last edited 4 hours ago
// 3. Update value on title/body/storage change



const noteTitleEl = document.querySelector('#note-title')
const noteBodyEl = document.querySelector('#note-body')
const lastEditEl = document.querySelector('#last-edited')


const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId

})

if (note === undefined) {
    location.assign('index.html')

}


noteTitleEl.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditEl.textContent = generateLastEdited(note.updatedAt)

    saveNotes(notes)
})

noteBodyEl.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditEl.textContent = generateLastEdited(note.updatedAt)

    saveNotes(notes)
})

// populate fields with data
noteTitleEl.value = note.title
noteBodyEl.value = note.body
lastEditEl.textContent = generateLastEdited(note.updatedAt)

// remove button
document.querySelector("#remove-note")
    .addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        location.assign('index.html')

    })

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find(function (note) {
            return note.id === noteId

        })

        if (note === undefined) {
            location.assign('index.html')

        }
        noteTitleEl.value = note.title
        noteBodyEl.value = note.body
        lastEditEl.textContent = generateLastEdited(note.updatedAt)


    }

})