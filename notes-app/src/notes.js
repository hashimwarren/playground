import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Read existing notes from localStorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }

}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Expose notes from Module
const getNotes = () => notes

const createNote = () => {
    const noteId = uuidv4()
    let timestamp = moment().valueOf()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp

    })
    saveNotes()

}

notes = loadNotes()

export { getNotes, createNote }