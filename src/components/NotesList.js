import Note from "./Note";
import "../styles/NotesList.css"

const NotesList = ({notes, handleDeleteNote}) => {
    return (
        <div className="notes-list">
            { notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} toDelete={handleDeleteNote}/>
            ))}
        </div>
    );
}

export default NotesList;