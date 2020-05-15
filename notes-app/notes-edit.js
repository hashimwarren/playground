const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId

})

if (note === undefined) {
    location.assign('index.html')

}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body

// for TODO
// 1. setup input event for title
// 2. update note object and save notes list
// 3. reeat steps 1-2 for body
// 4. setup a remove button the removes notes and sends users back to home page

