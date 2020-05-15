const noteTitleEl = document.querySelector('#note-title')
const noteBodyEl = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId

})

if (note === undefined) {
    location.assign('index.html')

}


noteTitleEl.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
    console.log(notes)
})

noteBodyEl.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

// populate fields with data
noteTitleEl.value = note.title
noteBodyEl.value = note.body


// remove button
document.querySelector("#remove-note")
    .addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        location.assign('index.html')

    })


// TODO challenge
// 1. setup input event for title
// 2. update note object and save notes list
// 3. reeat steps 1-2 for body
// 4. setup a remove button the removes notes and sends users back to home page

