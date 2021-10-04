// import { useLocalStore } from 'mobx-react-lite'
// import React from 'react'
// import { createNotesStore } from './notesStore'

// // create notes context
// const NotesContext = React.createContext(null)

// export const NotesProvider = ({children}) => {
//   // initiate notes store in context and allow it to be 'observable'
//   const notesStore = useLocalStore(createNotesStore)

//   // return provider wrapper with access to notes store from all component hiearchies
//   return <NotesContext.Provider value={notesStore}>
//     {children}
//   </NotesContext.Provider>
// }

// export const useNotesStore = () => React.useContext(NotesContext)
