import Note from "./Note";
import "../styles/NotesList.css"

const NotesList = ({notes, handleDeleteNote, updatePosition}) => {
    return (
        <div className="notes-list">
            { notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} toDelete={handleDeleteNote} posX={note.position.x} posY={note.position.y} updatePos={updatePosition}/>
            ))}
        </div>
    );
}

export default NotesList;