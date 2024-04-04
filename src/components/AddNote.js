import { useState } from 'react'
import "../styles/AddNote.css"

const AddNote = () => {
    const [noteText, setNoteText] = useState('');

    const handleInput = (event) => {
        setNoteText(event.target.value);
    }

    const saveNote = () => {
        console.log('save')
    }

    return (
        <div className="note-add">
            <textarea 
                placeholder="Add a note.."
                onInput={handleInput}
                value={noteText}>
            </textarea>
            <div class="note-add-footer">
                <span>
                    ..Remaining
                </span>
                <button className="note-save" onClick={saveNote()}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddNote;