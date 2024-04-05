import Note from "./Note";
import "../styles/NotesList.css"
import AddNote from "./AddNote.js"

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className="notes-list">
            <AddNote addNoteData={handleAddNote}/>
            { notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} toDelete={handleDeleteNote}/>
            ))}
        </div>
    );
}

export default NotesList;