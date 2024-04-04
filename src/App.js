import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

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

  return (
    <div className="page-wrap">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;