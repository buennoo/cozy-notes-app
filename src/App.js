import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note!",
      date: "04/04/2024"
    },
    {
      id: nanoid(),
      text: "Second note!",
      date: "04/04/2024"
    },
    {
      id: nanoid(),
      text: "New note!",
      date: "04/04/2024"
    },
  ]);

  const addNewNote = (input) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: input,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="page-wrap">
      <Header />
      <NotesList notes={notes} handleAddNote={addNewNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;