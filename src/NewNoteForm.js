import React, {useState} from 'react'
import { NotesStore } from './notesStore'

export const NewNoteForm = () => {
  const [noteText, setNoteText] = useState("")

  return <>
    <input value={noteText} onChange={(e) => setNoteText(e.target.value)} />
    <button onClick={() => NotesStore.addNote(noteText)}>Add Note</button>
  </>
}
