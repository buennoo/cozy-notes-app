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
  
  const readDarkMode = localStorage.getItem('dark') === 'true';
  const [darkMode, setDarkMode] = useState(readDarkMode);

  //manipulating the DOM directly because of the <body> tag
  useEffect(() => {
    localStorage.setItem('dark', darkMode);
    if(darkMode) {
      document.body.style.backgroundColor = "rgb(29, 29, 29)";
    }
    else {
      document.body.style.backgroundColor = "";
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