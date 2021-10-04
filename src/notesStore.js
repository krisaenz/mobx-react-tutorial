import { action, makeObservable, observable } from "mobx"
// All properties you want to change over time are marked as observable so MobX can track them.
// An action is any piece of code that changes the state.

// Derivations exist in many forms:
// - The user interface
// - Derived data, such as the number of remaining todos
// - Backend integrations, e.g. sending changes to the server
// * The golden rule is, always use computed if you want to create a value based on the current state.

class NotesStoreImpl {
  notes = []

  constructor(notes) {
    makeObservable(this, {
      notes: observable,
      addNote: action,
      removeNote: action
    })
    this.notes = notes
  }

  addNote(text) {
    console.log('adding note')
    this.notes.push({ text, id: Math.random() })
    console.log('Notes: ', this.notes)
  }

  removeNote(id) {
    console.log('removing note')
    this.notes = this.notes.filter(note => note.id !== id)
  }

}

export const NotesStore = new NotesStoreImpl()
