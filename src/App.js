import { useState, useEffect } from 'react';
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
  
  const [darkMode, setDarkMode] = useState(false);

  //manipulating the DOM directly because of <body> tag
  useEffect(() => {
    if(darkMode) {
      document.body.style.backgroundColor = "rgb(29, 29, 29)";
      document.body.style.color = "rgb(221, 216, 205)";
    }
    else {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }
  }, [darkMode]);

  return (
    <div className={"page-wrap"}>
      <Header turnDarkMode={setDarkMode} headerDarkMode={darkMode}/>
      <NotesList notes={notes} handleAddNote={addNewNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;