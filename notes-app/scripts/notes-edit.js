'use strict'

const noteTitleEl = document.querySelector('#note-title')
const noteBodyEl = document.querySelector('#note-body')
const lastEditEl = document.querySelector('#last-edited')


const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('index.html')

}


noteTitleEl.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEditEl.textContent = generateLastEdited(note.updatedAt)

    saveNotes(notes)
})

noteBodyEl.addEventListener('input', (e) => {
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
    .addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        location.assign('index.html')

    })

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find((note) => note.id === noteId)

        if (!note) {
            location.assign('index.html')

        }
        noteTitleEl.value = note.title
        noteBodyEl.value = note.body
        lastEditEl.textContent = generateLastEdited(note.updatedAt)


    }

})