let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)



document.querySelector('#create-note').addEventListener('click', function (e) {
    const noteId = uuidv4()
    let timestamp = moment().valueOf()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp

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


// 1. add createdAt and updatedAt to new notes
// 2. update updatedAt when someone edits a title or body
// 3. delete old notes before testing

