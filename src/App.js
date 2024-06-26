import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Header from './components/Header';
import AddNote from './components/AddNote';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note~\n\nYou can drag me around :)",
      date: "04/04/2024",
      position: {
        x: 0,
        y: 0
      }
    },
  ]);

  const addNewNote = (input) => {
    const date = new Date();
    const width = window.innerWidth;
    // regex expression to replace dots with slashes globally
    const currentDate = date.toLocaleDateString().replace(/\./g, '/')
    const newNote = {
      id: nanoid(),
      text: input,
      date: currentDate,
      position: {
        x: Math.floor(Math.random()*width),
        y: Math.floor(Math.random()*100)
      }
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    // notes.map((note, index) => {
    //   console.log(index, note.id, note.position.x, note.position.y);
    // })
    const NotesAfter = notes.filter((note) => note.id !== id);
    // console.log('after');
    // // NotesAfter.map((note, index) => {
    // //   console.log(index, note.id, note.position.x, note.position.y);
    // // })
    setNotes(NotesAfter);
  }

  const updateNotePosition = (id, newPosX, newPosY) => {
    setNotes((oldNotes) => 
      oldNotes.map((note) =>
        note.id === id ? { ...note, position: {x: newPosX, y: newPosY} } : note
      )
    );
    console.log('newX:', newPosX);
    console.log('newY:', newPosY);
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
      <div className={"header-wrap"}>
        <Header turnDarkMode={setDarkMode} headerDarkMode={darkMode}/>
        <AddNote addNoteData={addNewNote}/>
      </div>
      <NotesList notes={notes} handleDeleteNote={deleteNote} updatePosition={updateNotePosition}/>
    </div>
  );
}

export default App;