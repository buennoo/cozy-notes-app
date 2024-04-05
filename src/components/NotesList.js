import Note from "./Note";
import "../styles/NotesList.css"
import AddNote from "./AddNote.js"

const NotesList = ({notes, handleAddNote}) => {
    return (
        <div className="notes-list">
            <AddNote addNoteData={handleAddNote}/>
            { notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date}/>
            ))}
        </div>
    );
}

export default NotesList;