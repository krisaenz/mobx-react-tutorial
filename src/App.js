import React, { useEffect } from 'react'
import './App.css'
import { observer } from 'mobx-react'
import { NewNoteForm } from './NewNoteForm'

const App = observer(({ store }) => {

  return <>
    <p>My List of Notes</p>
    <ul>
      {store.notes && store.notes.map(note =>
        <li key={note.id} onClick={() => store.removeNote(note.id)}>
          {note.text}
        </li>
      )}
      <br />
      <NewNoteForm />
    </ul>
  </>

})

export default App
